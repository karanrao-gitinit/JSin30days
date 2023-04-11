// #1 Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = window.prompt('Enter Base','')
let height = window.prompt('Enter Height','')
let num = 0.5
console.log(`The area of triangle is ${num * base * height}`)

// #2 Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
const a = parseFloat(window.prompt('Enter side a', ''))
const b = parseFloat(window.prompt('Enter side b', ''))
const c = parseFloat(window.prompt('Enter side c', ''))
console.log(`The perimeter of the triangle is ${a + b + c}`)