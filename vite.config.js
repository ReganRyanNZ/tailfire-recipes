import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({ registerType: 'autoUpdate',
              workbox: { globPatterns: ["**/*"] }, // cache all the imports
              includeAssets: [ "**/*" ], // cache all the static assets in the public folder
              manifest: {
                "name": "Tailfire Recipes",
                "short_name": "Recipes",
                "start_url": "/",
                "description": "Cookbook for good food, simply explained",
                "display": "standalone",
                "theme_color": "#242424",
                "background_color": "#242424",
                "lang": "en",
                "scope": "/",
                "icons": [
                  {
                      "src": "/android-chrome-192x192.png",
                      "sizes": "192x192",
                      "type": "image/png"
                  },
                  {
                      "src": "/android-chrome-512x512.png",
                      "sizes": "512x512",
                      "type": "image/png"
                  },
                  {
                    "src": "/maskable_icon_192x192.png",
                    "sizes": "192x192",
                    "type": "image/png",
                    "purpose": "maskable"
                  },
                  {
                    "src": "/maskable_icon_512x512.png",
                    "sizes": "512x512",
                    "type": "image/png",
                    "purpose": "maskable"
                  }
                ]
              }
    })
  ],
  base: './',
})
