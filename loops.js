"use strict"

// Using "while" loops
let i = 0;

while(i < 3) {
	alert(i);
	i++;
}

// Using "do...while" loops
i = 0;
do {
	alert(i);
	i++;
} while (i < 3);

// for loops
for (i = 0; i < 3; i++) {
	alert(i);
}

// "inline" variable declaration
for (let j = 0; j < 3; j++) {
	alert(j);
}
// an error will occur if j is called outside the loop because variable exists only within the loop.


// Using a label to break/continue
outer: for (i = 0; i < 3; i++) {
	for (let j = 0; j < 3; j++) {
		let input = prompt(`Value at coords (${i},${j})`,'');
		if (!input) break outer; // (*)
	}
}
alert('Done!');

