// Task-5:

// Capitalize Every first Letter of each word in a String


let string = "capitalize every first letter of each word";

let result = string.replace(/\b\w/g, char => char.toUpperCase());

console.log(result); 