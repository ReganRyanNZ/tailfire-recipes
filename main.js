import './assets/style.css'
import './assets/styleSmall.css'
import { navigationSetup, currentRoute } from './navigation'
import { Recipe, recipeRoutes } from './pages/recipe'
import { homePage } from './pages/homePage'
import { aboutPage } from './pages/aboutPage'

const renderApp = () => {
  let app = document.querySelector('#app')

  const route = currentRoute()[0]
  const recipe = recipeRoutes[route]
  if (recipe) {
    document.title = `${recipe.title} - Tailfire Recipes`
    app.replaceChildren(Recipe(recipe))
  } else if(route == 'about') {
    app.replaceChildren(aboutPage())
  } else {
    document.title = `Tailfire Recipes`
    app.replaceChildren(homePage())
  }
}

navigationSetup(renderApp)
