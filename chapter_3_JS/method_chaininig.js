// ...existing code...

// Mutable / fluent API: methods modify internal state and return `this`.
class FluentCalculator {
    constructor(value = 0) {
        this.value = value;
    }

    add(n) {
        this.value += n;
        return this; // enables chaining
    }

    subtract(n) {
        this.value -= n;
        return this;
    }

    multiply(n) {
        this.value *= n;
        return this;
    }

    result() {
        return this.value; // terminal: returns primitive, ends chain
    }
}

// Usage:
const result1 = new FluentCalculator(5)
    .add(3)        // 8
    .multiply(2)   // 16
    .subtract(4)   // 12
    .result();     // 12
console.log('fluent result:', result1);


// Immutable style: each method returns a new instance (no side effects).
class ImmutableCalculator {
    constructor(value = 0) {
        this.value = value;
    }

    add(n) {
        return new ImmutableCalculator(this.value + n);
    }

    multiply(n) {
        return new ImmutableCalculator(this.value * n);
    }

    result() {
        return this.value;
    }
}

// Usage:
const result2 = new ImmutableCalculator(5)
    .add(3)        // new instance with 8
    .multiply(2)   // new instance with 16
    .result();     // 16
console.log('immutable result:', result2);


// Common built-in chaining example with arrays:
const arrayResult = [1, 2, 3, 4, 5]
    .filter(x => x % 2 === 1) // [1,3,5]
    .map(x => x * 10)         // [10,30,50]
    .reduce((a, b) => a + b, 0);
console.log('array chain result:', arrayResult);

// ...existing code...