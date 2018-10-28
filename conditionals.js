"use strict"

let year = prompt('What is your age?');
const MY_AGE = 27;

// using if-else
if (year < MY_AGE){
	alert('You are younger than me');
} else if (year > MY_AGE) {
	alert('You are older than me');
} else {
	alert('We are the same age');
}

// using the ternary operator
let message = (year < MY_AGE) ? 'You are younger than me' :
				(year == MY_AGE) ? 'You are the same age as me':
								   'You are older than me';
alert(message)