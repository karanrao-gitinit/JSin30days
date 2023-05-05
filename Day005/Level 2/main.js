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

/**
  In the following shopping cart add, remove, edit items
  
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

  - add 'Meat' in the beginning of your shopping cart if it has not been already added
  - add Sugar at the end of you shopping cart if it has not been already added
  - remove 'Honey' if you are allergic to honey
  - modify Tea to 'Green Tea'
*/
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart);

// Adds Meat at the beginning
shoppingCart.unshift('Meat'); 
console.log(shoppingCart);

// Adds Suger at the end
shoppingCart.push('Suger'); 
console.log(shoppingCart);

// Removes Honey from the array
const itemTobeRemoved = shoppingCart.indexOf(`Honey`); 
if (itemTobeRemoved !== -1) {
  shoppingCart.splice(itemTobeRemoved, 1) 
}
console.log(shoppingCart);

// Modifies Tea to Green Tea
shoppingCart.splice(3, 1, `Green Tea`) 
console.log(shoppingCart);