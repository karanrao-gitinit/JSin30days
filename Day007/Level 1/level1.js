// #1 Declare a function fullName and it print out your full name.

function fullname() {
    console.log(`Karan Rao`);
}

fullname(); // function invoking

/**
 #2 Declare a function fullName and now it takes firstName, 
 lastName as a parameter and it returns your full - name.
*/

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}

console.log(fullName(`Karan`, `Rao`))