// I'm kinda proud of this.

/**
 * Setup offline PWA navigation.
 *
 * @param {Function} renderApp The function that will rerender the entire app
 */
export const navigationSetup = (renderApp) => {

  // Offline navigation for forwards/backwards with browser history
  const navigateHistory = (e) => {
    e.preventDefault()
    e.stopPropagation()
    renderApp()
    window.scrollTo(0, 0)
  }
  window.addEventListener("popstate", navigateHistory)


  // Reroute links to be offline, calling renderApp instead of an http request
  const activateLink = (e) => {
    let link = e.target.closest('a')
    if(link) {
      e.preventDefault()
      e.stopPropagation()
      window.history.pushState({}, '', link.href)
      renderApp()
      window.scrollTo(0, 0)
    }
  }
  window.addEventListener("click", activateLink)

  // initial render
  renderApp()
}

/**
 * Returns the current route as an array of individual paths
 * @returns String[]
 */
export const currentRoute = () => {
  return window.location.pathname.split('/').filter(str => str.length > 0)
}

/**
 * Returns whether current navigation is at the home page
 * @returns Boolean
 */
export const homeRoute = () => {
  return currentRoute().length == 0
}