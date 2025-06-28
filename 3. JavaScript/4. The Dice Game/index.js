let randomDiceNumber =  Math.random() * 6;
randomDiceNumber = Math.floor(randomDiceNumber) + 1;
let randomImage = "dice" + randomDiceNumber + ".png";
let ImagePath = "images/" + randomImage;

let images1 = document.querySelectorAll("img")[0];
images1.setAttribute("src",ImagePath);

let randomDiceNumber2 = Math.floor(Math.random()*6)+1;
let randomImage2 = "dice" + randomDiceNumber2 + ".png";
let ImagePath2 = "images/" + randomImage2;

let images2 = document.querySelectorAll("img")[1];
images2.setAttribute("src",ImagePath2);
if (randomDiceNumber > randomDiceNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if ( randomDiceNumber < randomDiceNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "It's a Tie";
}