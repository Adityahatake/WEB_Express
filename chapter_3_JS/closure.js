// Example to explain closure in JavaScript

function outerFunction() {
    let outerVariable = "I am from outer scope";

    function innerFunction() {
        // innerFunction has access to outerVariable due to closure
        console.log(outerVariable);
    }

    return innerFunction;
}

const myClosure = outerFunction(); // outerFunction returns innerFunction
myClosure(); // Output: I am from outer scope

// Explanation:
// innerFunction forms a closure. It remembers the environment in which it was created,
// so it can access 'outerVariable' even after outerFunction has finished executing.