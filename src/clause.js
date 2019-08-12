const Noun = require('./noun');
const NounPhrase = require('./nounphrase');
const Verb = require('./verb');

class Clause {
  constructor() {
    this.subject = new NounPhrase(Noun.random());
    this.verb = new Verb('eat');
    this.direct_object = new NounPhrase(Noun.random());
    this.indirect_object = new NounPhrase(Noun.random());
  }
  get words() {
    return [this.subject, this.verb, this.direct_object, this.indirect_object];
  }
  toString() {
    return this.words.join(' ');
  }
}

module.exports = Clause;
