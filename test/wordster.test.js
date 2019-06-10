const assert = require('assert');
const Sentence = require('../src/sentence');
const Paragraph = require('../src/paragraph');
const wordster = require('../src/wordster');

describe('Wordster', () => {
  it('can generate a sentence', () => {
    let str = wordster.generateSentence();
    assert(str.length > 0);
  });
  it('can generate a paragraph', () => {
    let str = wordster.generateParagraph();
    assert(str.length > 0);
  });
});
