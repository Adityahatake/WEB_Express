// Ask user for age
let age = prompt("What is your age?");

// Convert string input to number
age = Number(age);

// Check if user is an adult
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
