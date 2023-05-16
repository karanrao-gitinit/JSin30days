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