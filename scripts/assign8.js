"use strict";
//To Join all given URL segments together, then normalizes the resulting URL.
function joinAndNormalizeURL(...segments) {
    let joinedURL = segments.join('/');
    return joinedURL;
}
const url1 = "http://example.com";
const url2 = "api";
const url3 = "v1";
const url4 = "users";
const fullURL = joinAndNormalizeURL(url1, url2, url3, url4);
console.log(fullURL); // Output: "http://example.com/api/v1/users"
