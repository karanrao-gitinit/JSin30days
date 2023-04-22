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

/**
 #2 Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

    September, October or November, the season is Autumn.
    December, January or February, the season is Winter.
    March, April or May, the season is Spring
    June, July or August, the season is Summer
*/

let month = window.prompt(`Enter Month`)

switch (true) {
    case month == `September` || month == `October` || month == `November`:
        console.log(`Autumn`);
        break;
    case month == `December` || month == `January` || month == `February`:
        console.log(`Winter`);
        break;    
    case month == `March` || month == `April` || month == `May`:
        console.log(`Spring`);
        break;
    case month == month == `June` || month == `July` || month == `August`:
        console.log(`Summer`);
    default:
        console.log(`Your Input is not a Month`);
}