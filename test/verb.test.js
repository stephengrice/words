const assert = require('assert');
const fs = require('fs');

const Verb = require('../verb');
const data_verbs = JSON.parse(fs.readFileSync('data/verbs.json'));

describe('Verb', () => {
	it('has Tense enum', () => {
		assert.equal(Verb.Tense.INFINITIVE, 0);
	});
	it('throws an error when instantiated with no arguments', () => {
		assert.throws(() => {
			new Verb();
		}, Error);
	});
	it('successfully instantiates with 3 arguments', () => {
		new Verb("abide", "abided", "abided");
	});
	it('returns the infinitive when asked', () => {
		let verb = new Verb('infinitive', 'past_indicative', 'past_participle');
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
});
