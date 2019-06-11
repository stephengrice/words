const assert = require('assert');
const Paragraph = require('../src/paragraph');

describe('Paragraph', () => {
  var paragraph, str;
  before(() => {
    paragraph = new Paragraph();
    str = paragraph.toString();
    console.log('  Generated test paragraph: \n  ' + str);
  });
  it('has sentences', () => {
    assert(paragraph.sentences.length > 0);
  });
  it('includes its sentences in toString', () => {
    for (var i = 0; i < paragraph.sentences.length; i++) {
      assert(str.toLowerCase().includes(paragraph.sentences[i].toString().toLowerCase()), `${str} does not include ${paragraph.sentences[i]}`);
    }
  });
  it('has spaces between sentences', () => {
    for (var i = 0; i < paragraph.sentences.length - 1; i++) { // Skip the last sentence since it's at the very end
        let sentence = paragraph.sentences[i].toString();
        let idx = str.indexOf(sentence);
        let spaceChar = str.charAt(idx + sentence.length);
        assert(spaceChar == ' ', `Character ${spaceChar} in paragraph ${str} should be a space but is not.`);
    }
  });
});
