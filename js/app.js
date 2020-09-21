/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

let game;

// Event listener to start the game
const startBtn = document.getElementById('btn__reset');
startBtn.addEventListener('click', () => {
  game = new Game();
  game.startGame();

  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

  const hiddenLetters = document.getElementsByClassName('hide');
  console.log('hidden: ' + hiddenLetters[0].textContent);
});
