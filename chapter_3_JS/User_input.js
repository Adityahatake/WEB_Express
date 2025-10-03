// User input 
// 1. Easy way : Window Prompt
// 2. Professional way : HTML textBox


// 1:
// let Username= window.prompt("What is your Username");
// console.log(Username);


// 2:
let Username ;
document.getElementById("myButton").onclick=function(){
    Username=document.getElementById("myText").value;
    document.getElementById("output").textContent=`Hi! ${Username}`
} 
