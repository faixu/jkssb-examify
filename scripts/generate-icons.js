import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function createCRC32Table() {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    table[n] = c;
  }
  return table;
}

const crcTable = createCRC32Table();
function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);

  const crcBuf = Buffer.alloc(4);
  const crcVal = crc32(Buffer.concat([typeBuf, data]));
  crcBuf.writeUInt32BE(crcVal, 0);

  return Buffer.concat([lenBuf, typeBuf, data, crcBuf]);
}

function generatePngBuffer(width, height, isMaskable = false) {
  // Signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace
  const ihdrChunk = makeChunk('IHDR', ihdr);

  // Raw image data with 1 byte filter (0 = None) per scanline
  const scanlineLength = width * 4 + 1;
  const rawData = Buffer.alloc(scanlineLength * height);

  const cx = width / 2;
  const cy = height / 2;
  const radius = width * 0.42;

  for (let y = 0; y < height; y++) {
    const rowOffset = y * scanlineLength;
    rawData[rowOffset] = 0; // Filter: None

    for (let x = 0; x < width; x++) {
      const pixelOffset = rowOffset + 1 + x * 4;

      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Background gradient (Indigo to Violet to Pink)
      const gradT = (x + y) / (width + height);
      let r = Math.round(79 + gradT * (236 - 79));
      let g = Math.round(70 + gradT * (72 - 70));
      let b = Math.round(229 + gradT * (153 - 229));
      let a = 255;

      // Card drawing inside safe zone
      // Central rounded rectangle representing flashcard
      const cardW = width * 0.48;
      const cardH = height * 0.60;
      const cardX = cx - cardW / 2;
      const cardY = cy - cardH / 2;

      const inCardX = x >= cardX && x <= cardX + cardW;
      const inCardY = y >= cardY && y <= cardY + cardH;

      if (inCardX && inCardY) {
        // Inner flashcard (white to soft indigo)
        const cardGrad = (y - cardY) / cardH;
        r = Math.round(255 - cardGrad * 25);
        g = Math.round(255 - cardGrad * 25);
        b = 255;

        // Draw lightning bolt in center
        // Points: (cx, cy - 25%) to (cx - 15%, cy) to (cx + 5%, cy) to (cx - 5%, cy + 25%) to (cx + 15%, cy - 5%) to (cx - 5%, cy - 5%)
        const boltX = (x - cx) / (width * 0.2);
        const boltY = (y - cy) / (height * 0.2);
        if (Math.abs(boltX + boltY * 0.5) < 0.35 && Math.abs(boltY) < 0.6) {
          r = 99; g = 102; b = 241; // Indigo lightning
        }
      }

      if (!isMaskable && dist > radius * 1.15) {
        // Smooth outer border if not maskable
        const borderDist = dist - radius * 1.15;
        if (borderDist > 4) {
          a = 0;
        } else {
          a = Math.max(0, Math.min(255, Math.round((1 - borderDist / 4) * 255)));
        }
      }

      rawData[pixelOffset] = r;
      rawData[pixelOffset + 1] = g;
      rawData[pixelOffset + 2] = b;
      rawData[pixelOffset + 3] = a;
    }
  }

  const deflated = zlib.deflateSync(rawData);
  const idatChunk = makeChunk('IDAT', deflated);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'pwa-192x192.png'), generatePngBuffer(192, 192, false));
fs.writeFileSync(path.join(publicDir, 'pwa-512x512.png'), generatePngBuffer(512, 512, false));
fs.writeFileSync(path.join(publicDir, 'pwa-maskable-512x512.png'), generatePngBuffer(512, 512, true));
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), generatePngBuffer(180, 180, false));
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), generatePngBuffer(64, 64, false));

console.log('Successfully generated all PWA icons in /public!');
