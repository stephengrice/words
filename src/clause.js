const Noun = require('./noun');

class Clause {
  constructor() {
    this.subject = Noun.random();
    this.words = [];
    this.direct_object = null;
    this.indirect_object = null;
  }
}

module.exports = Clause;
