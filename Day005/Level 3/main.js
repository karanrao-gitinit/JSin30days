/**
  The following is an array of 10 students ages:

  const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

  - Sort the array and find the min and max age
  - Find the median age(one middle item or two middle items divided by two)
  - Find the average age(all items divided by number of items)
  - Find the range of the ages(max minus min)
  - Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age
console.log(ages.sort());

//Finding maximum and minimum value inside the array using Spread operator
let minAge = ages[0];
let maxAge = 0;

for (let i = 1; i < ages.length; i++) {
  if (ages[i] < minAge) {
    minAge = ages[i];
  }
  if (ages[i] > maxAge) {
    maxAge = ages[i];
  }
}

console.log(`Minimum age: ${minAge}`);
console.log(`Maximum age: ${maxAge}`);

// Find the median age(one middle item or two middle items divided by two)
const middleAge = ages[Math.floor(ages.length / 2)];
console.log(middleAge);


// Find the average age(all items divided by number of items)
let sum = 0;

for (let i = 0; i < ages.length; i++) {
  sum += ages[i]
}
let avgAge = sum / ages.length;

console.log(avgAge);

// Find the range of the ages(max minus min)
console.log(`Range is: ${maxAge - minAge}`);

//Compare the value of (min - average) and (max - average), use abs() method 

//NOTE: abs() method returns absolute value
console.log(Math.abs(minAge - avgAge));
console.log(Math.abs(maxAge - avgAge));



// #2 Find the middle country(ies) in the countries array
// const countries = require (`./countries`);




/**
  #3 Divide the countries array into two equal arrays if it is even. 
  If countries array is not even , one more country for the first half.
*/

