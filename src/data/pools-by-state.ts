/**
 * Map of key value pairs
 * [keys] are string-type two-letter US state abbreviations
 * https://en.wikipedia.org/wiki/List_of_U.S._state_and_territory_abbreviations
 *
 * Values are the number of pools in that state
 * https://www.datamasters.org/wp-content/uploads/USA-POOL-COUNTS.pdf
 */
const poolsByState = {
	AK: 5861,
	AL: 120363,
	AR: 56745,
	AZ: 431027,
	CA: 1242498,
	CO: 50167,
	CT: 95272,
	DC: 1779,
	DE: 15067,
	FL: 1305112,
	GA: 189842,
	IA: 38785,
	ID: 22926,
	IL: 156489,
	IN: 153399,
	KS: 35074,
	KY: 99467,
	LA: 70202,
	MA: 129899,
	MD: 116142,
	ME: 27151,
	MI: 282523,
	MN: 50679,
	MO: 117338,
	MS: 47597,
	MT: 8862,
	NC: 156899,
	ND: 5322,
	NE: 19158,
	NH: 30879,
	NJ: 154994,
	NM: 14327,
	NV: 114822,
	NY: 463992,
	OH: 316514,
	OK: 99933,
	OR: 46605,
	PA: 333832,
	RI: 30073,
	SC: 92372,
	SD: 5643,
	TN: 168856,
	TX: 578327,
	UT: 20973,
	VA: 135370,
	VT: 12390,
	WA: 73926,
	WI: 109220,
	WV: 38001,
	WY: 2753,
};

export default poolsByState;
