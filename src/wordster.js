const Sentence = require('./sentence');
const Paragraph = require('./paragraph');

module.exports = {
  generateSentence: function() {
    return new Sentence().toString();
  },
  generateParagraph: function() {
    return new Paragraph().toString();
  },
};
