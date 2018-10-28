"use strict"
// Modal interactions: pause the script and don't allower user to interact with the rest of page until message has been dismissed.
// Create a popup with a message using alert.
alert('hello');

// Ask user input in popup
let age = prompt('What is your age',18);
alert(`you are ${age} years old`);

// Ask the user to confirm
let isConfirmed = confirm('Are you a valid user?');
alert(isConfirmed)
