"use strict"

// Strict conversaion is used becuause regular inequality cannot distinguish between 0 and false
alert (0 == false); // returns true
alert(0 === false); // returns false

alert( null === undefined); // false
alert(null == undefined); // true

alert( null > 0 ); // false
alert( null == 0); // false
alert( null >= 0); // true

alert( undefined > 0); // false
alert( undefined < 0); // false
alert( undefined == 0); // false

// do not use comparisons <= >= < > with a variable which may be null/undefined.
// Check for these cases separately
// === is safer when value can become undefined.
