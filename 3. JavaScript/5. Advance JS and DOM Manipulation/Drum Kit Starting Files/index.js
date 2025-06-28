// Syntax: .addEventListener("type", listener[, options])

// This section of code detects button presses
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        buttonAnimation(buttonInnerHtml);
        makeSound(buttonInnerHtml);
    });
}

// This section detects which key is pressed
document.addEventListener("keydown", function (event) {
    buttonAnimation(event.key);
    makeSound(event.key);
});

// This function plays the sound based on key/button pressed
function makeSound(key) {
    switch (key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:
            console.log("Unrecognized key: " + key);
    }
}
// creating animation on buttons after clicking and after keypress

function buttonAnimation (currentKey){
var activebutton = document.querySelector("." + currentKey);
activebutton.classList.add("pressed");

// we need to add delay such that after pressing, it returns to the normal state, done by using the timeout state
setTimeout(function(){
activebutton.classList.remove("pressed");
},100);
}