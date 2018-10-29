"use strict"

// JavaScript || 
// 1. Evaluates operands from left to right. 
// 2. each operand converted to boolean. If result is true stop and return original value
// 3. If all operands are false return the last operand. 

// || example
// || seeks the first truthy value
let currentUser = null;
let defaultUser = "Adriyel";
let name = currentUser || defaultUser || "unnamed";

alert(name);

// short-circuit evaluation
// Can be used as an if statement. Generally use if statement.
// Short-circuit can cause issues.

let x;
true || (x=1);

alert(x); // undefined

false || (x=1);

alert(x); // 1 is displayed

// && example
// && seeks the first falsy value

alert(1 && 2 && null && 3); // null is returned

// NOTE! AND has higher precedence than OR

// ! (NOT) operator
// Returns the inverse boolean expression
let someBool = true;
alert(`I have a boolean value true ${!someBool}`);

// How to convert data type to boolean
let str = 'Hello';
alert(`This was a string, now it is ${!!str}`);