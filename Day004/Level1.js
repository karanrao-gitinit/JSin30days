/**
  Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:
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
 Compare the values of myAge and yourAge using if … else. Based on the comparison 
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