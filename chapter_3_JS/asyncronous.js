// Synchronous code example
console.log("Synchronous code starts");
console.log("Step 1");
console.log("Step 2");
console.log("Synchronous code ends");

// Output:
// Synchronous code starts
// Step 1
// Step 2
// Synchronous code ends

// Asynchronous code example
console.log("Asynchronous code starts");
setTimeout(() => {
    console.log("Step 1 (after 2 seconds)");
}, 2000);
console.log("Step 2");
console.log("Asynchronous code ends");

// Output:
// Asynchronous code starts
// Step 2
// Asynchronous code ends
// Step 1 (after 2 seconds)

// Explanation:
// - Synchronous code runs line by line, waiting for each line to finish before moving to the next.
// - Asynchronous code (like setTimeout) allows other code to run while waiting for an operation to complete.