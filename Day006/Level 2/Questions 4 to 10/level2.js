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