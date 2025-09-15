// Age Category Exercise
// Goal: Ask for user's age and categorize them appropriately

const prompt = require('prompt-sync')();

const age = Number(prompt("Enter your age: "));
// TODO: Convert the input to a number
// TODO: Use if/else if statements to categorize the age:
//       - 0-12: "You are a child."
//       - 13-19: "You are a teenager."
//       - 20-64: "You are an adult."
//       - 65+: "You are a senior."
// TODO: Display the appropriate message
if (age <= 12) {
    console.log("You are a child");
} else if (age <= 19) {
    console.log("You are a teenager");
} else if (age <= 64) {
    console.log("You are an adult");
} else {
    console.log("You are a senior");
}