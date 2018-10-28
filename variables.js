/* Shows how to work with variables. */

"use strict"	// called to use the updated build of JavaScript

// Variables are case sensitive, CANNOT start with numbers and do not include hyphens.
// Variables are dynamically typed (similar to Python). No need to specify the data type.
let usr = 'Adriyel',
	age = 27,
	message = 'Hello';

// Special cases of variables: $ and _ can be used
let $ = 1,
	_ = 2;
	
// unchanging variables use const. Used for performance.
const pi = 3.1415926535;
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#ff7f00";

let color = COLOR_ORANGE;

alert(color)
alert(message);
alert($ + _);
alert(pi);

// Number variables
alert(1/0);
alert(Infinity);

// Computational error
alert("hello"/2);

let str = "Hello";
let phrase = `embedded string ${str}. backticks are required`;

alert(phrase);
alert(`a number ${age}`)

// boolean (logical) type
let nameField = true;
let ageField = false;
let isGreater = 4>1;
alert(isGreater)

// Null variable 
let ageNull = null;
alert(`this is a null variable ${ageNull}`)

// Undefined value
let x;
alert(`this variable is undefined ${x}`)

// the operator typeof can be used to process the value types
typeof x;			//undefined
typeof ageNull;		//null value
typeof pi;			//number
typeof isGreater;	//boolean
typeof usr;			//string	
typeof Math			//object
typeof alert		//function


