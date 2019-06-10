const Sentence = require('./sentence');

const DEFAULT_LENGTH = 5;

class Paragraph {
  constructor() {
    this.sentences = [];
    for (var i = 0; i < DEFAULT_LENGTH; i++) {
      this.sentences.push(new Sentence());
    }
  }
  toString() {
    let str = '';
    for (var i = 0; i < this.sentences.length; i++) {
      str += this.sentences[i].toString();
      if (i < this.sentences.length - 1) {
        str += ' '; // space between sentences
      }
    }
    return str;
  }
}

module.exports = Paragraph;
