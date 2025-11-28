import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Esto ayuda a evitar el uso de eval en producción y mejora el debugging
    sourcemap: true,
  },
})
