// this is dony by the following things 

// in a object : 
var object1 = {
name : Piyush,
class : 4 + " th year",
age : 21,
work : function () { // provide the name of function as a new parameter
    programming_languages:["java"+"js"+"kotlin"+"dart"];
}
}


// inside a constructor function

function Person(name, age, year, internStatus) {
    this.name = name;
    this.age = age;
    this.year = year;
    this.internStatus = internStatus;
    this.workExperience = function () {
        console.log("He works at TenancyPassport as a UX Designer");
    };
}

// Creating an object
var Piyush = new Person("Piyush Agroya", 21, 4, true);
console.log(Piyush);

// Calling the method
Piyush.workExperience();
