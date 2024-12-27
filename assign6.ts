//Create a function that invokes each provided function with the arguments it receives and returns the results

function invokeFunctionsWithArgs(functions: Function[], args: any[][]): any[] {
    return functions.map((fn, index) => fn(...args[index]));
}
const adding = (a: number, b: number) => a + b;
const multiply = (x: number, y: number) => x * y;
const functions = [adding, multiply];
const argumnts = [
    [5, 3],  
    [4, 7]    
];
const results = invokeFunctionsWithArgs(functions, argumnts);
console.log(results);
