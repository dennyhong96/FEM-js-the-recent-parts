// The Power of a Smile
// by Tupac Shakur
var poem = `
The power of a gun can kill
and the power of fire can burn
the power of wind can chill
and the power of a mind can learn
the power of anger can rage
inside until it tears u apart
but the power of a smile
especially yours can heal a frozen heart`;

for (let power of powers(poem)) {
	console.log(power);
}

function* powers(poem) {
	const re = /(?<=power of )(?<thing>(a )?\w+).*?(?<=can )(?<verb>\w+)/gs;

	let match;
	while (true) {
		match = re.exec(poem);

		if (!match) return;

		const {
			groups: { thing, verb },
		} = match;
		yield `${thing}: ${verb}`;
	}
}

// a gun: kill
// fire: burn
// wind: chill
// a mind: learn
// anger: rage
// smile: heal

// Hints:
//
// function *powers(poem) { .. }
//
// re = / .. /gs
//
// while (match = re.exec(poem)) { .. }
//
