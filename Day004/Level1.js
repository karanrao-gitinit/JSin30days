/**
  #1 Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:
 'You are old enough to drive' but if not 18 give another feedback stating to wait for the
  number of years he needs to turn 18.

    Enter your age: 30
    You are old enough to drive.

    Enter your age:15
    You are left with 3 years to drive.
*/

let age = window.prompt('Enter your age:')
const legalAge = 18;

if (age >= legalAge) {
    console.log(`You are old enough to drive`);
} else {
    console.log(`Wait for ${legalAge - age} years`);
}

/**
 #2 Compare the values of myAge and yourAge using if … else. Based on the comparison 
 and log the result to console stating who is older (me or you).
 Use prompt(“Enter your age:”) to get the age as input.

    Enter your age: 30
    You are 5 years older than me.
*/

let yourAge = window.prompt('Enter your age: ')
const myAge = 23


if (myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} older than you`);
} else {
    console.log(`Your are ${myAge - yourAge} older than me`);
}

/**
    #3 If a is greater than b return 'a is greater than b' else 'a is less than b'. 
    Try to implement it in to ways

    - using if else
    - ternary operator.

    let a = 4
    let b = 3

    Output: 4 is greater than 3
*/

// Using if-else
let a = 4, b = 3

if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${b} is greater than ${a}`);
}

// Using Ternary Operator

let result = a > b ? `${a} is greater than ${b}` : `${b} is greater than ${a}`
console.log(result); 

/**
    #4 Even numbers are divisible by 2 and the remainder is zero.
    How do you check, if a number is even or not using JavaScript?

    Enter a number: 2
    2 is an even number

    Enter a number: 9
    9 is is an odd number.
*/

let num = window.prompt('Enter a number: ')

if (num / 2 == 0) {
    console.log(`${num} is an even number`);
} else {
    console.log(`${num} is an odd number`);
}