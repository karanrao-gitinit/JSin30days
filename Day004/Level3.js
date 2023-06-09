/**
 #1 Write a program which tells the number of days in a month.
    
    Enter a month: January
    January has 31 days.

    Enter a month: JANUARY
    January has 31 day

    Enter a month: February
    February has 28 days.

    Enter a month: FEbruary
    February has 28 days.
*/

/*
    CODE Explaination:
    -----------------

    require is a builtin function used to load node js modules    

    'prompt-sync' package to prompt the user for input synchronously
    (i.e. the code will wait for the user to enter input before continuing).
    The user's response is stored in the month variable,
    which can then be used to print a message to the console.
*/
const prompt = require('prompt-sync')();

// Using trim function to remove any leading or trailing spaces
// Using toLowerCase() to convert user input into lower case and make it uniform
const month = prompt('Enter the month: ').trim().toLowerCase();

let days;

switch (month) {
    case `january`:
    case `march`:
    case `may`:
    case `july`:
    case `august`:
    case `october`:
    case `december`:
        days = 31;
        console.log(`${month} has ${days}`);
        break;

    case `april`:
    case `june`:
    case `september`:
    case `november`:
        days = 30;
        console.log(`${month} has ${days}`);
        break;

    case `february`:
        days = 28;
        console.log(`${month} has ${days}`);
        break;

    default:
        console.log(`INVALID INPUT: Please enter a valid month`);
        break;
}

// #2 Write a program which tells the number of days in a month, now consider leap year.  -

let year = prompt(`Enter the Year: `);
let inputMonth = prompt(`Enter the Month Number from 1 to 12: `);

//Convert the user input string into number
year = Number(year);
inputMonth = Number(inputMonth);

// Check if its a leap year or not 
const isLeapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
? console.log(`${year} is a Leap year`)
: console.log(`${year} is not a Leap year`)

let numberOfDays;

if (inputMonth == 2) {
    if (((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) == true) {
        numberOfDays = 29;
    } else {
        numberOfDays = 28;
    }

} else if (inputMonth == 4 || inputMonth == 6 || inputMonth == 9 || inputMonth == 11) {
    numberOfDays = 30;
} else if (inputMonth == 1 || inputMonth == 3 || inputMonth == 5 || inputMonth == 7 || inputMonth == 8 || inputMonth == 10 || inputMonth == 12) {
    numberOfDays = 31;
} else {
    console.log(`INVALID INPUT: Enter valid month from 1 to 12`);
}

console.log(`There are ${numberOfDays} in ${inputMonth}/${year}`);