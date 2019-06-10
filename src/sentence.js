const Noun = require('./noun');

const DEFAULT_LENGTH = 5;

class Sentence {
  constructor() {
    this.words = [];
    for (var i = 0; i < DEFAULT_LENGTH; i++) {
      this.words.push(new Noun());
    }
  }
}

module.exports = Sentence;
