import { bananaCake } from './recipes/bananaCake'
import { breadLoaf } from './recipes/breadLoaf'
import { englishMuffins } from './recipes/englishMuffins'
import { lasagne } from './recipes/lasagne'
import { pizza } from './recipes/pizza'
import { breadRolls } from './recipes/breadRolls'

export const recipeRoutes = {
  "banana-cake": bananaCake,
  "bread-loaf": breadLoaf,
  "bread-rolls": breadRolls,
  "english-muffins": englishMuffins,
  "lasagne": lasagne,
  "pizza": pizza,
}

export function Recipe(recipe) {
  let component = document.createElement("div")
  component.classList.add("recipe")

  let title = document.createElement('h1')
  let titleLink = document.createElement('a')
  titleLink.href = '/'
  titleLink.innerText = recipe.title
  title.append(titleLink)
  component.append(title)

  let steps = recipe.steps.map(step => createStep(step))

  let stepGrid = document.createElement(`div`)
  stepGrid.classList.add('recipe-steps')
  stepGrid.append(...steps)
  component.append(stepGrid)

  component.append(tipsComponent(recipe.tips))

  return component
}

function createStep(stepData) {
  let step = document.createElement('div')
  step.classList.add('recipe-step')

  let ingredients = document.createElement('ul')
  ingredients.classList.add('ingredients')
  ingredients.append(...listify(stepData.ingredients))

  let actions = document.createElement('ul')
  actions.classList.add('actions')
  actions.append(...listify(stepData.actions))

  step.append(ingredients, actions)
  return step
}

function listify(array) {
  return array.map(text => {
    let li = document.createElement('li')
    li.innerHTML = markDown(text)
    return li
  })
}

function markDown(text) {
  return text.replaceAll(/\*([^*]+)\*/g, "<b>$1</b>") // insert bold tags
}

function tipsComponent(tips) {
  let component = document.createElement('ul')
  component.classList.add('tips')
  let h2 = document.createElement('h2')
  h2.innerText = "Tips & Tricks"
  component.append(h2)
  for(let tip of tips) {
    let li = document.createElement('li')
    li.innerText = tip
    component.append(li)
  }
  return component
}