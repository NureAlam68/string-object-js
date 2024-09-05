// Task-1:

// Count how many times a string has the letter a


let myString = "An apple a day keeps the doctor away";

// Convert the string to lowercase to ensure case-insensitive counting
// myString = myString.toLowerCase();

// Count the occurrences of 'a'
let count = myString.split('a').length - 1;

console.log('string has the letter a:', count);  
