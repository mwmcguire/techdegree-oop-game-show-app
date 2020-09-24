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

// Event listener for onscreen keys
const keys = [...document.getElementsByClassName('key')];
keys.forEach((key) =>
  key.addEventListener('click', (e) => {
    game.handleInteraction(e.target);
  })
);

// Event listener for keyboard presses
document.addEventListener('keyup', (e) => {
  const target = keys.filter((key) => key.textContent === e.key)[0];
  const overlay = document.getElementById('overlay');

  /**
   * Register key presses if:
   * - overlay is not shown
   * - target key press matches on screen key letter
   * - target key press is not disabled
   */
  if (
    overlay.style.display === 'none' &&
    target !== undefined &&
    !target.disabled
  ) {
    game.handleInteraction(target);
    // Register enter key to start a new game when overlay is displayed
  } else if (overlay.style.display === '') {
    if (e.key === 'Enter') {
      game = new Game();
      game.startGame();
    }
  }
});
