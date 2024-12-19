import { backButtonSVG } from "../assets/back-arrow.js"
import { flameLeafSVG } from "../assets/flame-leaf.js"
import { homeRoute } from "../navigation.js"

/**
* Cleaner syntax for "document.createElement". Add id, classes, and content in
* one go.
*
* @param {String} inputTags Element name, id, and classes like "div#home-button.btn"
* @param {*} content Inner HTML, could be text or an Element
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
  else if (content) { el.innerHTML = formatText(content) }

  return el
}

/**
* Create an h1 with the site's badge next to it
* @text {String} title
* @returns {Element} title as h1 with badge and link to homepage
*/
export function title(text) {
  let title = document.createElement('h1')
  let titleLink = document.createElement('a')
  titleLink.href = '/'
  titleLink.innerText = text
  titleLink.append(createSVG(flameLeafSVG))
  if (!homeRoute()) { title.append(backButton()) }
  title.append(titleLink)
  return title
}

/**
* Create a back arrow to navigate back home
* @returns {Element}
*/
export function backButton() {
  let arrow = createSVG(backButtonSVG)
  let container = createElement('a.back-button', arrow)
  container.href = '/'

  return container
}

/**
 * Creates an <svg> element from a string
 *
 * @param {String} content SVG tag as a string, e.g. "<svg ...>...</svg>"
 * @returns {Element}
 */
export function createSVG(content) {
  let container = document.createElement('div')
  container.innerHTML = content
  return container.firstChild
}

/**
 * Adds <b> and <i> tags to text by *asterisk* and _underscore_ respectively.
 *
 * TODO ensure those characters can be used in text without triggering the formatting somehow.
 *
 * @param {String} text
 * @returns {String}
 */
export function formatText(text) {
  return text.replace(/_([^_]+?)_/g, "<i>$1</i>").replace(/\*([^\*]+?)\*/g, "<b>$1</b>")
}
