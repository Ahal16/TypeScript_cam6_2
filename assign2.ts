//Removes non-printable ASCII characters from a given string

function removeNonPrintableChars(input: string): string {
    return input.replace(/[^\x20-\x7E]/g, "");
}

const inputString = "Hello\x00World\x1F!";
const cleanedString = removeNonPrintableChars(inputString);
console.log("Original String:", inputString);
console.log("Cleaned String:", cleanedString);
