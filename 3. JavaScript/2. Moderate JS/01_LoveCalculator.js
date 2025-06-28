// using Math.random() function
// simple dice game 
// var n =  Math.random();
// n = n*6;
// n = Math.floor(n) + 1; // getting value from range 1 to 6 not 0 to 5 
// console.log(n);

// making of love calculator 

function LoveCalculator (person1, person2){
var lovescore = Math.random() * 100;
var lovescore = Math.floor(lovescore);
console.log(lovescore);
if (lovescore >= 45) {
    console.log("true love spotted")
} else {
    console.log("katega bhaiya");
}
}

LoveCalculator("xy", "yz");

