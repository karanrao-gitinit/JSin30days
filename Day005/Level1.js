// #1 Declare an empty array;
const arr = [];

// #2 Declare an array with more than 5 number of elements
const myArray = [1, 2, 3, 4, 5]

// #3 Find the length of you arraty
console.log(`Length of myArray: ${myArray.length}`);

// #4 Get the first item, the middle item and the last item of the array
const firstItem = myArray[0]; // First Item
const lastItem = myArray[myArray.length - 1]; // Last Item
const middleItem = myArray[Math.floor(myArray.length / 2)]; // Middle Item

console.log(`First Item present in myArray: ${firstItem}`);
console.log(`Last Item present in myArray: ${lastItem}`);
console.log(`Middle Item present in myArray: ${middleItem}`);

/* 
    #5 Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. 
    The array size should be greater than 5
*/

const mixedDataTypes = [
    1,
    'a',
    'Karan',
    '30DaysOfJavascript',
    465,
    'Redux'
]

console.log(`Size of the mixedDataTypes array: ${mixedDataTypes.length}`);

/**
    #6 Declare an array variable name itCompanies and assign initial
    values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
*/

const itCompanies = [
    `Facebook`,
    `Google`,
    `Microsoft`,
    `Apple`,
    `IBM`,
    `Oracle`,
    `Amazon`
]

// #7 Print the array using console.log()
console.log(itCompanies);

// #8 Print the number of companies in the array
console.log(`Number of Companies in itCompanies[]: ${itCompanies.length}`);

// #9 Print the first company, middle and last company
console.log(`First Company in itCompanies[]: ${itCompanies[0]}`);

console.log(`Last Company in itCompanies[]: ${itCompanies[itCompanies.length - 1]}`);

console.log(`Middle Company in itCompanies[]: ${itCompanies[Math.floor(itCompanies.length / 2)]}`);

// #10 Print out each company
console.log(itCompanies.toString());

