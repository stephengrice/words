# wordster

This is a text generation program. It's an experiment to see what happens if you
program the grammar rules of English. How close can it get to a real meaning?

I think the idea should be: Provide as much or as little information as you want to the generator; the rest will be filled out randomly based on words that it knows.

## Running

1. Clone repository.

2. In root of this repo, run `node` to get an interactive Node.js console.

3. Try this out.

```javascript
> const wordster = require('./src/wordster');
undefined
> wordster.generateParagraph();
'The school eat the person the cat. The dog eat the dog the computer. The person eat the dog the school. The cat eat the mouse the car. The horse eat the dog the dog.'
> wordster.generateSentence();
'The mouse eat the cat the dog.'
```

### Tests

To run tests:

```bash
npm run test
```
