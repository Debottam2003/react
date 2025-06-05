import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'My Vite PWA',
        short_name: 'VitePWA',
        description: 'My awesome Progressive Web App using Vite + React',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'DebText.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'DebText.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'DebText.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});
