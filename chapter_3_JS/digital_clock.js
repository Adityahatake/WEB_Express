function updateClock() {

    const clock = document.querySelector('.clock');
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Pad with leading zeros
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Initial call
updateClock();
// Update every second
setInterval(updateClock, 1000);