const assert = require('assert');
const Sentence = require('../src/sentence');

describe('Sentence', () => {
  it('has words', () => {
    let sentence = new Sentence();
    assert(sentence.words.length > 0);
  });
  it('includes each of its words in toString', () => {
    let sentence = new Sentence();
    let str = sentence.toString().toLowerCase();
    for (var i = 0; i < sentence.words.length; i++) {
      assert(str.includes(sentence.words[i].toString().toLowerCase()));
    }
  });
  it('ends with punctuation', () => {
    let sentence = new Sentence();
    let str = sentence.toString();
    let lastChar = str[str.length - 1];
    assert(lastChar == '.' || lastChar == '!' || lastChar == '?');
  });
});
