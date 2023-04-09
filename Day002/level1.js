// #1
let challenge = "30 Day of JavaScript"

// #2 Print the value inside string challenge
console.log(challenge)

// #3 Print length
console.log(challenge.length)

// #4 Change the string characters into upper case
console.log(challenge.toUpperCase())

// #5 Change the string characters into lower case
console.log(challenge.toLowerCase())

// #6 cut the first word of the string
console.log(challenge.slice(0,2)) // Using slice()
console.log(challenge.substring(0,2)) //Using substring()

// #7 Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.slice(2,-1));

// #8 Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));

// #9 Split the string into an array using split() method
console.log(challenge.split());

// #10 Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '));

// #11 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string.split(', '));

// #12 Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python'));

// #13What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

// #14 What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J')); 

// #15 Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf());

// #16 Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf());

// #17 Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'));

// #18 Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf('because'));

// #19 Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search('becasue'));

// #20 Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let challenge2 = ' 30 Days Of JavaScript '
console.log(challenge2.trim(' '));

// #21 Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'));

// #22 Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('JavaScript'));

// #23 Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('of'));

//  #24 Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let sentence2 = '30 Days of'
console.log(sentence2.concat(' JavaScript'));

// #25 Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2)); // Prints Output for 2 times