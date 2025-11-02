// Variable Scope in JavaScript

// In JavaScript, variable scope refers to the accessibility of variables in different parts of your code. 
// There are three main types of scope: global scope, function scope, and block scope.

// 1. Global Scope
// Variables declared outside of any function or block are in the global scope.
// They can be accessed from anywhere in the code.

var globalVar = "I am a global variable";

function showGlobalVar() {
    console.log(globalVar); // Accessible here
}

showGlobalVar(); // Output: I am a global variable

// 2. Function Scope
// Variables declared within a function are in the function scope.
// They can only be accessed within that function.

function myFunction() {
    var functionVar = "I am a function variable";
    console.log(functionVar); // Accessible here
}

myFunction(); // Output: I am a function variable
// console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined

// 3. Block Scope
// Variables declared with let or const within a block (e.g., inside an if statement or a loop) are in block scope.
// They can only be accessed within that block.

if (true) {
    let blockVar = "I am a block variable";
    console.log(blockVar); // Accessible here
}

// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined

// Summary
// - Global variables can be accessed anywhere.
// - Function variables can only be accessed within the function they are declared in.
// - Block variables (let and const) can only be accessed within the block they are declared in.