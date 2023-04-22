/**
 #1 Write a code which can give grades to students according to theirs scores:

    80-100, A
    70-89, B
    60-69, C
    50-59, D
    0-49, F
*/

let marks = window.prompt(`Enter Marks`)

switch (true) {
    case marks >= 80 &&  marks <= 100:
        console.log(`A`);
        break;
    case marks >= 70 && marks <= 89:
        console.log(`B`);
        break;
    case marks >= 60 && marks <= 69:
        console.log(`C`);
        break;
    case marks >= 50 && marks <= 59:
        console.log(`D`);
        break;
    case marks >= 0 && marks <= 49:
        console.log(`Work Hard to improve`);
    default:
        console.log(`Entered Value is more than 100 or Not a Number`);
}