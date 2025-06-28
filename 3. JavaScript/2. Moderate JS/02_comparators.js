/*
 1. === is strictly equals to 
 1. == is equals to 
 2. !== is not equal to 
 3. > is greater than
 4. < is smaller than
 5. >= is greater or equal to
 6. <= is lesser or equal to
*/ 

// consider this example
var a = 10;
var b = "10";
console.log(typeof(a));
console.log(typeof(b));
// using equals too
if (a==b) {
    console.log("true")
} else {
    console.log("false")
}
// using strict equals
if (a===b) {
    console.log("still honds true !")
} else {
    console.log("strict equal followed isleye data type me difference hone ke wajahs e vo equal nai hai")
}