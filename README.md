Card Reader App
===============
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Images
Fictionalized Example Assets:

![Trull](./assets/images/readme-images/Trull.jpg)

## Description 
The user has three options.
  1.  Past, Present, Future: The app randomly draws 3 cards and displays them for the user.  The first card is assigned to the past, the second to the present, and the third to the future.  The app then displays a guide on how the user can interpret the cards.

  2.  Single Card:  A card is randomly drawn from the deck and displayed along with a guide to interpretation.

  3.  Explore the Deck: The user can explore the different cards to learn more about them.

## Installation 
If all files are kept in a single folder a web browser should be able to run the project.

## Usage 
  1. Add image assets for each card to `/public/images/card-deck`
  2. Update card meanings in `/src/JSON/deck.json`
  3. Update `package.json` with the proper `"homepage": "http://dzoladz.github.io/card-reader-app",` deploy value
  
#### Commands
- Local Package Installation `npm install`
- Local Development Server `npm start`
- Build production deploy on `gh-pages` branch, `npm run deploy`
 
## Credits 
- [Fisher-Yates shuffle function](https://frankmitchell.org/2015/01/fisher-yates/)
- [Fog background](https://codepen.io/camstephensdomo/pen/PVqpaP)
- [Bloomquist Tarot Reader](https://github.com/bryanbloomquist/tarot-reader)
