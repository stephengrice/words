const assert = require('assert');
const Sentence = require('../src/sentence');
const Paragraph = require('../src/paragraph');
const wordster = require('../src/wordster');

describe('Wordster', () => {
  it('can generate a sentence', () => {
    let sentence = wordster.generateSentence();
    assert(sentence instanceof Sentence);
    let str = sentence.toString();
    assert(str.length > 0);
  });
  it('can generate a paragraph', () => {
    let paragraph = wordster.generateParagraph();
    assert(paragraph instanceof Paragraph);
    let str = paragraph.toString();
    assert(str.length > 0);
  });
});
