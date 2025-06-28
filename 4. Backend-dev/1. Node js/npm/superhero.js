import superheroes from 'superheroes';

const name = superheroes[Math.floor(Math.random()*1000)+1];  // Call the function
console.log(`I am a ${name}!`); // Use backticks for template string
