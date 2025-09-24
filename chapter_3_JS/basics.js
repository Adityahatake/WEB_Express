// ===========================
// BASICS OF JAVASCRIPT
// ===========================

// ----- VARIABLES & CONSTANTS -----
var oldSchool = "I'm a var (function-scoped)";
let modern = "I'm a let (block-scoped)";
const constantValue = 3.14;

console.log(oldSchool, modern, constantValue);

// ----- DATA TYPES -----
let numberExample = 42;                 // number
let stringExample = "Hello JS";         // string
let booleanExample = true;              // boolean
let undefinedExample;                   // undefined
let nullExample = null;                 // null
let objectExample = { key: "value" };   // object
let arrayExample = [1, 2, 3];           // array
let symbolExample = Symbol("id");       // symbol
let bigIntExample = 9007199254740991n;  // bigint

console.log(typeof numberExample, typeof stringExample);

// ----- OPERATORS -----
let sum = 5 + 3;         // addition
let product = 5 * 3;     // multiplication
let division = 10 / 2;   // division
let remainder = 10 % 3;  // modulus
let power = 2 ** 3;      // exponentiation
let comparison = 5 > 3;  // true
let equality = 5 === "5"; // false (strict)

// ----- CONDITIONALS -----
let age = 18;
if (age >= 18) {
  console.log("You're an adult");
} else {
  console.log("You're a minor");
}

// Switch statement
let color = "red";
switch (color) {
  case "red":
    console.log("Stop!");
    break;
  case "green":
    console.log("Go!");
    break;
  default:
    console.log("Caution!");
}

// ----- LOOPS -----
for (let i = 0; i < 5; i++) {
  console.log("For loop count:", i);
}

let count = 0;
while (count < 3) {
  console.log("While loop count:", count);
  count++;
}

do {
  console.log("Do-while runs at least once");
} while (false);

// for...of (arrays)
for (let num of [10, 20, 30]) {
  console.log("for...of:", num);
}

// for...in (objects)
let person = { name: "Alice", age: 25 };
for (let key in person) {
  console.log("for...in:", key, person[key]);
}

// ----- FUNCTIONS -----
// Function declaration
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("World"));

// Function expression
const square = function (n) {
  return n * n;
};
console.log(square(5));

// Arrow function
const add = (a, b) => a + b;
console.log(add(2, 3));

// Default parameters
function sayHi(name = "Guest") {
  console.log("Hi,", name);
}
sayHi();
sayHi("Bob");

// ----- ARRAYS -----
let fruits = ["apple", "banana", "cherry"];
fruits.push("orange"); // add
fruits.pop();          // remove last
console.log(fruits);

fruits.forEach(fruit => console.log("Fruit:", fruit));

let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);

let filtered = fruits.filter(fruit => fruit.includes("a"));
console.log(filtered);

let found = fruits.find(fruit => fruit.startsWith("b"));
console.log("Found:", found);

// ----- OBJECTS -----
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  drive: function () {
    console.log("Vroom!");
  }
};

console.log(car.brand);
car.drive();

// Object destructuring
let { brand, year } = car;
console.log("Destructured:", brand, year);

// Spread operator
let carCopy = { ...car, color: "blue" };
console.log(carCopy);

// ----- CLASSES -----
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

let dog = new Dog("Rex");
dog.speak();

// ----- ERROR HANDLING -----
try {
  throw new Error("Something went wrong");
} catch (err) {
  console.error("Caught error:", err.message);
} finally {
  console.log("Finally always runs");
}

// ----- PROMISES -----
function fetchData() {
  return new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
      if (success) resolve("Data loaded!");
      else reject("Error loading data");
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(err => console.error(err));

// ----- ASYNC / AWAIT -----
async function loadData() {
  try {
    let result = await fetchData();
    console.log("Async/await:", result);
  } catch (err) {
    console.error("Async/await error:", err);
  }
}
loadData();

// ----- MODULES (Node.js style) -----
// (in practice you’d split into files, but here’s an example)
// module.exports = { greet, add };
// const { greet } = require('./basics');

// ----- DOM MANIPULATION (Browser Only) -----
// document.getElementById("myButton").addEventListener("click", () => {
//   alert("Button clicked!");
// });

// ----- JSON -----
let jsonString = JSON.stringify(person);
console.log("JSON string:", jsonString);

let parsed = JSON.parse(jsonString);
console.log("Parsed JSON:", parsed);

// ----- DATE -----
let now = new Date();
console.log("Current date:", now.toISOString());

// ----- MATH -----
console.log("Random number:", Math.random());
console.log("Pi:", Math.PI);
console.log("Square root of 16:", Math.sqrt(16));

// ----- REGULAR EXPRESSIONS -----
let regex = /hello/i;
console.log("Regex test:", regex.test("Hello world"));
