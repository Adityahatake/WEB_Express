let max=100;
let min=90;

let answer=Math.floor(Math.random()*(max-min +1))+min;

console.log(answer);

let running =true;
let guess;
let attempt=0;

while(running){
    guess=window.prompt(`Guess a number between ${min}-${max}`);
    if(guess!=answer){
        attempt++;
    }else{
        window.alert(`You guess right , the answer is ${answer} and you took ${attempt} attempts`);

    }
}