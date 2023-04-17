// #1 Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = window.prompt('Enter Base','')
let height = window.prompt('Enter Height','')
let num = 0.5
console.log(`The area of triangle is ${num * base * height}`)

// #2 Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
const a = parseFloat(prompt('Enter side a', ''))
const b = parseFloat(window.prompt('Enter side b', ''))
const c = parseFloat(window.prompt('Enter side c', ''))
console.log(`The perimeter of the triangle is ${a + b + c}`)

// #3 Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
const numLength = parseFloat(prompt('Enter Length',''))
const numHeight = parseFloat(prompt('Enter Width',''))
console.log(`Area = ${numLength * numHeight}`);
 
// #4 Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14
const radius = parseFloat(prompt('Enter Radius',''))
console.log(`Area of a Circle ${Math.PI * radius * radius}`);

// #5 Calculate the slope, x-intercept and y-intercept of y = 2x -2
const num1 = 2 //slop
const num2 = -2 //y-intercept
const x_intercept = -num2/num1 //x-intercept
console.log(x_intercept);

// #6 Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
const x1 = 2, y1 = 2, x2 = 6, y2 = 10;
const slope = (y2-y1)/(x2-x1)
console.log(slope);

// #7 Compare the slope of above two questions.
console.log(x_intercept == slope);

// #8 Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// I don't know how to calculate the quadratic equation

/* 
#9 Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
*/

const hours = prompt.hours('Enter Hours','')
const rate_per_minute = prompt.rate_per_minute('Enter Rate per Minute', '')
console.log(`Your weekly earning is ${hours * rate_per_minute}`);

// #10 If the length of your name is greater than 7 say, your name is long else say your name is short.
function nameLength(name) {
    if (name.length > 7) {
        return `Your name is long`;
    } else {
        return `Your name is short`;
    }
}

console.log(nameLength(window.prompt('Your Name',''))) // Called nameLength() Function inside which a prompt run and asks user to enter a name.

/* 
#11 Compare your first name length and your family name length and you should get this output.
    
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'

    Output: Your first name, Asabeneh is longer than your family name, Yetayeh
*/

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
''
if (firstName != lastName) {
    console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
}
