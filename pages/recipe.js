import { backButton, createElement, title } from './helpers'

import { bananaCake } from './recipes/bananaCake'
import { breadLoaf } from './recipes/breadLoaf'
import { breadRolls } from './recipes/breadRolls'
import { burgerBuns } from './recipes/burgerBuns'
import { chocMugCake } from './recipes/chocMugCake'
import { englishMuffins } from './recipes/englishMuffins'
import { fettuccineAlfredo } from './recipes/fettuccineAlfredo'
import { naanBread } from './recipes/naanBread'
import { lasagna } from './recipes/lasagna'
import { pizza } from './recipes/pizza'
import { selfSaucingPudding } from './recipes/selfSaucingPudding'
import { tortillas } from './recipes/tortillas'

export const recipeRoutes = {
  "banana-cake": parseRecipe(bananaCake),
  "bread-loaf": parseRecipe(breadLoaf),
  "bread-rolls": parseRecipe(breadRolls),
  "burger-buns": parseRecipe(burgerBuns),
  "chocolate-self-saucing-mug-cake": parseRecipe(chocMugCake),
  "chocolate-self-saucing-pudding": parseRecipe(selfSaucingPudding),
  "english-muffins": parseRecipe(englishMuffins),
  "fettuccine-alfredo": parseRecipe(fettuccineAlfredo),
  "lasagna": parseRecipe(lasagna),
  "naan-bread": parseRecipe(naanBread),
  "pizza": parseRecipe(pizza),
  "tortillas": parseRecipe(tortillas),
}


export function recipePage(recipe) {
  let component = createElement("div.recipe")
  component.append(title(recipe.title))
  component.append(metaData(recipe.meta))
  component.append(stepsGrid(recipe.steps))
  component.append(tipsComponent(recipe.tips))

  return component
}

function stepsGrid(steps) {
  let stepGrid = createElement(`div.recipe-steps`)
  stepGrid.append(...steps.map(step => createStep(step)))
  return stepGrid
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

function metaData(meta) {
  let component = createElement('div.meta')
  component.append(serves(meta[1]))
  component.append(time(meta[2]))
  return component
}

function serves(serves) {
  return createElement('div.serves', serves)
}

function time(time) {
  return createElement('div.time', time)
}

// A recipe object has:
// - title
// - serves
// - steps (array of ingredients and array of actions)
// - tips
function parseRecipe(input) {
  if (typeof input !== 'string') { return input }

  let recipe = {}
  let [grid, tips] = input.split("\ntips\n")
  recipe.tips = tips.split("\n").filter(x => x.length > 0)
  grid = grid.split("\n\n")
  recipe.meta = grid.shift().trim().split("\n")
  recipe.title = recipe.meta[0]
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
