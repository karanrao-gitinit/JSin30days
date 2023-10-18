/*
    Linear equation is calculated as follows: ax + by + c = 0.
    Write a function which calculates value of a linear equation, solveLinEquation.
*/

function solveLinEquation(a, b, c, x, y) {
    return (a * x + b * y + c)
}
const a = 10, b = 5, c = 10, x = 12, y = 11;
const result = solveLinEquation(a, b, c, x, y);
console.log(`Linear equation is: ${result}`);