// Callbacks
// A callback is a function passed as an argument to another function
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
// forEach
// Executes a provided function once for each array element
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num, index) {
    console.log(`Index ${index}: ${num}`);
});


// filter
// Creates a new array with all elements that pass the test implemented by the provided function
const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log("Even Numbers:", evenNumbers);

// map
// Creates a new array with the results of calling a provided function on every element
const squaredNumbers = numbers.map(function(num) {
    return num * num;
});
console.log("Squared Numbers:", squaredNumbers);

// reduce
// Executes a reducer function on each element, resulting in a single output value
const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log("Sum:", sum);

// Arrow function syntax can also be used for brevity
const tripled = numbers.map(num => num * 3);
console.log("Tripled Numbers:", tripled);