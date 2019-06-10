const assert = require('assert');
const Sentence = require('../src/sentence');

describe('Sentence', () => {
  it('has words', () => {
    let sentence = new Sentence();
    assert(sentence.words.length > 0);
  });
});
