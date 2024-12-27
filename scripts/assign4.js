"use strict";
//To Capitalize the first letter of a string
function capitalizeFirstLetter(input) {
    if (input.length === 0) {
        return "";
    }
    return input.charAt(0).toUpperCase() + input.slice(1);
}
const res = capitalizeFirstLetter("country");
console.log(res); // Country
