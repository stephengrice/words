class NounPhrase {
  constructor(noun) {
    this.article = 'the';
    this.noun = noun;
  }
  get words() {
    return [this.article, this.noun];
  }
  toString() {
    return this.words.join(' ');
  }
}

module.exports = NounPhrase;
