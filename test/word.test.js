const assert = require('assert');
const Word = require('../src/word');

class WordTest extends Word {
    // Only because we can't instantiate word directly
}

describe('Word', () => {
  it('cannot be instantiated directly', () => {
    assert.throws(function() {
      new Word();
    }, TypeError);
  });
  it('returns base_form for toString by default', () => {
    let word = new WordTest('my_base');
    assert.equal(word.toString(), 'my_base');
  });
  it('requires some kind of base form', () => {
    assert.throws(() => {
      let word = new WordTest();
    }, TypeError);
  });
});
