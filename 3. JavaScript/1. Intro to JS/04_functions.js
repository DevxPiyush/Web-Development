// making of function
function helloworld(){
    console.log("hello world");
}
// calling the function
helloworld();

function getMilk(){
    console.log("move up");
    console.log("move down");
    console.log("move below");
    console.log("get it");
}
getMilk();

// using parameters and arguments
function cocacolacost(bottles){ // bottles acts as a variable
    var cost = bottles*20;
    console.log("The number of bottles ordered are: " + bottles + " and the cost is: "+ cost)
    console.log(cost);
}
cocacolacost(100);

//challenge
function milking(money){
    var numberofbottles = money / 1.5 ;
    
    console.log("With the given money of amount " + money + " where each bottle cost $1.5, you will get: "+ Math.round(numberofbottles) + " number of bottles")
}
milking(100);