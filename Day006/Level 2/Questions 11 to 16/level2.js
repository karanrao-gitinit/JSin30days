const web_techs = require("../../../Day005/Level 2/web_tech");

// #11 Find the longest word in the webTechs array

let longestWord = "";
let longestWordLength = 0;

for (let i = 0; i < web_techs.length; i++) {
  const name = web_techs[i];
  if (name.length > longestWordLength) {
    longestWord = name;
    longestWordLength = name.length;
  }
}

console.log(
  `Longest Word is ${longestWord} having ${longestWordLength} characters`
);

/*
    #12 Use the webTechs array to create the following array of arrays:

    [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
*/


const techinfo = [
  ["HTML", 4],
  ["CSS", 3],
  ["JavaScript", 10],
  ["React", 5],
  ["Redux", 5],
  ["Node", 4],
  ["MongoDB", 7],
];
    
const newTechArray = [];

for (const info of techinfo) {
    const [techName, length] = info;
    if (web_techs.includes(techName)) {
        newTechArray.push([techName, length]);
    }
}

console.log(newTechArray);

/*
    #13 An application created using MongoDB, Express, React and Node is called a MERN stack app.
    Create the acronym MERN by using the array mernStack
*/

const mernStack = [['MongoDB'], ['Express'], ['React'], ['Node']];
let acronym = '';

for (let i = 0; i < mernStack.length; i++) {
    const stack = mernStack[i][0];
    acronym += stack[0];
}

console.log(acronym);