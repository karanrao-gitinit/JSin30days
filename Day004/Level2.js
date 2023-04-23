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

/**
    #3 Check if a day is weekend day or a working day. Your script will take day as an input.

    What is the day today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
*/

const day = prompt('What is the day today?').trim().toLowerCase();

const workingDays = [`monday`, `tuesday`, `wednesday`, `thursday`, `friday`]

if (day === `saturday` || day === `sunday`) {
    console.log(`${day} is weekend`);
} else if (workingDays.includes(day)) {
    console.log(`${day} is a working day`);    
} else {
    console.log(`INVALID INPUT: Enter a Valid Input`);
}