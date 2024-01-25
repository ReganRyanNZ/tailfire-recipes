import { flameLeafSVG } from "../assets/flame-leaf.js"

/**
* Create an h1 with the site's badge next to it
* @returns {Element}
*/
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

/**
* Cleaner syntax for "document.createElement". Add id, classes, and content in
* one go.
*
* @param {String} inputTags Element name, id, and classes like "div#home-button.btn"
* @param {*} content Inner HTML, could be text or another Element
* @returns {Element}
*/
export function createElement(inputTags, content) {
  const args = inputTags.match(/[#.]?[^#.]+/g)
  let el = document.createElement(args[0])
  for(let arg of args) {
    if(arg[0] == '.') {
      el.classList.add(arg.slice(1))
    } else if(arg[0] == '#') {
      el.id = arg.slice(1)
    }
  }

  if (content && content.nodeType) { el.appendChild(content) }
  else if (content) { el.innerHTML = content }

  return el
}
