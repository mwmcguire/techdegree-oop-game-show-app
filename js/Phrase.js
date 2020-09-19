/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Adds letter placeholders to the display when game starts.
   */
  addPhraseToDisplay() {
    // WORKS
    for (let i = 0; i < this.phrase.length; i++) {
      console.log(this.phrase[i]);
    }

    // DOES NOT WORK
    this.phrase.forEach((letter) => console.log(letter));
  }

  /**
   * Checks to see if selected letter matches a letter in the phrase.
   */
  checkLetter() {}

  /**
   * Reveal letter(s) that matches the player's selection.
   */
  showMatchedLetter() {}
}
