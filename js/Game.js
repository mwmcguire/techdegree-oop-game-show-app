/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missedGuesses = 0;
    this.phrases = [];
    this.activePhrase = null;
  }

  /**
   * Starts the game.
   */
  startGame() {}

  /**
   * Randomly retrieves one of the phrases stored in the phrases array.
   * @return  {string}  Random phrase
   */
  getRandomPhrase() {}

  /**
   * Controls game logic.
   */
  handleInteraction() {}

  /**
   * Remove a life from the scoreboard.
   */
  removeLife() {}

  /**
   * Check if player has revealed all letters in active phrase.
   */
  checkForWin() {}

  /**
   *
   */
  gameOver() {}
}
