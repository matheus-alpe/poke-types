import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'PokeTypes',
        short_name: 'PokeTypes',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        theme_color: '#333333',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        lang: 'en',
      },
    }),
  ],
})
