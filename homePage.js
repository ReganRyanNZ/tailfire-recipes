import { recipeRoutes } from "./recipe"
import { title } from "./helpers"

export function homePage() {
  let component = document.createElement('div')
  component.id = "app"
  let introText = `Hey, welcome to the cookbook. Look around. We have ${Object.keys(recipeRoutes).length} recipes.`

  component.append(title('Tailfire Recipes'))
  component.append(introText)
  component.append(recipeList())
  return component
}


function recipeList() {
  let recipeList = document.createElement('div')
  recipeList.classList.add('recipe-list')
  for(let recipeSlug of Object.keys(recipeRoutes)) {
    recipeList.append(recipeLink(recipeSlug))
  }
  return recipeList
}

function recipeLink(slug) {
  let link = document.createElement('a')
  link.classList.add('recipe-link')
  link.href = `/${slug}`

  let span = document.createElement('span')
  span.innerText = recipeRoutes[slug].title
  link.append(span)

  return link
}
