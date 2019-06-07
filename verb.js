const Tense = {
	INFINITIVE: 0,
	PRESENT: 1,
};
const Person = {
	FIRST_SINGULAR: 0,
};

class Verb {
	static get Tense() {
		return Tense;
	}
	static get Person() {
		return Person;
	}
	constructor(infinitive) {
		if (infinitive == undefined) {
			throw new Error("Infinitive was not provided in the Verb constructor");
		}
		this.infinitive = infinitive;
		this.known = false;
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
