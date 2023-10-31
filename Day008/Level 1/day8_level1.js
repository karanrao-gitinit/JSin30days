/** 
    1. Create an empty object called dog
    2. Print the the dog object on the console
    3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
    4. Get name, legs, color, age and bark value from the dog object
    5. Set new properties the dog object: breed, getDogInfo
*/

// #1 Empty object
let dog = {}; 

// #2 Print
console.log(dog); // output: {}

// #3 Add Properties to the object
dog.name = 'Fang'
dog.legs = 4
dog.colour = 'Grey'
dog.age = 2
dog.bark = 'woof woof'

dog.getbark = function() {
    return `Dog sounds like ${this.bark}`
}

console.log(dog.getbark()); // Output: Dog sounds like woof woof

// #4 Get properties from the object

console.log(`Name: ${dog.name}`);
console.log(`Number of Legs: ${dog.legs}`);
console.log(`Colour: ${dog.colour}`);
console.log(`Age: ${dog.age}`);
console.log(`Voice: ${dog.bark}`);