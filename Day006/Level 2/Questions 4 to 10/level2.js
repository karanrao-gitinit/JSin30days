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