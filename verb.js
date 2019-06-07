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
	constructor(infinitive, past_indicative, past_participle) {
		if (infinitive == undefined || past_indicative == undefined || past_participle == undefined) {
			throw new Error("One or more arguments to the Verb constructor are undefined.");
		}
		this.infinitive = infinitive;
		this.past_indicative = past_indicative;
		this.past_participle = past_participle;
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
