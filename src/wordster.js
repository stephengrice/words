const Sentence = require('./sentence');
const Paragraph = require('./paragraph');

module.exports = {
  generateSentence: function() {
    return new Sentence();
  },
  generateParagraph: function() {
    return new Paragraph();
  },
};
