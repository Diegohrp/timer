const main = document.querySelector('main');
let counterSpan = document.querySelector('#counter-span');
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
  main.innerHTML = `
  <section class="content">
    <div class="progress">
      <div class="mask full">
        <div id="fill1" class="fill"></div>
      </div>
      <div class="mask half">
        <div id="fill2" class="fill"></div>
      </div>
      <span class="inside" id="counter-span">00:00</span>
    </div>
    <div class="control-selects">
      <select id="minutes">
        <option value="00">00</option>
        <option value="01">01</option>
        <option value="2">02</option>
        <option value="3">03</option>
        <option value="4">04</option>
        <option value="5">05</option>
        <option value="6">06</option>
        <option value="7">07</option>
        <option value="8">08</option>
        <option value="9">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
        <option value="32">32</option>
        <option value="33">33</option>
        <option value="34">34</option>
        <option value="35">35</option>
        <option value="36">36</option>
        <option value="37">37</option>
        <option value="38">38</option>
        <option value="39">39</option>
        <option value="40">40</option>
        <option value="41">41</option>
        <option value="42">42</option>
        <option value="43">43</option>
        <option value="44">44</option>
        <option value="45">45</option>
        <option value="46">46</option>
        <option value="47">47</option>
        <option value="48">48</option>
        <option value="49">49</option>
        <option value="50">50</option>
        <option value="51">51</option>
        <option value="52">52</option>
        <option value="53">53</option>
        <option value="54">54</option>
        <option value="55">55</option>
        <option value="56">56</option>
        <option value="57">57</option>
        <option value="58">58</option>
        <option value="59">59</option>
      </select>
      <span>:</span>
      <select id="seconds">
        <option value="00">00</option>
        <option value="01">01</option>
        <option value="2">02</option>
        <option value="3">03</option>
        <option value="4">04</option>
        <option value="5">05</option>
        <option value="6">06</option>
        <option value="7">07</option>
        <option value="8">08</option>
        <option value="9">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
        <option value="32">32</option>
        <option value="33">33</option>
        <option value="34">34</option>
        <option value="35">35</option>
        <option value="36">36</option>
        <option value="37">37</option>
        <option value="38">38</option>
        <option value="39">39</option>
        <option value="40">40</option>
        <option value="41">41</option>
        <option value="42">42</option>
        <option value="43">43</option>
        <option value="44">44</option>
        <option value="45">45</option>
        <option value="46">46</option>
        <option value="47">47</option>
        <option value="48">48</option>
        <option value="49">49</option>
        <option value="50">50</option>
        <option value="51">51</option>
        <option value="52">52</option>
        <option value="53">53</option>
        <option value="54">54</option>
        <option value="55">55</option>
        <option value="56">56</option>
        <option value="57">57</option>
        <option value="58">58</option>
        <option value="59">59</option>
      </select>
    </div>
    <div class="control-buttons">
      <button id="start" class="main-button" onclick="startCountdown()">
        <i class="fa-solid fa-play"></i>
      </button>
      <button id="pause" class="main-button" onclick="pause()">
        <i class="fa-solid fa-pause"></i>
      </button>
      <button id="stop" class="main-button" onclick='stop("countdown")'>
        <i class="fa-solid fa-stop"></i>
      </button>
    </div>
  </section>
  `;
  timerMinutes = document.querySelector('#minutes');
  timerSeconds = document.querySelector('#seconds');
  counterSpan = document.querySelector('#counter-span');
  startButton = document.querySelector('#start');
  pauseButton = document.querySelector('#pause');
  stopButton = document.querySelector('#stop');
}
function startCountdown() {
  start();
  if (!minutes && !seconds) {
    minutes = parseInt(timerMinutes.value);
    seconds = parseInt(timerSeconds.value);
    totalTime = minutes * 60 + seconds;
    emptyClock(minutes, seconds, totalTime);
  }
  counterSpan.textContent = formatValue(minutes, seconds);

  if (minutes === 0 && seconds === 0) {
    console.log("Time's up");
    stop('countdown');
  } else {
    timeInterval = setInterval(() => {
      seconds--;
      if (seconds === -1) {
        seconds = 59;
        minutes--;
        if (minutes === -1) {
          minutes = 0;
        }
      }
      emptyClock(minutes, seconds, totalTime);
      if (minutes === 0 && seconds === 0) {
        stop('countdown');
        console.log("Time's up");
      }
      counterSpan.textContent = formatValue(minutes, seconds);
    }, 1000);
  }
}
function emptyClock(minutes, seconds, totalTime) {
  const currentTime = minutes * 60 + seconds;
  const degrees = 179 * (currentTime / totalTime);
  let fill1 = document.querySelector('#fill1');
  let fill2 = document.querySelector('#fill2');
  let full = document.querySelector('.full');
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
  startButton.style.display = 'flex';
  pauseButton.style.display = 'none';
  stopButton.style.display = 'none';
  if (opt === 'countdown') {
    emptyClock(0, 0, 1);
  }
}

function formatValue(minutes, seconds) {
  formatedSeconds = `0${seconds}`.slice(-2);
  formatedMinutes = `0${minutes}`.slice(-2);
  return `${formatedMinutes}:${formatedSeconds}`;
}
