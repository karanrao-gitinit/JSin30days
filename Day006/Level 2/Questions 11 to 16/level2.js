const web_techs = require("../../../Day005/Level 2/web_tech");
// const web_tech = require(`./web_techs`);

// #11 Find the longest word in the webTechs array 

let longestWord = '';
let longestWordLength = 0;

for (let i = 0; i < web_techs.length; i++) {
    const name = web_techs[i];
    if (name.length > longestWordLength) {
        longestWord = name;
        longestWordLength = name.length;
    }    
}

console.log(`Longest Word is ${longestWord} having ${longestWordLength} characters`);