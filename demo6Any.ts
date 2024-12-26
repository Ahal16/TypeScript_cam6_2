//using any
function ProcessData(x: any, y: any): any {
    return x + y;
}

let result: any;
result = ProcessData("Hello", "Bye");
console.log(result); // HelloBye

result = ProcessData(2, 3);
console.log(result); //  5
