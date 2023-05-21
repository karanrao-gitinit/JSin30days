// #14 Develop a small script which generate array of 5 random numbers and the numbers must be unique

const randomArray = [];

for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * 100);
    if (!randomArray.includes(randomNumber)) {
        randomArray.push(randomNumber);    
    }
}
console.log(randomArray);

