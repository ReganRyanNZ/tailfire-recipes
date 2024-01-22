import { flameLeafSVG } from "./assets/flame-leaf.js"

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
