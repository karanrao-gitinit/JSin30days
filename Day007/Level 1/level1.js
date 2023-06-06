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

/**
    #3 Declare a function addNumbers and it takes two two parameters and it returns sum.
*/

function addNumbers(numOne, numTwo) {
    return sum = numOne + numTwo
}

console.log(addNumbers(10,20));

/**
    #4 An area of a rectangle is calculated as follows: area = length x width.
    Write a function which calculates areaOfRectangle.
*/

const areaOfRectangle = (length, width) => {
    return area = length * width
}

console.log(areaOfRectangle(5,8));
