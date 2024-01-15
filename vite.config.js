// vite.config.js
import { spaFallback } from './vite-plugin-spa-fallback'

export default defineConfig({
  plugins: [spaFallback()],
})
