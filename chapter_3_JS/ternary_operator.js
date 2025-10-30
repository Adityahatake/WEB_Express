// Ternary Operator Introduction
// Syntax: condition ? expressionIfTrue : expressionIfFalse

// Example 1: Simple age check
let age = 20;
let canVote = age >= 18 ? "Yes, can vote" : "No, cannot vote";
console.log(canVote); // Output: "Yes, can vote"

// Example 2: Check if number is positive or negative
let number = -5;
let result = number >= 0 ? "Positive" : "Negative";
console.log(result); // Output: "Negative"

// Example 3: Finding bigger number
let a = 10;
let b = 20;
let bigger = a > b ? a : b;
console.log("Bigger number is:", bigger); // Output: 20

// Example 4: Nested ternary operator
let score = 75;
let grade = score >= 90 ? 'A' 
          : score >= 80 ? 'B'
          : score >= 70 ? 'C'
          : 'F';
console.log("Grade:", grade); // Output: C