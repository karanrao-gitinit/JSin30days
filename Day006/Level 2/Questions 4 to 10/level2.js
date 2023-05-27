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