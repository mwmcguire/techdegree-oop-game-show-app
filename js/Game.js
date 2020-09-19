/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      { phrase: 'A dime a dozen' },
      { phrase: 'Bite the bullet' },
      { phrase: 'Take a rain check' },
      { phrase: 'Spill the beans' },
      { phrase: 'Once in a blue moon' },
    ];
    this.activePhrase = null;
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';

    const randomPhrase = new Phrase(this.getRandomPhrase().phrase);
    randomPhrase.addPhraseToDisplay();

    this.activePhrase = randomPhrase;
  }

  /**
   * Selects random phrase from phrases property.
   * @return  {Object}  Phrase object chosen to be used
   */
  getRandomPhrase() {
    const num = Math.floor(Math.random() * 4) + 1;
    return this.phrases[num];
  }

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
