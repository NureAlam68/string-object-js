let college = {
    name: 'VNC',
    class: ['11', '12'],
    event: ['science fair', 'bijoy dibos', '21 feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top',
        }
    }
}
// console.log(college);

// console.log(college.unique.color);



// change property in object between object

// college.unique.result.merit = 'top top top most';

// console.log(college.unique.result.merit);



// array property value access in object

// console.log(college.event[1]);



// change vale in array between object

// college.event[1] = '16 dec';

// console.log(college.event);



// access merit use bracket notation

// console.log(college['unique'].result.merit);



// delete object property

delete college.unique

console.log(college);



