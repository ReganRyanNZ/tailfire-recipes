import './style.css'
import './styleSmall.css'
import { NavigationSetup, Route } from './navigation'
import { Recipe, recipeRoutes } from './recipe'
import { homePage } from './homePage'

const renderApp = () => {
  let app = document.querySelector('#app')
  app.innerHTML = ``

  const recipe = recipeRoutes[Route()[0]]
  if (recipe) {
    document.title = `${recipe.title} - Tailfire Recipes`
    app.append(Recipe(recipe))
  } else {
    document.title = `Tailfire Recipes`
    app.replaceWith(homePage())

  }
}

renderApp()
NavigationSetup(renderApp)
