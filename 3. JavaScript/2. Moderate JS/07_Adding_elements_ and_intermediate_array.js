// the fizzbuzz problem
// for every number that is divisible by 3, print fizz and for every number that is divisible by 5, print buzz and if divisible by both print fizzbuzz


var output= [];
function fizzbuzz(n){
for (let i = 1;  i <= n; i++) {
    if (i%3===0 && i%5===0) {
        output.push("fizzbuzz");
    }
    else if (i%3===0) {
        output.push("Fizz");
    } else if (i % 5 === 0) {
        output.push("buzz");
    } else {
        output.push(i);
    }
}
console.log(output);
}
fizzbuzz(100);