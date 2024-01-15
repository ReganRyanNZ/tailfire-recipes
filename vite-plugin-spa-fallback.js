export function spaFallback() {
  return {
    name: 'spa-fallback',

    configureServer(server) {
        server.middlewares.use((req, res, next) => {
            const [, firstPart, ...pathParts] = req.url.split('/')
            const lastPart = pathParts[pathParts.length- 1]

            // these a vite internal URLs
            if (firstPart.startsWith('_') || firstPart.startsWith('@')) {
                return next()
            }

            // URLs that explicitly target files are not rewritten
            if (lastPart && lastPart.includes('.')) {
                return next()
            }

            // rewrite /foo/bar/baz to /foo/ the downstream middleware 'indexhtml' will take care of the rest
            const match = req.url.match(/^\/([^\/]+)\/?/)
            if (match && match[1]) {
                req.url = `/${match[1]}/`
            }

            next()
        })
    }
  }
}