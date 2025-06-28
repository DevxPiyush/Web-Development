// we can pass function as arguments as well, look for example here 
// high order functions are those functions that take other functions as input
function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}
function subtract(num1, num2){
return num1 - num2;
}
function calculator(num1, num2, operator) {
    return operator(num1, num2);
}


// calling the function

console.log(calculator(3,4,add)); // the add function is passed as input to the oprator parameter 
console.log(calculator(3,4,multiply));
console.log(calculator(3,4,subtract));

