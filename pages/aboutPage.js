import { createElement, title } from "./helpers";

export function aboutPage() {
  let page = createElement('div.about-page')
  page.append(title('Tailfire Recipes'))

  let text = [
    createElement('p', `Hi! My name is Regan and I'm the creator of Tailfire Recipes.`),
    createElement('p', `I'm a software engineer by trade, but I also find cooking to be a delicious and rewarding creative outlet. Tailfire Recipes is a place where I can store my own recipes. I use these myself every day, and I only add recipes that are genuinely fantastic.`),
    createElement('p', `Recipe websites these days are so bad! I drown in all the ads, the stories, the pages of fluff. So here is my solution: A simple, clean presentation of good recipes. No long page loads, no more internet problems (we're offline!), no disturbing pop-ups or flashing signs. You won't hear long stories about my childhood.`),
    createElement('p', `Here's a secret in the recipe industry. It turns out, all the fancy professional recipe makers are just people. They are making stuff up, and writing down what works out. You're a person too. Feel free to change recipes, or invent your own. Some might fail, but some might be a big hit. That's the beauty of it.`),
  ]
  page.append(...text)

  return page
}
