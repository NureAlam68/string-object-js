// Task-2:

// Count how many times a string has the letter a or A


// let string = "Amazing Alpha";
// let count = 0;

// for (let i = 0; i < string.length; i++) {
//     if (string[i] === 'a' || string[i] === 'A') {
//         count++;
//     }
// }
// console.log(count); 



let string = "Amazing Alpha";
let count = string.toLowerCase().split('a').length - 1;


console.log('string has letter a or A:', count);