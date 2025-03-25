let time = 1500, interval, running = false;
const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

const updateTimer = () => {
    let min = Math.floor(time / 60), sec = time % 60;
    timerEl.textContent = `${min}:${sec < 10 ? "0" + sec : sec}`;
};

const startTimer = () => {
    if (!running) {
        running = true;
        interval = setInterval(() => {
            if (time > 0) {
                time--;
                updateTimer();
            } else {
                clearInterval(interval);
                alert("Time's up! Break time");
            }
        }, 1000);
    }
};

const pauseTimer = () => {
    clearInterval(interval);
    running = false;
};

const resetTimer = () => {
    clearInterval(interval);
    running = false;
    time = 1500;
    updateTimer();
};

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
updateTimer();
