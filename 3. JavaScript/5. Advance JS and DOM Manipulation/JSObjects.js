// this is object
let bellboy1= {
    YearofExperience: 12 + " years",
    name: "Jane",
    cleaningRepertoire: ["bathroom","lobby","washroom"]
}

console.log("The Bellboy1 has the experince of about "+bellboy1.YearofExperience + " named as " + bellboy1.name + " and she cleans "+ bellboy1.cleaningRepertoire);


//constructor function

function BellBoy(name, age, experience, languages) {
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.languages = languages;
}
// syntax : var var_name = new obj_name (data); 
var jane = new BellBoy("Jane", 19, 21, ["english", "french"]);
var Pinky = new BellBoy("Pinky",21,22,["Hindi", "urdu"]);

console.log(jane);