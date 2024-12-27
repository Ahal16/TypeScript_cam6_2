//To compute the average of an array, after mapping each element to a value using the provided function

// Function to compute the average of an array after mapping each element
function computeAverage(array: number[], mapperFunction: (item: number) => number): number {
    const sum = array.map(mapperFunction).reduce((acc, value) => acc + value, 0);  // Sum the mapped values
    return sum / array.length;  
}

const numbs = [1, 2, 3, 4, 5];  
const average = computeAverage(numbs, num => num * 2);  // Multiply each number by 2 and compute the average
console.log(`Average: ${average}`);
