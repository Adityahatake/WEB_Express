// ===========================
// MODERN JAVASCRIPT (ES6+)
// ===========================

// ----- TEMPLATE LITERALS -----
let name = "Alice";
let greeting = `Hello, ${name}! Welcome to ES6+ features.`;
console.log(greeting);

// ----- DESTRUCTURING -----
let coords = [10, 20, 30];
let [x, y, z] = coords;
console.log(`x=${x}, y=${y}, z=${z}`);

let user = { id: 1, username: "coder", active: true };
let { id, username, active } = user;
console.log(id, username, active);

// ----- DEFAULT + REST + SPREAD -----
function multiply(a = 2, b = 3) {
  return a * b;
}
console.log("Multiply:", multiply());

function sumAll(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log("Sum all:", sumAll(1, 2, 3, 4, 5));

let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let combined = [...arr1, ...arr2];
console.log("Spread arrays:", combined);

let userDetails = { name: "Bob", age: 30 };
let userWithEmail = { ...userDetails, email: "bob@example.com" };
console.log("Spread object:", userWithEmail);

// ----- OPTIONAL CHAINING & NULLISH COALESCING -----
let profile = {
  info: {
    address: {
      city: "New York"
    }
  }
};

console.log("City:", profile?.info?.address?.city); // safe access
console.log("Zip:", profile?.info?.address?.zip ?? "No ZIP provided");

// ----- ARROW FUNCTIONS & THIS -----
let obj = {
  number: 10,
  normalFunc: function () {
    console.log("Normal:", this.number);
  },
  arrowFunc: () => {
    // Arrow functions don’t bind their own "this"
    console.log("Arrow:", this.number);
  }
};

obj.normalFunc(); // Works
obj.arrowFunc();  // Undefined or global

// ----- SET & MAP -----
let set = new Set([1, 2, 2, 3]);
set.add(4);
console.log("Set:", [...set]);

let map = new Map();
map.set("name", "Charlie");
map.set("age", 28);
console.log("Map name:", map.get("name"));
console.log("Map has age?", map.has("age"));

// ----- ITERATORS & GENERATORS -----
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
let gen = idGenerator();
console.log("Generated IDs:", gen.next().value, gen.next().value, gen.next().value);

// ----- SYMBOLS -----
let sym1 = Symbol("unique");
let sym2 = Symbol("unique");
console.log("Symbols equal?", sym1 === sym2); // false

let hiddenProp = Symbol("hidden");
let secretObj = {
  [hiddenProp]: "secret value",
  normal: "visible"
};
console.log("Normal key:", secretObj.normal);
console.log("Hidden key:", secretObj[hiddenProp]);

// ----- CLASSES WITH STATIC + PRIVATE FIELDS -----
class Counter {
  static instances = 0;
  #count = 0; // private

  constructor() {
    Counter.instances++;
  }

  increment() {
    this.#count++;
    return this.#count;
  }

  get value() {
    return this.#count;
  }
}

let c1 = new Counter();
console.log("Increment c1:", c1.increment(), c1.value);
let c2 = new Counter();
console.log("Total instances:", Counter.instances);

// ----- PROMISE UTILS: Promise.all / Promise.race -----
let p1 = new Promise(res => setTimeout(() => res("First"), 1000));
let p2 = new Promise(res => setTimeout(() => res("Second"), 500));

Promise.all([p1, p2]).then(values => console.log("Promise.all:", values));
Promise.race([p1, p2]).then(value => console.log("Promise.race:", value));

// ----- FETCH (BROWSER/Node with fetch API) -----
// (This won’t run in pure Node <18 without fetch polyfill)
// async function fetchExample() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   let data = await response.json();
//   console.log("Fetched data:", data);
// }
// fetchExample();

// ----- MODULES (ES6 STYLE) -----
// export function sayHello(name) {
//   return `Hello, ${name}`;
// }
// import { sayHello } from './module.js';

// ----- ASYNC ITERATORS -----
async function* asyncNumbers() {
  for (let i = 1; i <= 3; i++) {
    await new Promise(res => setTimeout(res, 500));
    yield i;
  }
}

(async () => {
  for await (let num of asyncNumbers()) {
    console.log("Async number:", num);
  }
})();
