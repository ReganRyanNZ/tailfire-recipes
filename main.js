import './style.css'
import { titleCase } from './helpers'
import { NavigationSetup, Route } from './navigation'

import { Recipe } from './recipe'

import { bananaCake } from './recipes/bananaCake'
import { bread } from './recipes/bread'
import { englishMuffins } from './recipes/englishMuffins'
import { lasagne } from './recipes/lasagne'
import { pizza } from './recipes/pizza'

const recipeRoutes = {
  "banana-cake": bananaCake,
  "bread": bread,
  "english-muffins": englishMuffins,
  "lasagne": lasagne,
  "pizza": pizza,
}

const renderApp = () => {
  const recipe = recipeRoutes[Route()[0]]

  let app = document.querySelector('#app')
  app.innerHTML = ``
  if (recipe) {
    document.title = `${recipe.title} - Tailfire Recipes`
    app.append(Recipe(recipe))
  } else {
    document.title = `Tailfire Recipes`
    app.innerHTML = `Hey, welcome to the site. Look around. We have ${Object.keys(recipeRoutes).length} recipes.`

    let recipeLink = (recipeSlug) => {
      let link = document.createElement('a')
      link.classList.add('recipe-link')
      link.innerText = titleCase(recipeSlug)
      link.href = `/${recipeSlug}`
      return link
    }


    let recipeList = document.createElement('div')
    for(let recipeSlug of Object.keys(recipeRoutes)) {
      recipeList.append(recipeLink(recipeSlug))
    }
    app.append(recipeList)
  }
}

renderApp()
NavigationSetup(renderApp)
