// #1 Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let
    firstName = 'Karan',
    lastName = 'Rao',
    country = 'India',
    city = 'Pune',
    isMarried = false,
    year = 23
    ;

console.log(
    `
    firstName: ${typeof (firstName)},\n
    lastName: ${typeof (lastName)},\n
    country: ${typeof (country)},\n
    city: ${typeof (city)},\n
    isMarried: ${typeof (isMarried)},\n
    year: ${typeof (year)}
    `
);

// #2 Check if type of '10' is equal to 10
console.log(typeof ('10') == typeof (10));

// #3 Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10);

// #4 Boolean value is either true or false.

//Write three JavaScript statement which provide truthy value.
console.log(1, -1, `Hello, World!`);

//Write three JavaScript statement which provide falsy value.
console.log(undefined);

let statement = null;
console.log(statement);

let statement2 = false;
console.log(statement2);

/**
#5 Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

    Questions   Guessed     Actual Results
    ----------|----------|-----------------
    4 > 3       (true)      true
    4 >= 3      (false)     true
    4 < 3       (false)     false
    4 <= 3      (false)     false
    4 == 4      (true)      true
    4 === 4     (true)      true
    4 != 4      (true)      false
    4 !== 4     (false)     false
    4 != '4'    (true)      false
    4 == '4'    (true)      true
    4 === '4'   (false)     false
    Find the length of python and jargon and make a falsy comparison statement.
 */

console.log(
    4 > 3,
    4 >= 3,
    4 < 3,
    4 <= 3,
    4 == 4,
    4 === 4,
    4 != 4,
    4 !== 4,
    4 != '4',
    4 == '4',
    4 === '4'
);

let word1 = 'python', word2 = 'jargon';
console.log(word1.length !== word2.length);

/**
#6 Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

    4 > 3 && 10 < 12                                
    4 > 3 && 10 > 12
    4 > 3 || 10 < 12
    4 > 3 || 10 > 12
    !(4 > 3)
    !(4 < 3)
    !(false)
    !(4 > 3 && 10 < 12)
    !(4 > 3 && 10 > 12)
    !(4 === '4')
    There is no 'on' in both dragon and python

 */

console.log(
    4 > 3 && 10 < 12,
    4 > 3 && 10 > 12,
    4 > 3 || 10 < 12,
    4 > 3 || 10 > 12,
    !(4 > 3),
    !(4 < 3),
    !(false),
    !(4 > 3 && 10 < 12),
    !(4 > 3 && 10 > 12),
    !(4 === '4')
);

let word3 = 'dragon', word4 = 'python'
console.log(word3.search('on') == word4.search('on'));

// #7 Use the Date object to do the following activities
const now = new Date();

//What is the year today?
console.log(`Year: ${now.getFullYear()}`);

// What is the month today as a number?
console.log(`Month (as number): ${now.getMonth()}`);

// What is the date today?
console.log(`Date: ${now.getDate()}`);

// What is the day today as a number?
console.log(`Day (as number): ${now.getDay()}`);

// What is the hours now?
console.log(`Hours: ${now.getHours()}`);

// What is the minutes now?
console.log(`Minutes: ${now.getMinutes()}`);

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(`Seconds since January 1, 1970: ${(now.getTime() / 1000)}`); 
