import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cloudflare()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('gsap')) return 'vendor-gsap'
            if (id.includes('motion')) return 'vendor-motion'
            if (id.includes('react') || id.includes('scheduler')) return 'vendor-react'
            if (id.includes('i18next')) return 'vendor-i18n'
            return 'vendor'
          }
        },
      },
    },
  },
})