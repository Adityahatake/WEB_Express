function rollDice() {
    const numDice = parseInt(document.querySelector('input[type="number"]').value) || 1;
    const imagesDiv = document.getElementById('Images');
    const resultDiv = document.getElementById('Result');
    imagesDiv.innerHTML = '';
    resultDiv.innerHTML = '';

    let total = 0;
    for (let i = 0; i < numDice; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        total += roll;

        const img = document.createElement('img');
        img.src = `Dice_images/dice${roll}.png`;
        img.alt = `Dice ${roll}`;
        img.style.width = '50px';
        img.style.margin = '5px';
        imagesDiv.appendChild(img);
    }

    resultDiv.textContent = `Total: ${total}`;
}
