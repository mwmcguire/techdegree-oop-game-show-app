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
    console.log(this.activePhrase);
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
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    this.missed += 1;
    const liveHeart = 'images/liveHeart.png';
    const lostHeart = 'images/lostHeart.png';

    if (this.missed === 5) {
      this.gameOver(true);
    } else {
      this.gameOver(false);
    }

    const tries = document.getElementsByClassName('tries');
    const index = tries.indexOf();
  }

  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't won
   */
  checkForWin() {
    const shownLetters = document.getElementsByClassName('show space');
    if (shownLetters.length === this.activePhrase.length) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {}
}
