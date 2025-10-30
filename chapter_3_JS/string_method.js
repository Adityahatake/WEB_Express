// JavaScript Program to demonstrate various String methods

// 1. length
let str = "Hello JavaScript!";
console.log("1. Length of string:", str.length);

// 2. toUpperCase() and toLowerCase()
console.log("2. Uppercase:", str.toUpperCase());
console.log("3. Lowercase:", str.toLowerCase());

// 3. charAt() and charCodeAt()
console.log("4. Character at index 6:", str.charAt(6));
console.log("5. ASCII code of character at index 6:", str.charCodeAt(6));

// 4. indexOf() and lastIndexOf()
console.log("6. Index of 'a':", str.indexOf('a'));
console.log("7. Last index of 'a':", str.lastIndexOf('a'));

// 5. slice(), substring(), and substr()
console.log("8. slice(6, 16):", str.slice(6, 16));
console.log("9. substring(6, 16):", str.substring(6, 16));
console.log("10. substr(6, 5):", str.substr(6, 5));

// 6. replace()
console.log("11. Replace 'JavaScript' with 'World':", str.replace("JavaScript", "World"));

// 7. trim(), trimStart(), trimEnd()
let strWithSpaces = "   Hello JS   ";
console.log("12. trim():", `"${strWithSpaces.trim()}"`);
console.log("13. trimStart():", `"${strWithSpaces.trimStart()}"`);
console.log("14. trimEnd():", `"${strWithSpaces.trimEnd()}"`);

// 8. split()
console.log("15. Split by space:", str.split(" "));

// 9. concat()
let str2 = " Let's learn more!";
console.log("16. Concatenated string:", str.concat(str2));

// 10. includes(), startsWith(), endsWith()
console.log("17. Includes 'Java':", str.includes("Java"));
console.log("18. Starts with 'Hello':", str.startsWith("Hello"));
console.log("19. Ends with '!':", str.endsWith("!"));
