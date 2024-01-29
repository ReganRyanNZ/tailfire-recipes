import { backArrow, createElement, title } from './helpers'

import { bananaCake } from './recipes/bananaCake'
import { breadLoaf } from './recipes/breadLoaf'
import { burgerBuns } from './recipes/burgerBuns'
import { chocMugCake } from './recipes/chocMugCake'
import { englishMuffins } from './recipes/englishMuffins'
import { lasagna } from './recipes/lasagna'
import { pizza } from './recipes/pizza'
import { breadRolls } from './recipes/breadRolls'
import { fettuccineAlfredo } from './recipes/fettuccineAlfredo'

export const recipeRoutes = {
  "banana-cake": parseRecipe(bananaCake),
  "bread-loaf": parseRecipe(breadLoaf),
  "bread-rolls": parseRecipe(breadRolls),
  "burger-buns": parseRecipe(burgerBuns),
  "chocolate-self-saucing-mug-cake": parseRecipe(chocMugCake),
  "english-muffins": parseRecipe(englishMuffins),
  "fettuccine-alfredo": parseRecipe(fettuccineAlfredo),
  "lasagna": parseRecipe(lasagna),
  "pizza": parseRecipe(pizza),
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

// A recipe object has:
// - title
// - steps (array of ingredients and array of actions)
// - tips
function parseRecipe(input) {
  if (typeof input !== 'string') { return input }

  let recipe = {}
  let [grid, tips] = input.split("\ntips\n")
  recipe.tips = tips.split("\n").filter(x => x.length > 0)
  grid = grid.split("\n\n")
  recipe.title = grid.shift().trim()
  recipe.steps = []
  for(let rawStep of grid) {
    let step = {ingredients: [], actions: []}
    for(let line of rawStep.split('\n')) {
      if (line[0] == '-') { step.ingredients.push(line.substring(2)) }
      else { step.actions.push(line) }
    }
    recipe.steps.push(step)
  }
  return recipe
}
