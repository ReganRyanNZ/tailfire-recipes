import { backArrow, createElement, title } from './helpers'

import { bananaCake } from './recipes/bananaCake'
import { breadLoaf } from './recipes/breadLoaf'
import { chocMugCake } from './recipes/chocMugCake'
import { englishMuffins } from './recipes/englishMuffins'
import { lasagna } from './recipes/lasagna'
import { pizza } from './recipes/pizza'
import { breadRolls } from './recipes/breadRolls'
import { fettuccineAlfredo } from './recipes/fettuccineAlfredo'

export const recipeRoutes = {
  "banana-cake": bananaCake,
  "bread-loaf": breadLoaf,
  "bread-rolls": breadRolls,
  "chocolate-self-saucing-mug-cake": chocMugCake,
  "english-muffins": englishMuffins,
  "fettuccine-alfredo": fettuccineAlfredo,
  "lasagna": lasagna,
  "pizza": pizza,
}

export function Recipe(recipe) {
  let component = createElement("div.recipe")
  component.append(title(recipe.title))
  component.append(backArrow())

  let stepGrid = createElement(`div.recipe-steps`)
  stepGrid.append(...recipe.steps.map(step => createStep(step)))
  component.append(stepGrid)

  component.append(tipsComponent(recipe.tips))

  return component
}

function createStep(stepData) {
  let step = createElement('div.recipe-step')

  let ingredients = createElement('ul.ingredients')
  ingredients.append(...listify(stepData.ingredients))

  let actions = createElement('ul.actions')
  actions.append(...listify(stepData.actions))

  step.append(ingredients, actions)
  return step
}

function listify(array) {
  return array.map(text => {
    return createElement('li', markDown(text))
  })
}

function markDown(text) {
  return text.replaceAll(/\*([^*]+)\*/g, "<b>$1</b>") // insert bold tags
}

function tipsComponent(tips) {
  let component = createElement('ul.tips')
  let h2 = createElement('h2', "Tips & Tricks")
  component.append(h2)
  for(let tip of tips) {
    component.append(createElement('li', tip))
  }
  return component
}