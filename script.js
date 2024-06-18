let minutes = 0;
let seconds = 0;
let tens = 0;
let getMinutes = document.querySelector(".minutes");
let getSeconds = document.querySelector(".seconds");
let getTens = document.querySelector(".tens");
let btnStart = document.querySelector(".btn-start");
let btnStop = document.querySelector(".btn-stop");
let btnReset = document.querySelector(".btn-reset");
let btnLap = document.querySelector(".btn-lap");
let lapContainer = document.querySelector(".lap-time"); // Selecting lap time container
let Interval;
let lapCount = 1;

btnStart.addEventListener("click", () => {
    Interval = setInterval(startTimer, 10);
});

btnStop.addEventListener("click", () => {
    clearInterval(Interval);
});

btnReset.addEventListener("click", () => {
    clearInterval(Interval);
    tens = 0;
    seconds = 0;
    minutes = 0;
    getMinutes.innerHTML = "00";
    getSeconds.innerHTML = "00";
    getTens.innerHTML = "00";
    clearLaps();
    lapCount = 1;
    clearLapTime(); // Clear lap time when reset
});

btnLap.addEventListener("click", () => {
    addLap();
});

function startTimer() {
    tens++;
    if (tens <= 9) {
        getTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        getTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        getSeconds.innerHTML = "0" + seconds;
        tens = 0;
        getTens.innerHTML = "00";
    }
    if (seconds > 9) {
        getSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
        minutes++;
        getMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        getSeconds.innerHTML = "00";
    }
    if (minutes > 9) {
        getMinutes.innerHTML = minutes;
    }
}

function addLap() {
    let lapTime = document.createElement("div");
    lapTime.textContent = `Lap ${lapCount}: ${getMinutes.textContent}:${getSeconds.textContent}:${getTens.textContent}`;
    lapContainer.appendChild(lapTime);
    lapCount++;
}

function clearLaps() {
    document.querySelector(".lap-list").innerHTML = "";
}

function clearLapTime() {
    lapContainer.innerHTML = ""; // Clear lap time container
}
