const main = document.querySelector('main');
const countdownSection = document.querySelector('#countdown');
const stopwatchSection = document.querySelector('#stopwatch');
const pomodoroSection = document.querySelector('#pomodoro');
const counterSpan = document.querySelector('#counter-span');
const countdownSpan = document.querySelector('#countdown-span');
const pomodoroSpan = document.querySelector('#pomodoro-span');
let startButton = document.querySelector('#start');
let pauseButton = document.querySelector('#pause');
let stopButton = document.querySelector('#stop');
//Select values
let timerMinutes;
let timerSeconds;
//Total time for countdown
let totalTime;

let timeInterval;
let seconds = 0;
let minutes = 0;

//Stopwatch
function counter() {
  stop();
  startButton = document.querySelector('#start');
  pauseButton = document.querySelector('#pause');
  stopButton = document.querySelector('#stop');
  countdownSection.style.display = 'none';
  stopwatchSection.style.display = 'flex';
  pomodoroSection.style.display = 'none';
}
function startWatch() {
  start();
  timeInterval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    counterSpan.textContent = formatValue(minutes, seconds);
  }, 1000);
}

//Countdown
function countDown() {
  stop();
  countdownSection.style.display = 'flex';
  stopwatchSection.style.display = 'none';
  pomodoroSection.style.display = 'none';
  timerMinutes = document.querySelector('#minutes');
  timerSeconds = document.querySelector('#seconds');
  startButton = document.querySelector('#start2');
  pauseButton = document.querySelector('#pause2');
  stopButton = document.querySelector('#stop2');
}
function startCountdown() {
  start();
  if (!minutes && !seconds) {
    minutes = parseInt(timerMinutes.value);
    seconds = parseInt(timerSeconds.value);
    totalTime = minutes * 60 + seconds;
    emptyClock(minutes, seconds, totalTime);
  }
  countdownSpan.textContent = formatValue(minutes, seconds);

  if (minutes === 0 && seconds === 0) {
    console.log("Time's up");
    stop();
  } else {
    decrement(countdownSpan, 'countdown');
  }
}

//Pomodoro
function pomodoro() {
  stop();
  countdownSection.style.display = 'none';
  stopwatchSection.style.display = 'none';
  pomodoroSection.style.display = 'flex';
  startButton = document.querySelector('#start3');
  pauseButton = document.querySelector('#pause3');
  stopButton = document.querySelector('#stop3');
  minutes = 25;
  seconds = 0;
  totalTime = 25 * 60;
}

function startPomodoro() {
  start();
  emptyClock(minutes, seconds, totalTime, 'pomodoro');
  decrement(pomodoroSpan, 'pomodoro');
}

function emptyClock(minutes, seconds, totalTime, opt) {
  const currentTime = minutes * 60 + seconds;
  const degrees = 179 * (currentTime / totalTime);
  let fill1 = document.querySelector('#fill1');
  let fill2 = document.querySelector('#fill2');
  let full = document.querySelector('.full');

  if (opt === 'pomodoro') {
    fill1 = document.querySelector('#fill3');
    fill2 = document.querySelector('#fill4');
    full = document.querySelector('.full2');
  }
  fill1.style.transform = `rotate(${degrees}deg)`;
  fill2.style.transform = `rotate(${degrees}deg)`;
  full.style.transform = `rotate(${degrees}deg)`;
}
//General functions

function start() {
  startButton.style.display = 'none';
  pauseButton.style.display = 'flex';
  stopButton.style.display = 'flex';
}

function pause() {
  clearInterval(timeInterval);
  startButton.style.display = 'flex';
  pauseButton.style.display = 'none';
  stopButton.style.display = 'flex';
}

function stop(opt) {
  clearInterval(timeInterval);
  seconds = 0;
  minutes = 0;
  counterSpan.textContent = '00:00';
  countdownSpan.textContent = '00:00';
  pomodoroSpan.textContent = '25:00';
  startButton.style.display = 'flex';
  pauseButton.style.display = 'none';
  stopButton.style.display = 'none';

  if (opt === 'countdown') {
    emptyClock(0, 0, 1);
    playAlarm();
  }
  if (opt === 'pomodoro') {
    minutes = 25;
    seconds = 0;
    playAlarm();
  } else if (opt === 'pom') {
    minutes = 25;
    seconds = 0;
  }
}
function playAlarm() {
  const audio = document.querySelector('#audio');
  audio.play();
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 3500);
}
function formatValue(minutes, seconds) {
  formatedSeconds = `0${seconds}`.slice(-2);
  formatedMinutes = `0${minutes}`.slice(-2);
  return `${formatedMinutes}:${formatedSeconds}`;
}

function decrement(span, opt) {
  timeInterval = setInterval(() => {
    seconds--;
    if (seconds === -1) {
      seconds = 59;
      minutes--;
      if (minutes === -1) {
        minutes = 0;
      }
    }
    emptyClock(minutes, seconds, totalTime, opt);
    if (minutes === 0 && seconds === 0) {
      stop(opt);
      console.log("Time's up");
    }
    span.textContent = formatValue(minutes, seconds);
  }, 1000);
}
