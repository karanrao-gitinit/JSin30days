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

/*
    #9 Density of a substance is calculated as follows:density= mass/volume. 
    Write a function which calculates density.
*/

function density(mass, volume) {
    return (mass / volume)
}

console.log(density(10, 4));

/*
    #10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken.
    Write a function which calculates a speed of a moving object, speed.
*/

function speed(totalDistanceCovered, totalTimeTaken) {
    return (totalDistanceCovered / totalTimeTaken)
}

console.log(`Speed is ` + (100, 5) + ` km/hour`);

/*
    #11 Weight of a substance is calculated as follows: weight = mass x gravity. 
    Write a function which calculates weight.
*/

function weight(mass, gravity) {
    return (mass * gravity)
}

console.log(`Weight is: ` + (4,10));

/*
    #12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. 
    Write a function which convert oC to oF convertCelsiusToFahrenheit.
*/


function convertCelsiusToFahrenheit(oC) {
    return((oC * 9/5) + 32)
}

const temperatureInCelsius = 32;
const temperatureInFahrenheit = convertCelsiusToFahrenheit(temperatureInCelsius);

console.log(`${temperatureInCelsius} Celsius is equivalent to ${temperatureInFahrenheit} Fahrenheit`);