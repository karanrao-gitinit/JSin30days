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

/**
    #5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). 
    Write a function which calculates perimeterOfRectangle. 
*/
const parameterOfRectangle = (length, width) => {
    return (2 * (length + width))
}

console.log(parameterOfRectangle(8, 4));

/*
    #6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. 
    Write a function which calculates volumeOfRectPrism.
*/

const volumeOfRectPrism = (length, width, height) => {
    return (length * width * height)
    
}

console.log(volumeOfRectPrism(5, 8, 8));

/*
    #7 Area of a circle is calculated as follows: area = π x r x r. 
    Write a function which calculates areaOfCircle
*/

function areaOfCircle (radius) {
    return (3.14 * radius * radius) // Value of π = 3.14
}

console.log(areaOfCircle(5));

/*
    #8 Circumference of a circle is calculated as follows: circumference = 2πr.
    Write a function which calculates circumOfCircle
*/

function circumOfCircle(radius) {
    return (2 * 3.14 * radius)
}

console.log(circumOfCircle(7));