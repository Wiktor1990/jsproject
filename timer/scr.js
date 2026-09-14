let seconds = 0;
let timerId = null;

const display = document.getElementById("display");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");

const updateDisplay = () => {
  display.textContent = `${seconds} sec`;
};

startBtn.addEventListener("click", () => {
  if (timerId !== null) return;

  timerId = setInterval(() => {
    seconds++;
    updateDisplay();
  }, 1000);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timerId);

  timerId = null;
});
