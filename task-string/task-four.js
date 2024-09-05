// Task-4:

// If a given string has either x, replace x by y. if the given string has X, replace it by Y.


let string = "eXample of X and x in the teXt";

// Replace 'x' with 'y'
let result = string.split('x').join('y');

// Replace 'X' with 'Y'
result = result.split('X').join('Y');

console.log("eXample of X and x in the teXt=",result);  
