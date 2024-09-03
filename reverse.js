// let sentence = 'This is Nure Alam.';
// let reverse ='';

// for(let letter of sentence){
//     // console.log(letter);
//     reverse = letter + reverse;
// }
// console.log(reverse);


//  use for loop

let sentence = 'This is Nure Alam.';
let reverse = '';

for(let i = 0; i < sentence.length; i++){
    // console.log(i)
    // console.log(sentence[i])
    let letter = sentence[i];
    reverse = letter + reverse;
}
console.log(reverse);
