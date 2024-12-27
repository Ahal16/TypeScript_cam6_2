"use strict";
//Converts a specified number to an array of digits
function numToDigits(num) {
    return num.toString().split('').map(Number);
}
const num = 12345;
const digitsArray = numToDigits(num);
console.log(digitsArray.join(', ')); //1, 2, 3, 4, 5
