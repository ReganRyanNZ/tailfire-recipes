# Tailfire Recipes

Recipe website without the bloated/slow/ad-infested/story-infested content that most recipe sites contain. The goal is not to drive traffic or make money, just to keep recipes in a handy format ready to use.

This is also a sandbox for me to make JS websites without a framework—just plain ol' vanilla JS.

# Dev Sandbox

Using a very bare-bones vite.js structure, I'm making my own framework of sorts:

## "Render everything" as a primary function
I have my HTML layout with an `<div id="app">` tag. The core idea of the Tailfire Framework™ is a single "render everything" function called `renderApp()` that replaces the contents of this tag. All visible HTML should be within this tag, so it can be wiped/replaced by the function.

## Offline navigation
For all GET requests, navigation is short-circuited and redirected to the `renderApp()` method. This means that after a single initial page-load, all links and browser navigation are offline (much faster than pinging the server for everything).

## App-first design
I proudly present Tailfire Recipes as a downloadable app. This isn't just a "add a bookmark to your home screen", but a fully installable app that doesn't require an internet connection to use. All features and content are added with this mindset, that the site is primarily an app.

# Todo

- Review recipes and their ingredient ratios
- Take pics for presenting on the page, as well as thumbnails for navigation in the homescreen
- Multiply servings tool
- Nav tiles need padding for long titles