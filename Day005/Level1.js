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
console.log(`\nIT Companies:`);
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}
// #11 Change each company name to uppercase one by one and print them out
console.log(`\nIn UpperCase: `);
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
}

// #12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
console.log(`\n${itCompanies.join(`, `)} are big IT companies`);

// #13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let index = itCompanies.indexOf(`Alphabet`)

if (index === -1) {
    console.log(`The company doesn't exist in the array`);
} else {
    console.log(`The company exists in the array`);
}

// #14 Filter out companies which have more than one 'o' without the filter method
const filteredCompanies = []

for (let i = 0; i < itCompanies.length; i++) {
    const company = itCompanies[i];
    let oCount = 0;

    for (let j = 0; j < company.length; j++) {
        if (company[j] === `o` || company[j] === `O`) {
            oCount++;
        }
    }

    if (oCount <= 1) {
        filteredCompanies.push(company); // Populates the array with company names having more than one 'o'.
    }
}
console.log(filteredCompanies);


// #15 Sort the array using sort() method
console.log(itCompanies.sort());

// #16 Reverse the array using reverse() method
console.log(itCompanies.reverse());

// #17 Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));

// #18 Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3,itCompanies.length));

// #19 Slice out the middle IT company or companies from the array
const middleIndex = Math.floor(itCompanies.length / 2)
const middleCompanies = itCompanies.splice(middleIndex, 1)
console.log(middleCompanies);

// #20 Remove the first IT company from the array
console.log(itCompanies.splice(0,1));

// #21 Remove the middle IT company or companies from the array
const removeMiddleCompanies = itCompanies.splice(middleIndex, 1)
console.log(removeMiddleCompanies);

// #22 Remove the last IT company from the array
console.log(itCompanies.pop());

// #23 Remove all IT companies
console.log(itCompanies.splice());
