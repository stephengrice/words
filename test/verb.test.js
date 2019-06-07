var assert = require('assert');

const Verb = require('../verb');

describe('Verb', () => {
	it('is a class', () => {
		let j = new Verb();
	});
	it('has Form enum', () => {
		assert.equal(Verb.Form.INFINITIVE, 0);
	});
});
