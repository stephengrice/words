const assert = require('assert');
const Sentence = require('../src/sentence');

describe('Sentence', () => {
  var sentence, str;
  before(() => {
    sentence = new Sentence();
    str = sentence.toString();
    console.log('  Generated test sentence: \n  ' + str);
  });
  it('has words', () => {
    assert(sentence.words.length > 0);
  });
  it('includes each of its words in toString', () => {
    for (var i = 0; i < sentence.words.length; i++) {
      assert(str.toLowerCase().includes(sentence.words[i].toString().toLowerCase()));
    }
  });
  it('ends with punctuation', () => {
    let lastChar = str[str.length - 1];
    assert(lastChar == '.' || lastChar == '!' || lastChar == '?');
  });
  it('has spaces between words', () => {
    for (var i = 0; i < sentence.words.length - 1; i++) { // Skip the last word since it's at the very end
        let word = sentence.words[i].toString();
        let idx = str.toLowerCase().indexOf(word.toLowerCase());
        let spaceChar = str.charAt(idx + word.length);
        assert(spaceChar == ' ', `Character ${spaceChar} in sentence ${str} at index ${idx + word.length} (word is ${word}, index ${idx}) should be a space but is not.`);
    }
  });
  it('begins with a capital letter', () => {
    assert(str[0] == str[0].toUpperCase());
  });
  it('does not repeat words', () => {
    for (var i = 0; i < sentence.words.length - 1; i++) {
      let thisword = sentence.words[i];
      let nextword = sentence.words[i+1];
      assert.notEqual(thisword.toString(), nextword.toString());
    }
  });
  it('has one or more clause', () => {
    assert(sentence.clauses.length > 0, `Sentence "${str}" has no clauses.`);
  });
  it('includes words from each clause, in order, in words', () => {
    let wordIdx = 0;
    for (var i = 0; i < sentence.clauses.length; i++) {
      let clause = sentence.clauses[i];
      for (var j = 0; j < clause.words.length; i++) {
        let sentence_word = sentence.words[wordIdx];
        let clause_word = clause.words[j];
        assert(word == clause, `Sentence words and clauses do not match up: word number ${wordIdx}=${sentence_word.toString()}, clause ${i} word ${j}=${clause_word.toString()}`);
      }
    }
  });
});
