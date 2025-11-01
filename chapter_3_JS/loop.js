// 1. For Loop - Used when you know the number of iterations
console.log("1. For Loop:");
for (let i = 0; i < 3; i++) {
    console.log(`Iteration ${i}`);
}

// 2. While Loop - Used when you don't know the number of iterations
console.log("\n2. While Loop:");
let count = 0;
while (count < 3) {
    console.log(`Count is ${count}`);
    count++;
}

// 3. Do-While Loop - Executes at least once
console.log("\n3. Do-While Loop:");
let num = 0;
do {
    console.log(`Number is ${num}`);
    num++;
} while (num < 3);

// 4. For...in Loop - Used for objects
console.log("\n4. For...in Loop:");
const person = { name: 'John', age: 30, city: 'New York' };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 5. For...of Loop - Used for iterables (arrays, strings)
console.log("\n5. For...of Loop:");
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
}

// 6. forEach Loop - Array method
console.log("\n6. forEach Loop:");
colors.forEach((color, index) => {
    console.log(`Color ${index + 1}: ${color}`);
});