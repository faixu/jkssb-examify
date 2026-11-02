import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
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
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'icon.svg'],
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
          maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB to accommodate offline PWA caching
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}'],
          navigateFallbackDenylist: [
            /^\/api\//,
            /^\/\.well-known\//,
            /^\/llms\.txt$/,
            /^\/llms-full\.txt$/,
            /^\/sitemap\.xml$/,
            /^\/sitemap$/,
            /^\/robots\.txt$/,
            /^\/google.*\.html$/,
          ],
          runtimeCaching: [
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
    ],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname || process.cwd(), '.'),
      },
    },
    build: {
      sourcemap: false,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/lucide-react')) {
              return 'vendor-icons';
            }
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
