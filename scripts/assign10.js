"use strict";
//To add special characters to text to print in color in the console (combined with console.log()
const RESET = "\x1b[0m"; // Default color
const RED = "\x1b[31m"; // Red text
const GREEN = "\x1b[32m"; // Green text
const BLUE = "\x1b[34m"; // Blue text
const YELLOW = "\x1b[33m"; // Yellow text
function printColoredText(message, color) {
    console.log(color + message + RESET);
}
printColoredText("This is red text", RED);
printColoredText("This is green text", GREEN);
printColoredText("This is blue text", BLUE);
printColoredText("This is yellow text", YELLOW);
