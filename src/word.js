class Word {
  constructor(base_form) {
    if (this.constructor === Word) {
      throw new TypeError('Abstract class "Widget" cannot be instantiated directly.');
    }
    this.base = base_form;
  }
}

module.exports = Word;
