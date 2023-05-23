/**
    #1 Develop a small script which generate any number of characters random id:

    fe3jo1gl124g

    xkqci4utda1lmbelpkm03rba
*/

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomID = '';

// Defined range of the character
let randomRange = Math.floor(Math.random() * characters.length); 

for (let i = 0; i < randomRange; i++) {
   let characterId = Math.floor(Math.random() * randomRange);
   randomID += characters.charAt(characterId);
}

console.log(randomID);