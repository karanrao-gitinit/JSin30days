/*
    #3 Write a script which generates a random rgb color number.

    rgb(240,180,80)
*/

// NOTE: 256 is the final range of rgb color gamet
let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);

console.log(`rgb(${red}, ${green}, ${blue})`);
