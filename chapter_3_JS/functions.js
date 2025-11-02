/* 1) Function Declaration
     - Hoisted: can be called before its definition.
*/
function add(a, b) {
    return a + b;
}
console.log('Function Declaration add(2,3):', add(2, 3));

/* 2) Function Expression
     - Not hoisted in the same way: assigned to a variable.
*/
const multiply = function (a, b) {
    return a * b;
};
console.log('Function Expression multiply(3,4):', multiply(3, 4));

/* 3) Named Function Expression
     - Has an internal name useful for recursion / stack traces.
*/
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
};
console.log('Named Function Expression factorial(5):', factorial(5));

/* 4) Arrow Function (=>)
     - Shorter syntax, lexical `this`, cannot be used as constructors, no `arguments` object.
*/
const square = x => x * x;
const sum = (a, b = 0) => a + b; // default param
console.log('Arrow square(6):', square(6));
console.log('Arrow sum(7):', sum(7));

/* 5) Immediately Invoked Function Expression (IIFE)
     - Executes immediately, creates a private scope.
*/
(function () {
    const secret = 'IIFE secret';
    console.log('IIFE result:', secret);
})();

/* 6) Generator Function
     - Use function* and yield to produce a sequence lazily.
*/
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
const gen = idGenerator();
console.log('Generator next 3 values:', gen.next().value, gen.next().value, gen.next().value);

/* 7) Async Function (async / await)
     - Returns a Promise; makes asynchronous code look synchronous.
*/
async function fetchDataMock() {
    // mock async operation with Promise
    const result = await new Promise(resolve => setTimeout(() => resolve('fetched data'), 50));
    return result;
}
fetchDataMock().then(res => console.log('Async function result:', res));

/* 8) Constructor Function
     - Used with `new` to create objects (pre-ES6 classes).
*/
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function () {
    return `Hi, I'm ${this.name}`;
};
const p = new Person('Alice');
console.log('Constructor function greet():', p.greet());

/* 9) Class Methods (ES6 class syntax)
     - Syntactic sugar over prototype-based constructors.
*/
class Animal {
    constructor(type) {
        this.type = type;
    }
    speak() {
        return `${this.type} makes a sound.`;
    }
    static info() {
        return 'Animals example';
    }
}
const a = new Animal('Dog');
console.log('Class method speak():', a.speak());
console.log('Class static info():', Animal.info());

/* 10) Object Method Shorthand
     - Define methods directly inside object literals.
*/
const obj = {
    x: 10,
    getX() {
        return this.x;
    }
};
console.log('Object method getX():', obj.getX());

/* 11) Higher-Order Function (HOF)
     - Accepts functions as args / returns functions.
*/
function map(arr, fn) {
    const out = [];
    for (let i = 0; i < arr.length; i++) {
        out.push(fn(arr[i], i));
    }
    return out;
}
console.log('Higher-order map:', map([1, 2, 3], n => n * 2));

/* 12) Callback Example
     - Function passed into another to be invoked later.
*/
function doAsync(task, callback) {
    setTimeout(() => {
        const result = task();
        callback(result);
    }, 20);
}
doAsync(() => 42, res => console.log('Callback result:', res));

/* 13) Function with Rest Parameters and Spread
     - Collect variable args with rest; spread expands arrays into args.
*/
function joinStrings(separator, ...parts) {
    return parts.join(separator);
}
console.log('Rest params joinStrings:', joinStrings('-', 'a', 'b', 'c'));
console.log('Spread calling add:', add(...[5, 7]));

/* 14) Bound Function (bind)
     - Create a new function with `this` permanently set.
*/
const moduleObj = {
    x: 100,
    getX() {
        return this.x;
    }
};
const unbound = moduleObj.getX;
const bound = moduleObj.getX.bind(moduleObj);
console.log('Unbound getX():', unbound()); // undefined (or global), depends on strict mode
console.log('Bound getX():', bound());

/* 15) Recursive Function (simple example)
*/
function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
console.log('Recursive fib(7):', fib(7));

/* 16) Pure vs Impure (example)
     - Pure: same inputs -> same output, no side effects.
*/
function pureAdd(a, b) {
    return a + b;
}
let counter = 0;
function impureAdd(a) {
    counter += a; // side effect
    return counter;
}
console.log('Pure add:', pureAdd(2, 3));
console.log('Impure add first call:', impureAdd(2));
console.log('Impure add second call:', impureAdd(2));

/* 17) Summary function to list types (for quick programmatic reference) */
function summary() {
    return [
        'Function Declaration',
        'Function Expression',
        'Named Function Expression',
        'Arrow Function',
        'IIFE',
        'Generator Function',
        'Async Function',
        'Constructor Function',
        'Class Methods',
        'Object Method Shorthand',
        'Higher-Order Function',
        'Callback',
        'Rest/Spread',
        'Bound Function',
        'Recursive Function',
        'Pure vs Impure'
    ];
}
console.log('Function types covered:', summary().join(', '));