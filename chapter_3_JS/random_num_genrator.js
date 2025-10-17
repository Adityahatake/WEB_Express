console.log(`This is a Random number generator within the given range: `);
let max = 100;
let min = 50;
let randomnum = Math.floor(Math.random() * (max - min)) + min;

console.log(`Random number (${min}-${max}): ${randomnum}`);



const myButton = document.getElementById("mybutton");
myButton.onclick = function () {
    let randomnum = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById("ans").textContent = randomnum;
};