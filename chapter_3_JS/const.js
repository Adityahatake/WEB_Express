const PI = 3.14;
// let rad = window.prompt(`Enter Radius`);

document.getElementById("mybutton").onclick = function () {
    let rad = document.getElementById("rad").value;
    let circumferance = 2 * PI * rad;
    document.getElementById("ans").textContent = `circumference is ${circumferance}`;
    console.log(`circumference is ${circumferance}`);
};