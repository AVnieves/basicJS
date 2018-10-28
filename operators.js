"use strict"

// Numeric conversion unary +
// fast way of converting a string to a number. 

let apples = "2",
	oranges = "3";

alert(`Number of fruit ${+apples + +oranges}`);

// Unary operatores have higher precedence than binary operators


// Remainder %
alert(`5 % 3 = ${5%2}`);

// Exponentiation **
alert(`5 to the 3rd power = ${5**3}`);

// Increment and decrement

let counter = 2;
counter++
alert(counter)
counter--
alert(counter)

// Modify in place
let n = 2;

n = n + 5;
alert(n)

n += 5;
alert(n)

// Comma evaluates multiple expressions but only the result of the last is returned
let a = (1+2,3+4)
alert(a)
