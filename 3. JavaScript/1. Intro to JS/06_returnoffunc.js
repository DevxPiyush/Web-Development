function name(getMilkk) {
    console.log("turn left");
    console.log("turn right");
    console.log("turn left");
    console.log("turn left");
    return getMilkk % 10; // gives the output but shart yeh hai ki function ko variable me assign krna padega
}

var change = name(15);
console.log(change);