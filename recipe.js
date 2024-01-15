// Recipes receive data in a very specific format:
// - An array of "steps"
// - Each step is a 2-length array of ingredients and actions
// - Ingredients is an array of measured ingredients e.g. "200g butter"
// - Actions is an array of instructions e.g. "Soften butter and add to mix"
import { madlibs } from "./madlibs"

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

  let backstory = document.createElement('div')
  backstory.classList.add('backstory')
  backstory.innerText = madlibs(recipe.tips)
  component.append(backstory)

  console.log({recipe, steps})
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