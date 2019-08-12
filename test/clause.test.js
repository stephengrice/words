const assert = require('assert');
const Word = require('../src/word');
const Noun = require('../src/noun');
const NounPhrase = require('../src/nounphrase');
const Verb = require('../src/verb');
const Clause = require('../src/clause');

describe('Clause', () => {
  var clause;
  before(() => {
    clause = new Clause();
  });
  it('has words', () => {
    assert(clause.words.length > 0);
  })
  it('has a subject', () => {
    assert(clause.subject != undefined);
    assert(clause.subject instanceof NounPhrase);
  });
  it('has a verb', () => {
    assert(clause.verb != undefined);
    assert(clause.verb instanceof Verb);
  });
  it('includes direct object in toString, if one is assigned', () => {
    let n = Noun.random();
    clause.direct_object = new NounPhrase(n);
    assert(clause.toString().toLowerCase().includes(n.toString().toLowerCase()), `Word "${n.toString()}" not found in Clause "${clause.toString()}"`)
  });
  it('includes indirect object in toString, if one is assigned', () => {
    let n = Noun.random();
    clause.indirect_object = new NounPhrase(n);
    assert(clause.toString().toLowerCase().includes(n.toString().toLowerCase()))
  });
  it('has a noun phrase as its subject, direct object, and indirect object', () => {
    assert(clause.subject instanceof NounPhrase);
    assert(clause.direct_object instanceof NounPhrase);
    assert(clause.indirect_object instanceof NounPhrase);
  });
});
