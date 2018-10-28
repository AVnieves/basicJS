"use strict"
// ToString: type conversion
let str = true;

alert(typeof str);

str = String(str);
alert(typeof str);

// ToNumber: type conversion

alert("6"/"2"); // automatic conversion occurs when operator is used except for the +

alert(1 + '2'); // addition concatenates for a number and a string 

let strNum = "123";
alert(typeof strNum);

let num = Number(strNum);
alert(typeof num);