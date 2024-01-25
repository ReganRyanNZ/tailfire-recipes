import './assets/style.css'
import './assets/styleSmall.css'
import { NavigationSetup, Route } from './navigation'
import { Recipe, recipeRoutes } from './pages/recipe'
import { homePage } from './pages/homePage'

const renderApp = () => {
  let app = document.querySelector('#app')

  const recipe = recipeRoutes[Route()[0]]
  if (recipe) {
    document.title = `${recipe.title} - Tailfire Recipes`
    app.replaceChildren(Recipe(recipe))
  } else {
    document.title = `Tailfire Recipes`
    app.replaceChildren(homePage())
  }
}

renderApp()
NavigationSetup(renderApp)
