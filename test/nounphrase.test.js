var assert = require('assert');

const Noun = require('../src/noun');
const NounPhrase = require('../src/nounphrase');

describe('NounPhrase', () => {
  it('has an article', () => {
    let nounphrase = new NounPhrase(Noun.random());
    assert(nounphrase.article != undefined);
  });
});
