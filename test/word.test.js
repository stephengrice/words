const assert = require('assert');
const Word = require('../src/word');

describe('Word', () => {
  it('cannot be instantiated directly', () => {
    assert.throws(function() {
      new Word();
    }, TypeError);
  });
});
