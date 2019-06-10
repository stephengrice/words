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
  it('has spaces between sentences', () => {
    let paragraph = new Paragraph();
    let str = paragraph.toString();
    for (var i = 0; i < paragraph.sentences.length - 1; i++) { // Skip the last sentence since it's at the very end
        let sentence = paragraph.sentences[i].toString();
        let idx = str.indexOf(sentence);
        let spaceChar = str.charAt(idx + sentence.length);
        assert(spaceChar == ' ', `Character ${spaceChar} in paragraph ${str} should be a space but is not.`);
    }
  });
});
