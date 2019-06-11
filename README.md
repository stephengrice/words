# wordster

This is a text generation program. It's an experiment to see what happens if you
program the grammar rules of English. How close can it get to a real meaning?

I think the idea should be: Provide as much or as little information as you want to the generator; the rest will be filled out randomly based on words that it knows.

## Running

1. Clone repository.

2. In root of this repo, run `node` to get an interactive Node.js console.

3. Try this out.

```javascript
const wordster = require('wordster');
wordster.generateParagraph();
wordster.generateSentence();
```
