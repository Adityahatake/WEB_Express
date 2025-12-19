setTimeout(function(){
    console.log("hello")
} ,3000);

// Function expression example
const add = function(a, b) {
    return a + b;
};

console.log(add(2, 3)); // Output: 5

// Function expressions can also be anonymous or named
const greet = function sayHello(name) {
    return "Hello, " + name + "!";
};

console.log(greet("Alice")); // Output: Hello, Alice!