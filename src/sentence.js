const Noun = require('./noun');
const Clause = require('./clause');

const DEFAULT_LENGTH = 5;

class Sentence {
  constructor() {
    this.words = [];
    this.clauses = [new Clause()];
    for (var i = 0; i < DEFAULT_LENGTH; i++) {
      // Avoid repeating words - if last matches, regenerate
      var word, prevWord;
      do {
        word = Noun.random();
        prevWord = this.words[i-1];
      } while (i > 0 && word.toString() == prevWord.toString());
      this.words.push(word);
    }
  }
  toString() {
    let str = '';
    for (var i = 0; i < this.words.length; i++) {
      str += this.words[i];
      if (i < this.words.length - 1) {
        str += ' '; // space between words
      }
    }
    str += '.';
    // Capitalize first letter
    str = str[0].toUpperCase() + str.substring(1);
    return str;
  }
}

module.exports = Sentence;
