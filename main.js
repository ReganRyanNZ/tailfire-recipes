import './style.css'
import { titleCase } from './helpers'
import { Recipe } from './recipe'

import { bananaCake } from './recipes/bananaCake'
import { bread } from './recipes/bread'
import { englishMuffins } from './recipes/englishMuffins'
import { pizza } from './recipes/pizza'

const recipeRoutes = {
  "banana-cake": bananaCake,
  "bread": bread,
  "english-muffins": englishMuffins,
  "pizza": pizza,
}
window.recipeRoutes = recipeRoutes
const route = window.location.pathname.split('/').filter(str => str.length > 0)
const recipe = recipeRoutes[route[0]]

let app = document.querySelector('#app')
app.innerHTML = ``
if (recipe) {
  app.append(Recipe(recipe))
} else {
  app.innerHTML = `Hey, welcome to the site. Look around. We have ${Object.keys(recipeRoutes).length} recipes.`

  let recipeLink = (route) => {
    let link = document.createElement('a')
    link.classList.add('recipe-link')
    link.innerText = titleCase(route)
    link.href = `/${route}`
    return link
  }


  let recipeList = document.createElement('div')
  for(let recipeSlug of Object.keys(recipeRoutes)) {
    recipeList.append(recipeLink(recipeSlug))
  }
  app.append(recipeList)
}



// Add some route-handling thing to intercept all links and handle them without
// online navigation.