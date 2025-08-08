import { createElement } from "./helpers";
import chapter0 from "./bookChapters/0";

const chapters = [chapter0]

export function bookPage(n) {
  n = Number(n)
  let page = createElement('div.book-page')
  page.append(createElement('p', chapters[n-1]))

  // create nav button to next page
  let nextButton = createElement('a', "Next chapter")
  nextButton.href = `/book/${n+1}`
  page.append(nextButton)

  return page
}
