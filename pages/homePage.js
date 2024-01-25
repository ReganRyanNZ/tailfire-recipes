import { recipeRoutes } from "./recipe"
import { createElement, title } from "./helpers"

export function homePage() {
  let component = createElement('div.homepage')

  let introText = `Hey, welcome to the cookbook. Look around. We have ${Object.keys(recipeRoutes).length} recipes.`

  component.append(title('Tailfire Recipes'))
  component.append(introText)
  component.append(recipeList())
  component.append(aboutLink())
  return component
}


function recipeList() {
  let recipeList = createElement('div.recipe-list')
  for(let recipeSlug of Object.keys(recipeRoutes)) {
    recipeList.append(recipeLink(recipeSlug))
  }
  return recipeList
}

function recipeLink(slug) {
  let span = createElement('span', recipeRoutes[slug].title)
  let link = createElement('a.recipe-link', span)
  link.href = `/${slug}`

  return link
}

function aboutLink() {
  let link = createElement('a.about-link', 'About')
  link.href = '/about'

  return link
}