function bmiCalculator (weight, height) {
    calculator = weight / ( height*height);
    if (calculator<18.5) {
        console.log(" your BMI is " + calculator + ", so you are underweight");
    } else if (calculator >= 18.5 && calculator <=24.9) {
        console.log(" your BMI is " + calculator + ", so you have a normal weight");
    } else {
        console.log(" your BMI is " + calculator + ", so you are overweight");
    }
}
bmiCalculator(54,1.78);