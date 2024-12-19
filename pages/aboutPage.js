import { createElement, title } from "./helpers";

export function aboutPage() {
  let page = createElement('div.about-page')
  page.append(title('Tailfire Recipes'))

  let text = [
    createElement('p', `Hi 👋`),
    createElement('p', `My name is Regan and I'm the creator of Tailfire Recipes.`),
    createElement('p', `I'm a software engineer by trade, but I also find cooking to be a delicious and rewarding creative outlet. Tailfire Recipes is a place where I can store my own recipes. I use these myself every day, and I only add recipes that are genuinely fantastic.`),
    createElement('p', `I created this site to solve a personal problem—my own experience with recipe sites. I would drown in all the ads, the stories, the pages of fluff. So here is my solution: A simple, clean presentation of good recipes. No long page loads, no more internet problems (we're offline!), no disturbing pop-ups or flashing signs. You won't hear long stories about my childhood.`),
    createElement('p', `One thing you might notice is that there are no cups, teaspoons, tablespoons, or any such units in the recipes—only grams. This was done for a few reasons: Less dishes to wash, less equipment to need, and dry ingredients become much more accurate (e.g. flour can be nearly double the weight compacted vs sifted). The only thing this _does_ require is a higher precision (0.1g) kitchen scales. You can get away with 1g precision, but smaller measurements like 2g of salt can be hard to measure accurately. Ideally look for a max weight of 3kg or 5kg too, as some high-precision scales are limited to 500g max.`),
    createElement('p', `Here's a secret in the recipe industry. It turns out, all the fancy professional recipe makers are just people. They are making stuff up, and writing down what works out. You're a person too. Feel free to change recipes, or invent your own. Some might fail, but some might be a big hit. That's the beauty of it.`),
    createElement('p', `See you around,`),
    createElement('p', `Regan`),
  ]
  page.append(...text)

  return page
}
