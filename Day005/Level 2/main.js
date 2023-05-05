/* 
    #1 Create a separate countries.js file and store the countries array in to this file, 
    create a separate file web_techs.js and store the webTechs array in to this file. 
    Access both file in main.js file
*/

const countries = require (`./countries`);
const web_tech = require(`./web_tech`);

console.log(countries);
console.log(web_tech);

/**
  First remove all the punctuations and change the string to array and count the 
  number of words in the array

    let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    console.log(words)
    console.log(words.length)
*/

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(` `)
console.log(words)
console.log(words.length)