// Task-5 (Hard)

// Loop through an object and print the key-value pairs with their types




// let myObject = {
//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
// };

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}
for (let key in myObject) {
    let value = myObject[key];
    // console.log(`key: ${key} | type: ${typeof value}`); or
    console.log('key:', key, '| type:', typeof value);
}
