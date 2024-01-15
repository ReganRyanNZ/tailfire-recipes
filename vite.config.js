// vite.config.js
import { spaFallback } from './vite-plugin-spa-fallback'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [spaFallback()],
})
