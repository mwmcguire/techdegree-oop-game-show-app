/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

// Event listener to start the game
const startBtn = document.getElementById('btn__reset');
startBtn.addEventListener('click', () => {
  game = new Game();
  game.startGame();
});
