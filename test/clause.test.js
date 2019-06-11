const assert = require('assert');
const Word = require('../src/word');
const Noun = require('../src/noun');
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
    assert(clause.subject instanceof Noun);
  });
  it('has a verb', () => {
    assert(clause.verb != undefined);
    assert(clause.verb instanceof Verb);
  });
  it('includes direct object in toString, if one is assigned', () => {
    let n = Noun.random();
    clause.direct_object = n;
    assert(clause.toString().toLowercase().includes(n.toString().toLowerCase()))
  });
  it('includes indirect object in toString, if one is assigned', () => {
    let n = Noun.random();
    clause.indirect_object = n;
    assert(clause.toString().toLowercase().includes(n.toString().toLowerCase()))
  });
});
