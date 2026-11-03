import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import * as esbuild from 'esbuild';
import path from 'path';
import {defineConfig} from 'vite';
import {VitePWA} from 'vite-plugin-pwa';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: null,
        includeAssets: ['favicon.ico', 'icon.svg'],
        manifest: {
          id: '/',
          name: 'FlashMind Quiz & Flashcards',
          short_name: 'FlashMind',
          description: 'Interactive flashcard quiz game with accounting, economics, statistics, English grammar, science, computer science, modern history, and general knowledge with offline PWA support, progress tracking, and daily streaks.',
          theme_color: '#4f46e5',
          background_color: '#0f172a',
          display: 'standalone',
          start_url: '/',
          scope: '/',
          icons: [
            {
              src: '/assets/aistudio/logo_flashmind_77da4392.png',
              sizes: '1024x1024',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-maskable-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
        workbox: {
          // Only precache lightweight app icons and manifest (< 5 KiB total) on install
          // instead of downloading all 3.8 MB of question chunks on first mobile visit
          globPatterns: ['**/*.{ico,svg,webmanifest}'],
          navigateFallback: null,
          runtimeCaching: [
            {
              urlPattern: /\/assets\/.*\.(?:js|css)$/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'flashmind-assets-cache',
                expiration: {
                  maxEntries: 60,
                  maxAgeSeconds: 60 * 60 * 24 * 30,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /\/.*\.(?:png|ico|svg|webp)$/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'flashmind-images-cache',
                expiration: {
                  maxEntries: 20,
                  maxAgeSeconds: 60 * 60 * 24 * 90,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
        devOptions: {
          enabled: false,
        },
      }),
      {
        name: 'suppress-hmr-ws-error',
        apply: 'serve',
        transformIndexHtml: {
          order: 'pre',
          handler() {
            return [
              {
                tag: 'script',
                children: `(function() {
  if (typeof window === 'undefined') return;
  try {
    class MockHMRWebSocket extends EventTarget {
      static CONNECTING = 0; static OPEN = 1; static CLOSING = 2; static CLOSED = 3;
      CONNECTING = 0; OPEN = 1; CLOSING = 2; CLOSED = 3;
      constructor(url, protocols) {
        super();
        this.url = String(url);
        this.protocol = Array.isArray(protocols) ? (protocols[0] || '') : (protocols || '');
        this.readyState = 1;
        this.bufferedAmount = 0; this.extensions = ''; this.binaryType = 'blob';
        this.onopen = null; this.onmessage = null; this.onerror = null; this.onclose = null;
        var self = this;
        setTimeout(function() {
          var openEvt = new Event('open');
          self.dispatchEvent(openEvt);
          if (typeof self.onopen === 'function') {
            try { self.onopen(openEvt); } catch (e) {}
          }
        }, 0);
      }
      send() {}
      close(code, reason) {
        this.readyState = 3;
        var closeEvt = new CloseEvent('close', { wasClean: true, code: code || 1000, reason: reason || '' });
        this.dispatchEvent(closeEvt);
        if (typeof this.onclose === 'function') {
          try { this.onclose(closeEvt); } catch (e) {}
        }
      }
    }
    window.WebSocket = MockHMRWebSocket;
  } catch (e) {}
  var origErr = console.error;
  console.error = function() {
    var txt = '';
    for (var i = 0; i < arguments.length; i++) {
      var a = arguments[i];
      txt += ' ' + (a instanceof Error ? a.message + ' ' + (a.stack || '') : String(a));
    }
    if (txt.indexOf('WebSocket') !== -1 || txt.indexOf('@vite/client') !== -1) return;
    origErr.apply(console, arguments);
  };
})();`,
                injectTo: 'head-prepend',
              },
            ];
          },
        },
      },
      {
        name: 'inline-render-blocking-css',
        apply: 'build',
        enforce: 'post',
        generateBundle(_options, bundle) {
          // 1. Ensure all emitted JavaScript chunks are minified & stripped of comments
          for (const item of Object.values(bundle)) {
            if (item.type === 'chunk' && item.fileName.endsWith('.js') && typeof item.code === 'string') {
              try {
                const minified = esbuild.transformSync(item.code, {
                  minify: true,
                  legalComments: 'none',
                  target: 'es2020',
                });
                item.code = minified.code;
              } catch (_e) {
                // Keep original code if transform fails
              }
            }
          }

          const htmlAsset = bundle['index.html'];
          if (!htmlAsset || htmlAsset.type !== 'asset' || typeof htmlAsset.source !== 'string') {
            return;
          }
          let html = htmlAsset.source;

          // 2. Minify and inline compiled stylesheet assets directly into <head>
          html = html.replace(
            /<link\s+rel="stylesheet"[^>]*href="\/?(assets\/[^"]+\.css)"[^>]*>/gi,
            (fullMatch, cssPath) => {
              const cssAsset = bundle[cssPath];
              if (cssAsset && cssAsset.type === 'asset' && typeof cssAsset.source === 'string') {
                let cssCode = cssAsset.source;
                try {
                  cssCode = esbuild.transformSync(cssCode, {
                    loader: 'css',
                    minify: true,
                    legalComments: 'none',
                  }).code;
                } catch (_e) {
                  // Keep original CSS if transform fails
                }
                delete bundle[cssPath];
                return `<style id="inlined-critical-tailwind">${cssCode}</style>`;
              }
              return fullMatch;
            }
          );

          htmlAsset.source = html;
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname || process.cwd(), '.'),
      },
    },
    build: {
      minify: 'esbuild',
      sourcemap: false,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/firebase') || id.includes('node_modules/@firebase')) {
              return 'vendor-firebase';
            }
            if (
              id.includes('node_modules/react') ||
              id.includes('node_modules/react-dom') ||
              id.includes('node_modules/scheduler')
            ) {
              return 'vendor-react';
            }
            if (id.includes('/src/data/questions/')) {
              const match = id.match(/\/src\/data\/questions\/([^/.]+)/);
              if (match && match[1]) {
                return `questions-${match[1].toLowerCase()}`;
              }
            }
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio preview environment
      hmr: process.env.ENABLE_HMR === 'true',
      watch: process.env.ENABLE_HMR === 'true' ? {} : null,
    },
  };
});
