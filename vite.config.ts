import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Ganti sesuai nama repo GitHub. Untuk domain custom / user-site, pakai '/'.
const REPO_NAME = 'wedding-irma-gentur'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? `/${REPO_NAME}/` : '/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('framer-motion') || id.includes('motion-dom')) return 'motion'
          if (id.includes('@supabase')) return 'supabase'
        },
      },
    },
  },
}))
