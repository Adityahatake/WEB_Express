let fruits=["apple", "banana" ,"banana" ,"papaya"];
fruits.sort().reverse();

// Using spread operator to copy and merge arrays
let moreFruits = ["mango", ...fruits, "grape"];
console.log("Merged fruits array using spread:", moreFruits);

// Using rest operator in a function to accept variable number of arguments
function printFruits(...allFruits) {
    console.log("Fruits passed using rest:", allFruits);
}
printFruits("kiwi", "orange", ...fruits);

// Original code to print sorted and reversed fruits
for(let f of fruits){
    console.log(f);
}

function sum(...numbers){
    let Result=0
    for(number of numbers){
        Result+=number;
    }
    return Result;
}

let p1= sum(1,2,3);
console.log(p1);