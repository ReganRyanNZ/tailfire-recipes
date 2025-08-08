import { createElement } from "./helpers";
import chapter1 from "./bookChapters/1";
import chapter101 from "./bookChapters/101";
import chapter102 from "./bookChapters/102";

const chapters = {
  1: chapter1,
  101: chapter101,
  102: chapter102
}

export function bookPage(n) {
  n = Number(n)
  let page = createElement('div.book-page')
  page.append(createElement('p', chapters[n]))

  // create nav button to next page
  let nextButton = createElement('a', "Next chapter")
  nextButton.href = `/book/${n+1}`
  page.append(nextButton)

  return page
}
