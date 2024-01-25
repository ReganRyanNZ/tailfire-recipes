import { flameLeafSVG } from "../assets/flame-leaf.js"

export function title(text) {
  let title = document.createElement('h1')
  let titleLink = document.createElement('a')
  titleLink.href = '/'
  titleLink.innerText = text
  title.append(titleLink)
  let badge = document.createElement('svg')
  titleLink.append(badge)
  badge.outerHTML = flameLeafSVG
  return title
}


// Takes a string like "div#home-button.btn" and creates the tag with the id
// and classes
export function createElement(input) {
  const args = input.match(/[#.]?[^#.]+/g)
  let el = document.createElement(args[0])
  for(let arg of args) {
    if(arg[0] == '.') {
      el.classList.add(arg.slice(1))
    } else if(arg[0] == '#') {
      el.id = arg.slice(1)
    }
  }
  return el
}