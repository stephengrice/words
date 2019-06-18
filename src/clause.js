const Noun = require('./noun');
const Verb = require('./verb');

class Clause {
  constructor() {
    this.subject = Noun.random();
    this.verb = new Verb('eat');
    this.direct_object = Noun.random();
    this.indirect_object = Noun.random();
  }
  get words() {
    return [this.subject, this.verb, this.direct_object, this.indirect_object];
  }
  toString() {
    return this.words.join(' ');
  }
}

module.exports = Clause;
