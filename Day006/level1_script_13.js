// #13 Develop a small script which generate array of 5 random numbers

const randomArray = [];

for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * 100);
    randomArray.push(randomNumber); 
}

console.log(randomArray);