"use strict";
//Create a function that invokes each provided function with the arguments it receives and returns the results
function invokeFunctionsWithArgs(functions, args) {
    return functions.map((fn, index) => fn(...args[index]));
}
const adding = (a, b) => a + b;
const multiply = (x, y) => x * y;
const functions = [adding, multiply];
const argumnts = [
    [5, 3],
    [4, 7]
];
const results = invokeFunctionsWithArgs(functions, argumnts);
console.log(results);
