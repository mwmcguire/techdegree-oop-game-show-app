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
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    for (let i = 0; i < this.phrase.length; i++) {
      if (letter === this.phrase[i]) {
        return true;
      }
    }
    return false;
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    const hiddenLetters = document.getElementsByClassName('hide');

    for (let i = 0; i < hiddenLetters.length; i++) {
      if (hiddenLetters[i].className === 'hide letter ' + letter) {
        hiddenLetters[i].setAttribute('class', 'show letter ' + letter);
      }
    }
  }
}
