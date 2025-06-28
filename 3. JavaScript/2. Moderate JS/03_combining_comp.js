/*
to combine different comparative operators we use : && and operator ya fir || or operator 
*/ 
function LoveCalculator (person1, person2){
var lovescore = Math.random() * 100;
var lovescore = Math.floor(lovescore);
console.log(lovescore);
if (lovescore >=70) {
    console.log("True love and cannot be broken")
} else if (lovescore < 70 && lovescore >=35) {
     console.log("maybe true love");
} else {
    console.log("it is not a true love, timepass only");
}
}
LoveCalculator("xy", "yz");
// give the name and hence it wll give us the value