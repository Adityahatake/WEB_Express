// Boolean Operators in JavaScript

// 1. AND operator (&&)
let isAdult = true;
let hasLicense = true;
console.log("Can drive:", isAdult && hasLicense); // true (both conditions must be true)

// 2. OR operator (||)
let hasCash = false;
let hasCard = true;
console.log("Can make payment:", hasCash || hasCard); // true (at least one condition must be true)

// 3. NOT operator (!)
let isLoggedIn = false;
console.log("Is not logged in:", !isLoggedIn); // true (inverts the boolean value)

// 4. Comparison operators
let age = 25;
console.log("Is adult:", age >= 18); // true
console.log("Is teen:", age >= 13 && age <= 19); // false

// 5. Combining multiple operators
let temperature = 22;
let isSunny = true;
let isWeekend = true;

let isPerfectDay = temperature > 20 && isSunny && isWeekend;
console.log("Is perfect day for picnic:", isPerfectDay); // true