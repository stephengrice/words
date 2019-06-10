const Noun = require('./noun');

const DEFAULT_LENGTH = 5;

class Sentence {
  constructor() {
    this.words = [];
    for (var i = 0; i < DEFAULT_LENGTH; i++) {
      this.words.push(new Noun('dog'));
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
    return str;
  }
}

module.exports = Sentence;
