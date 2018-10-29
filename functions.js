"use strict"

function showMessage() {
	let message = "Hello Friend"; // Local variable. Cannot be used outside of function
	alert(message);
}

showMessage();

// A function can access an outer variable.

let userName = 'Bob';	// Global variable

function showMessage2() {
	let message = 'Hello, ' + userName;
	alert(message);
	userName = 'John';
	message = 'Hello, ' + userName;
	alert(message);
}

showMessage2();
alert(userName);

// Passing Parameters
function showMessage3(from, text = "no text given") {
	alert( from + ": " + text );
}
showMessage3("Billy-Bob");
showMessage3("Billy-Bob","Hey how are you?");

// Returning a value 
function checkAge(age) {
	if (age > 25) {
		return true;
	} else {
		return confirm('Are you willing to pay extra to rent a car?');
	}
}

let age = prompt('How old are you?');

if (checkAge(age)) {
	alert('You may rent a car');
} else {
	alert('You may not rent a car');
}