"use strict"

// Function Expressions. Alternative to function declaration. Each function is a value
let sayHi = function() {
	alert("Hello");
};

// Reassigning a function variable to another function variable
let func = sayHi;

func();
sayHi();

// Callback functions:
function ask(questions, yes, no) {
	if (confirm(question)) yes()
		else no();
}

function showOk() {
	alert("You agreed.");
}

function showCancel() {
	alert("You canceled.");
}

ask("Do you believe in life after love?", showOk, showCancel);

// callback functions shortcut
ask(
	"Do you believe in life after love?",
	function() {alert("You agree.");},
	function() {alert("You are so heartless.");}
);

// Function expression vs. function declaration. 
// function declaration is available throughout the entire program/or code block. A function created in a code block (such
// as an if statement code block) will only be available in the code block. If it created out of the script it will be 
// available to the entire script. 
// function expression is created when the execution reaches it and is usable from then on even if it was created in a 
// code block. 

// Arrow expressions instead of function expressions. 
// Syntax: 
// let func = (arg1, arg2, ... argN) => expression; 
// is equivalent to:
// let func = function(arg1, arg2, ... argN) {
// return expression;
// }

let sum = (a,b) => a+b;
alert(sum(1,2));

let sumWordy = (a,b) => {
	let result = a+b;
	return result;
};

alert(sumWordy(1,2));

let age = prompt("What is your age?",18);
let welcome = (age < 18) ? 
	() => alert('Hello') :
	() => alert("Greetings!");
	
welcome();

