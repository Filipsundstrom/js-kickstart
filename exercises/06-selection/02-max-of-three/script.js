// Maximum of Three Exercise
// Goal: Ask for three numbers and find the largest one

const prompt = require('prompt-sync')();

// TODO: Ask the user for three numbers
const num1 = Number(prompt("Enter first number: "));
const num2 = Number(prompt("Enter second number: "));
const num3 = Number(prompt("Enter third number: "));
// TODO: Convert each input to a number using Number()
let max = num1;

if (num2 > max) {
    max = num2;
}

if (num3 > max) {
    max = num3;
}
// TODO: Use selecton statements to determine which number is largest
// TODO: Display the maximum number

console.log("The maximum is: " + max);