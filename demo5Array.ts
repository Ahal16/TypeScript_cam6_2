//using array
var list : number[] = [1,2,3,5];
console.log(list);

var list1 : Array<number> = [1,3,5];
console.log(list1);


let arr1 = [ 1, 2, 3]; 
let arr2 = [ 4, 5, 6]; 

//Create new array from existing array 
let copyArray = [...arr1]; 
console.log("CopiedArray: " +copyArray); 

//Create new array from existing array 
let newArray = [...arr1, 7, 8]; 
console.log("NewArray: " +newArray); 

//Create array by merging two arrays 
let mergedArray = [...arr1, ...arr2]; 
console.log("MergedArray: " +mergedArray);