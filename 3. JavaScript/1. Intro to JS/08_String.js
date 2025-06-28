var message = "Hello";
var dusra = " world";
console.log(message + " this" +dusra);

// // // finding the number of character in a string
// // // we can use word.length

var name ="Piyush";
console.log(name.length);

// // // task 01
// // writing the code that shows me the result as you have written x character, you have y chracters left

var tweet = prompt("Compose your tweet");
alert("you have written" + tweet.length + "characters, you have" + (200-tweet.length) + "characters left");

// slicing the string
var purename = "ok Done Bro";
console.log(purename.slice(0,11)); // variable.slice(source,destination) remember the destination is not included!

// changing the casing of the string
 console.log(purename.toUpperCase());
 console.log(purename.toLowerCase());

 // chaning the only first letter of the name as capital rest small

var name = "nandINI"
var firstname = name.slice(0,1);
var lastname = name.slice(1,name.length);

console.log(" hello " + firstname.toUpperCase() + lastname.toLowerCase());