const assert = require('assert');
const Paragraph = require('../src/paragraph');

describe('Paragraph', () => {
  it('has sentences', () => {
    let paragraph = new Paragraph();
    assert(paragraph.sentences.length > 0);
  });
  it('includes its sentences in toString', () => {
    let paragraph = new Paragraph();
    let str = paragraph.toString().toLowerCase();
    for (var i = 0; i < paragraph.sentences.length; i++) {
      assert(str.includes(paragraph.sentences[i].toString().toLowerCase()), `${str} does not include ${paragraph.sentences[i]}`);
    }
  });
});
