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
    const phraseSection = document.getElementById('phrase');
    const ul = phraseSection.children[0];

    for (let i = 0; i < this.phrase.length; i++) {
      const li = document.createElement('li');
      const letter = this.phrase[i];
      li.textContent = letter;

      if (letter === ' ') {
        li.setAttribute('class', 'space');
      } else {
        li.setAttribute('class', 'hide letter ' + letter);
      }

      ul.appendChild(li);
    }
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
