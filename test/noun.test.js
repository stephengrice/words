var assert = require('assert');

const Word = require('../src/word');
const Noun = require('../src/noun');

describe('Noun', () => {
  it('extends Word', () => {
    let noun = new Noun('dog');
    assert(noun instanceof Word);
  });
});
