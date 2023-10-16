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

const webdevtech = [
  ["HTML", 4],
  ["CSS", 3],
  ["JavaScript", 10],
  ["React", 5],
  ["Redux", 5],
  ["Node", 4],
  ["MongoDB", 7],
];

const newTechArray = [];

for (const tech of web_techs) {
  for (const info of webdevtech) {
    if (tech.length === webdevtech[1]) {
      newTechArray.push([tech, webdevtech[1]]);
    }
  }
}

console.log(newTechArray);
