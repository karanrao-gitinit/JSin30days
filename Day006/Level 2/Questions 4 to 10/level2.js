/**
    #4 Using the above countries array, create the following new array.
    
    ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
*/
const countries = require(`./countries`);

const countriesPresent = [];

const sampleCountries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];

for (let i = 0; i < countries.length; i++) {
    let county = countries[i];

    if (sampleCountries.includes(county.toUpperCase())) {
        countriesPresent.push(county.toUpperCase());
    }
}

console.log(countriesPresent);

/**
    #5 Using the above countries array, create an array for countries length'.  
    
    [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
*/

let sampleCountriesLenght = [];

for (let i = 0; i < sampleCountries.length; i++) {
    sampleCountriesLenght.push(sampleCountries[i].length);
}

console.log(sampleCountriesLenght);

/**
 #6 Use the countries array to create the following array of arrays:
 
   [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
    ]

 */

let arrayofCountries = [];

for (let i = 0; i < sampleCountries.length; i++) {

    arrayofCountries.push(sampleCountries[i]);
    arrayofCountries.push(sampleCountries[i].slice(0, 3));
    arrayofCountries.push(sampleCountries[i].length);
}

console.log(arrayofCountries);

/*
    #7 In above countries array, check if there is a country or countries containing the word 'land'. 
    If there are countries containing 'land', print it as array. 
    If there is no country containing the word 'land', print 'All these countries are without land'.

    ['Finland','Ireland', 'Iceland']
*/

let countriesWithLand = [];

for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes('land')) {
        countriesWithLand.push(countries[i]);
    }

    if (countriesWithLand.length > 0) {
        console.log(countriesWithLand);
    } else {
        console.log('All these countries are without land');
    }
}

/*  
    #8 In above countries array, check if there is a country or countries end with a substring 'ia'. 
    If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

    ['Albania', 'Bolivia','Ethiopia']
*/

let countriesWithIA = [];

for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes('ia')) {
        countriesWithIA.push(countries[i]);
    }

    if (countriesWithIA.length > 0) {
        console.log(countriesWithIA);
    } else {
        console.log('These are countries ends without ia');
    }
    
}

/*
  Using the above countries array, find the country containing the biggest number of characters.
  
  'Ethiopia'
*/

let maxCharacter = '';
let maxCountryLength = 0;

for (let i = 0; i < sampleCountries.length; i++) {
    const name = sampleCountries[i];
    if (name.length > maxCountryLength) {
        maxCharacter = name;
        maxCountryLength = name.length
    }
}

console.log('The largest name in sampleCountries[] array is: ' + maxCharacter + ' with ' + maxCountryLength + ' characters.');
