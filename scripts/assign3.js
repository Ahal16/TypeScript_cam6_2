"use strict";
//Write a function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise
function allElementsMatch(collection, predicate) {
    for (let item of collection) {
        if (!predicate(item)) {
            return false;
        }
    }
    return true;
}
const numbers = [2, 4, 6];
const isEven = (num) => num % 2 === 0;
console.log(allElementsMatch(numbers, isEven)); // true
const mixedNumbers = [2, 4, 5];
console.log(allElementsMatch(mixedNumbers, isEven)); // false
