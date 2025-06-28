/**
 * you are going to write a function which will select a random name from a list of name. The person selected will have to pay for everybody's food bill.
 
 * no need of using console.log to give output
 */

// code

function whiisPaying(names) {
    var noofpeople = names.length;
    var RandomPersonPosn = Math.floor(Math.random() * noofpeople);
    var randomPerson = names[RandomPersonPosn];
     console.log(randomPerson + " is going to buy lunch today!");
}
whiisPaying(["nandini", "piyush", "prajwal", "om kadu", "madhura"]);