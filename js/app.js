/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();
const randomPhrase = game.getRandomPhrase().phrase;

const phrase = new Phrase(randomPhrase);
phrase.addPhraseToDisplay();
