import { createElement } from "./helpers";
import * as chapters from "./bookChapters/wandering_inn";
import * as snapshotChapters from "./bookChapters/snapshot";

export function bookPage(n) {
  let page = createElement('div.book-page')
  let key = 'ch' + n
  page.append(createElement('p', chapters[key] || snapshotChapters[key]))

  // create nav button to next page
  let nextButton = createElement('a', "Next chapter")
  nextButton.href = `/book/${Number(n)+1}`
  page.append(nextButton)

  return page
}
