/* 
    #2 Write a script which generates a random hexadecimal number.
    
    '#ee33df'
*/

let number = 1519;
let hexadecimalNumber = '';

while (number > 0) {
    let remainder = number % 16;
    
    if (number < 10) {
        hexadecimalNumber = remainder + hexadecimalNumber;
    } else {
        let hexadecimalDigit = String.fromCharCode(remainder + 55);
        hexadecimalNumber = hexadecimalDigit + hexadecimalNumber;    
    }

    number = Math.floor(number / 16);
}

console.log(hexadecimalNumber);
















/**
 *  if (remainder < 10) {
        hexadecimalNumber = remainder + hexadecimalNumber;
    } else {
        let hexadecimalDigit = String.fromCharCode(remainder + 55);
        hexadecimalNumber = hexadecimalDigit + hexadecimalNumber;
    }

    number = Math.floor(number / 16);
 */