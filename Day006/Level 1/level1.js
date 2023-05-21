// #1 Iterate 0 to 10 using for loop, do the same using while and do while loop

// NOTE: Run both the codes separately

// Loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// While loop
let i = 0
while (i <= 10) {
    console.log(i);
    i++;
}

// do-while loop
do {
    console.log(i);
    i++
} while (i <= 10);


// #2 Iterate 10 to 0 using for loop, do the same using while and do while loop

// Loop
for (let x = 10; x >= 0; x--) {
    console.log(x);
}

// while
let x = 10;

while (x >= 0) {
    console.log(x);
    x--;
}

// do-while loop
do {
    console.log(x);
    x--;
} while (x >= 10); 

// #3 Iterate 0 to n using for loop
let n = 10;

for (let i = 0; i <= n; i++) {
    console.log(i);
}

/* 
#4 Write a loop that makes the following pattern using console.log():
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

for(let i = 0; i < 7; i++) {
    let row = '';
    for (let j = 0; j < i; j++) {
        row += '#';
    }
    console.log(row);
}

/**
    Use loop to print the following pattern:

    0 x 0 = 0
    1 x 1 = 1
    2 x 2 = 4
    3 x 3 = 9
    4 x 4 = 16
    5 x 5 = 25
    6 x 6 = 36
    7 x 7 = 49
    8 x 8 = 64
    9 x 9 = 81
    10 x 10 = 100
*/

for(let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);z
}

// #7 Use for loop to iterate from 0 to 100 and print only even numberse

for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}

// #8 Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i = 1; i <= 100; i+=2) {
    console.log(i);
}

// #9 Use for loop to iterate from 0 to 100 and print only prime numbers

for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}

/* #10 Use for loop to iterate from 0 to 100 and print the sum of all numbers.

    The sum of all numbers from 0 to 100 is 5050.

*/
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

/*
    #11 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

    The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

*/

let sum2 = 0, sum3 = 0;

for (let i = 0; i <= 100; i++) {

    // for even numbers
    if (i % 2 == 0) {
        sum2 += i
    }

    // for odd number
    else {
        sum3 += i
    }
}

console.log(`The sum of all even from 0 to 100 is ${sum2}`);
console.log(`The sum of all odd from 0 to 100 is ${sum3}`);

/*
    #12 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
    Print sum of evens and sum of odds as array

    [2550, 2500]

*/

const arr = [sum2 , sum3];
console.log(arr);

// #13 Develop a small script which generate array of 5 random numbers

const randomArray = [];

for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * 100);
    randomArray.push(randomNumber); 
}

console.log(randomArray);

