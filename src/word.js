class Word {
  constructor(base_form) {
    if (this.constructor === Word) {
      throw new TypeError('Abstract class "Widget" cannot be instantiated directly.');
    }
    if (base_form === undefined) {
      throw new TypeError('Base form must be provided');
    }
    this.base = base_form;
  }

  toString() {
    return this.base;
  }
}

module.exports = Word;
