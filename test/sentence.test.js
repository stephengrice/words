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
  it('has spaces between words', () => {
    let sentence = new Sentence();
    let str = sentence.toString();
    for (var i = 0; i < sentence.words.length - 1; i++) { // Skip the last word since it's at the very end
        let word = sentence.words[i].toString();
        let idx = str.indexOf(word);
        let spaceChar = str.charAt(idx + word.length);
        assert(spaceChar == ' ', `Character ${spaceChar} in sentence ${str} should be a space but is not.`);
    }
  });
});
