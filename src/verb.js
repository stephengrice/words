const fs = require('fs');
const Word = require('./word')
const verb_data = JSON.parse(fs.readFileSync('data/verbs.json'));

const Tense = {
	INFINITIVE: 0,
	PRESENT: 1,
};
const Person = {
	FIRST_SINGULAR: 0,
};

class Verb extends Word {
	static get Tense() {
		return Tense;
	}
	static get Person() {
		return Person;
	}
	constructor(infinitive) {
		super();
		if (infinitive == undefined) {
			throw new Error("Infinitive was not provided in the Verb constructor");
		}
		this.infinitive = infinitive;
		if (this.infinitive in verb_data) {
			this.known = true;
		}
		else {
			this.known = false;
		}
	}
	conjugate(tense) {
		if (tense == Tense.INFINITIVE) {
			return this.infinitive;
		} else if (tense == Tense.PRESENT) {
			return this.infinitive;
		}
	}
}

module.exports = Verb;
