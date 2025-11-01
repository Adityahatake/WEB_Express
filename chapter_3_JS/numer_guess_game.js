let max = 100;
let min = 90;

let answer = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(answer);

let running = true;
let guess;
let attempt = 0;

while (running) {
    const input = window.prompt(`Guess a number between ${min}-${max}`);
    if (input === null) {
        // user cancelled
        window.alert('Game cancelled.');
        break;
    }

    guess = Number(input);
    if (Number.isNaN(guess)) {
        window.alert('Please enter a valid number.');
        continue;
    }

    attempt++;

    if (guess !== answer) {
        // optional feedback
        if (guess < answer) {
            window.alert('Too low, try again.');
        } else {
            window.alert('Too high, try again.');
        }
    } else {
        window.alert(`You guessed right, the answer is ${answer} and you took ${attempt} attempts`);
        running = false;
    }
}