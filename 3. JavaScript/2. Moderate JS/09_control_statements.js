//while loop
/**
 * while(condition){
    code;
    inc/dec;
 * } */ 

    // fizz buzz program using while loop

    var output=[];
    function fizzbuzzz(n){
        let i = 1;
        while (i<=n) {
            if (i%3===0 && i%5===0) {
        output.push("fizzbuzz");
    }
    else if (i%3===0) {
        output.push("Fizz");
    } else if (i % 5 === 0) {
        output.push("buzz");
    } else {
        output.push(i);
    }
    i++; // increament of while loop
        }
        console.log(output);
    }
    fizzbuzzz(100);