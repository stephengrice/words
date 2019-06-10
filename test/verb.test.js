const assert = require('assert');
const fs = require('fs');

const Verb = require('../src/verb');
const Word = require('../src/word');
const data_verbs = JSON.parse(fs.readFileSync('data/verbs.json'));

describe('Verb', () => {
	it('has Tense enum', () => {
		assert.equal(Verb.Tense.INFINITIVE, 0);
	});
	it('has Person enum', () => {
		assert.equal(Verb.Person.FIRST_SINGULAR, 0);
	});
	it('throws an error when instantiated with no arguments', () => {
		assert.throws(() => {
			new Verb();
		}, Error);
	});
	it('successfully instantiates with 1 argument', () => {
		new Verb("abide");
	});
	it('returns the infinitive when asked', () => {
		let verb = new Verb('infinitive');
		assert.equal('infinitive', verb.conjugate(Verb.Tense.INFINITIVE));
	});
	it('conjugates first person present', () => {
		let tests = [
			['eat', 'ate', 'eaten'],
			['jump', 'jumped', 'jumped'],
			['consume', 'consumed', 'consumed']
		];
		tests.forEach((test, index) => {
			let verb = new Verb(test[0], test[1], test[2]);
			assert.equal(verb.infinitive, verb.conjugate(Verb.Tense.PRESENT, Verb.Person.FIRST_SINGULAR));
		});
	});
	it('is not known when word is not in data files', () => {
		let verb = new Verb('this-is-not-a-word');
		assert.strictEqual(verb.known, false);
	});
	it('is known when word is in data files', () => {
		let verb = new Verb('eat');
		assert.strictEqual(verb.known, true);
	});
	it('extends Word', () => {
		let verb = new Verb('eat');
		assert(verb instanceof Word);
	});
});
