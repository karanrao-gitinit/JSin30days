const characters = 'abcdefghijklmnopqrstuvwxyz1234567890';
let randomId = '';

for (let i = 0; i < 6; i++) {
    let characterId = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(characterId);
}

console.log(randomId);