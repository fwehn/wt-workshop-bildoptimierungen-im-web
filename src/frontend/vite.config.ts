import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/images': {
        target: 'http://localhost:5172',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/images/, '/images'),
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq, req) => {
            proxyReq.setHeader('User-Agent', req.headers['user-agent'] ?? "");
          });
        },
      },
      '/limited': {
        target: 'http://localhost:5172',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/limited/, '/limited'),
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq, req) => {
            proxyReq.setHeader('User-Agent', req.headers['user-agent'] ?? "");
          });
        },
      },
    },
  },

})
