
# Project Title
## clicky-game-pokemon-edition-
Memory game. don't click the same image twice in a row. 

## Project Description
Link to the site: [Words-Matter](https://syeda-friend-finder1.herokuapp.com/)
This is a Pokemon memory game using React. Images of Pokemon characters are used in the cards. User is expected to click on an image and remember not to click it again. 
  
   * The user's score incrementes when clicking an image for the first time. 
   * Also the topscore increments. 
   * The user's score resets to 0 if they click the same image more than once. Topscore stays the same.
   * Clicking on any image, shuffles all the cards in a random order.
   * Once the user's score is reset after an incorrect guess, the game restarts.

### Compatibility logic:
The application renders different images Pokemons to the screen. 
User-Interface is brken up into the following components:
* FriendCards
* Navbar
* Title
* Wrapper
Also this app manages component states, and respond to user events such as onClick.

## Getting Started
To start playing, click on any image of your choice just remember not to click that second time in a row. 

### Installing:
After downloading the app, type in npm install in the terminal. It will install the the required packages. 
   * npm install 
   * npm start

## Built With
1. react
2. node.js

## Authors
* Syeda Ahmed