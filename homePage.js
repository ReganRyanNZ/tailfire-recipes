import { recipeRoutes } from "./recipe"
import { flameLeafSVG } from "./public/flame-leaf"

export function homePage() {
  let component = document.createElement('div')
  let introText = `Hey, welcome to the site. Look around. We have ${Object.keys(recipeRoutes).length} recipes.`

  component.append(title())
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
  link.innerText = recipeRoutes[slug].title
  link.href = `/${slug}`
  return link
}

function title() {
  let title = document.createElement('h1')
  title.innerText = 'Tailfire Recipes'
  let badge = document.createElement('svg')
  title.append(badge)
  badge.outerHTML = flameLeafSVG
  return title
}