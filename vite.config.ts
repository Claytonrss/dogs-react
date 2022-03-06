import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const svgrPlugin = require('vite-plugin-svgr');
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, '/src') }],
  },
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
    VitePWA({
      manifest: {
        short_name: 'Dogs',
        name: 'Dogs - Rede Social para Cachorros',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon',
          },
          {
            src: 'icon-192x192.png',
            type: 'image/png',
            sizes: '192x192',
          },
          {
            src: 'icon-256x256.png',
            type: 'image/png',
            sizes: '256x256',
          },
          {
            src: 'icon-384x384.png',
            type: 'image/png',
            sizes: '384x384',
          },
          {
            src: 'icon-512x512.png',
            type: 'image/png',
            sizes: '512x512',
            purpose: 'maskable',
          },
        ],
        start_url: '.',
        display: 'standalone',
        theme_color: '#fb1',
        background_color: '#ffffff',
      },
      workbox: {
        // workbox options for generateSW
      },
    }),
  ],
});
