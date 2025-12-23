// The sort() function in JavaScript sorts the elements of an array in place.
// By default, it sorts elements as strings in ascending order.

const fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // Output: [ 'apple', 'banana', 'cherry' ]

// For numbers, the default sort may not work as expected:
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort();
console.log(numbers); // Output: [ 1, 10, 100, 25, 40, 5 ] (sorted as strings)

// To sort numbers correctly, provide a compare function:
numbers.sort(function(a, b) {
    return a - b; // Ascending order
});
console.log(numbers); // Output: [ 1, 5, 10, 25, 40, 100 ]

// For descending order:
numbers.sort(function(a, b) {
    return b - a;
});
console.log(numbers); // Output: [ 100, 40, 25, 10, 5, 1 ]

// You can also sort objects by a property:
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 }
];

users.sort(function(a, b) {
    return a.age - b.age;
});
console.log(users);
// Output: [
//   { name: 'Bob', age: 20 },
//   { name: 'Alice', age: 25 },
//   { name: 'Charlie', age: 30 }
// ]