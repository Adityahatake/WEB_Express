// Switch Statement Example
let day = 3; // You can change this value to test different cases

// Switch evaluates the value and matches it with cases
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}

// Example with multiple cases sharing same code
let fruit = "apple";
switch (fruit) {
    case "banana":
    case "apple":
    case "orange":
        console.log("This is a common fruit");
        break;
    default:
        console.log("Unknown fruit");
}