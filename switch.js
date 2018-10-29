"use strict"

// example of a switch statement.
// Type in the case argument matters. 

let arg = prompt("Enter a value.");

switch (arg) {
	case '0':
		alert('Zero');
		break;
	case '1':
		alert('One');
		break;
	default:
		alert('No soup for you');
}