var assert = require('assert');

const Word = require('../src/word');
const Noun = require('../src/noun');

describe('Noun', () => {
  it('extends Word', () => {
    let noun = new Noun('dog');
    assert(noun instanceof Word);
  });
  it('has access to a list of known nouns', () => {
    assert(Object.keys(Noun.known).length > 0);
  });
  it('can return a random known Noun', () => {
    let noun = Noun.random();
    assert(Object.keys(Noun.known).includes(noun.toString()), `${noun.toString()} not in ${Object.keys(Noun.known)}`);
  });
});
