import './assets/style.css'
import './assets/styleSmall.css'
import { navigationSetup, currentRoute } from './navigation'
import { recipePage, recipeRoutes } from './pages/recipe'
import { homePage } from './pages/homePage'
import { aboutPage } from './pages/aboutPage'
import { bookPage } from './pages/bookPage'


// renderApp is the main function. Any page navigation should call this to
// refresh all content according to the url.
const renderApp = () => {
  let app = document.querySelector('#app')

  const route = currentRoute()[0]
  const recipe = recipeRoutes[route]
  if (recipe) {
    document.title = `${recipe.title} - Tailfire Recipes`
    app.replaceChildren(recipePage(recipe))
  } else if(route == 'about') {
    app.replaceChildren(aboutPage())
  } else if (route == 'book') {
    app.replaceChildren(bookPage(currentRoute()[1]))
  } else {
    document.title = `Tailfire Recipes`
    app.replaceChildren(homePage())
  }
}

navigationSetup(renderApp)
