function test(){
    var a = 8;
    var b = 5;
    // switching the value of variables 
    var temp = a;
    a = b;
    b = temp;
    console.log("The value of a after altering is: " + a);
    console.log("The value of b after altering is: " + b);
}