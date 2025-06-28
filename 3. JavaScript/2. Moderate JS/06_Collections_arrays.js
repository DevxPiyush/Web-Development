/* Syntax 
var guestList = ["angella","Jack","Parth","Aryan"]
*/

// opertions in js
/**
 * To check if a item is present in the array = using function guestList.includes(angella); 
 * to push any name into the list ,  guestList.push("mathew"); works - always pushes at the end of the array
 * to pop any element ( removing last element from the array) use guestList.pop("Aryan");
 */

// run in browser console
var guestList = ["angella","Jack","Parth","Aryan"]
var name = prompt("Enter the name");
if (guestList.includes(name)) {
    console.log("welcome " + name);
}
else{
    console.log("Not Welcome");
}