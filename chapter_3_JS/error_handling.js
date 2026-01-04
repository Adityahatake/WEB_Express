// Error handling in JavaScript is commonly done using try...catch blocks.

// This allows you to catch and handle errors gracefully without crashing your program.


function divide(a, b) {
    try {
        if (b === 0) {
            // Throwing a custom error
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    } catch (error) {
        // Handling the error
        console.error("An error occurred:", error.message);
        return null;
    } finally {
        // The finally block always runs, whether there was an error or not
        console.log("Operation attempted.");
    }
}

console.log(divide(10, 2)); // Outputs: 5
console.log(divide(10, 0)); // Outputs: null and logs error message

// You can also handle asynchronous errors using Promises and async/await

async function fetchData() {
    try {
        // Simulate an async operation that fails
        throw new Error("Failed to fetch data.");
    } catch (error) {
        console.error("Async error:", error.message);
    }
}

fetchData();