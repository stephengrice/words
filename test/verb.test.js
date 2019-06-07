var assert = require('assert');

const Verb = require('../verb');

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
});
