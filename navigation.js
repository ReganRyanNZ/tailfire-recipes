// I'm kinda proud of this.
// Offline routing that only uses 2 methods:
// - Route() gives you the current route as an array of strings
// - NavigationSetup() causes all site navigation to be offline, you just need
//   to pass in the main "render" method to rerender based on the current route

export const Route = () => {
  return window.location.pathname.split('/').filter(str => str.length > 0)
}

export const NavigationSetup = (renderApp) => {

  // Offline navigation for forwards/backwards with browser history
  const navigateHistory = (e) => {
    e.preventDefault();
    e.stopPropagation();
    renderApp()
    window.scrollTo(0, 0);
  }
  window.addEventListener("popstate", navigateHistory);


  // Reroute links to be offline, calling renderApp instead of an http request
  const activateLink = (e) => {
    let link = e.target.closest('a')
    console.log(link)
    if(link) {
      e.preventDefault();
      e.stopPropagation();
      window.history.pushState({}, '', link.href)
      renderApp()
      window.scrollTo(0, 0);
    }
  }
  window.addEventListener("click", activateLink);
}
