/* eslint no-console: 'off' */

// const today = Date.now();
// eslint-disable-next-line no-console
// console.log(`Everything is working!\n${today}\nYay! 😁🎉`);
import css from './timers.css';

const timerList = document.querySelectorAll('.time'); // our timer array
const timerArr = Array.from(timerList);

const timer = (sec, timerNum) => {

  const timerEl = document.querySelector(`#t${timerNum}`); // get our specific timer
  const timerSpan = document.querySelector(`#t${timerNum} span`); // get timer span
  const innerTimer = document.querySelector('#t5 .inner-timer');

  let secInt = sec;

  timerSpan.innerHTML = `${secInt}`;

  if (timerNum === 2) {
    timerEl.classList.add('transition');
    timerEl.style.transition = `background ${secInt}s`;
  }

  if (timerNum === 5) {
    innerTimer.style.transition = `top ${secInt}s`;
    innerTimer.classList.add('transition');
  }

  if (secInt > 0) {
    setTimeout(() => {

      timer(secInt - 1, timerNum);
    }, 1000); // one second intervals
  }
};

const timerListeningArr = timerArr.map((el) => {
  el.addEventListener('click', (e) => {
    const elId = e.currentTarget.id[1];
    const timerVal = el.querySelector(`span`); // get timer span

    if (timerVal.innerHTML < 1) {
      let newDur = Math.floor(Math.random() * 100);

      if (elId === 2) { // it seems to skip over this even when elId is 2...
        el.classList.remove('transition');
      }
      timer(newDur, elId);
    }
  });
  return el;
});

// Our global method give a duration and a timer # to start that timer
window.setTimer = (dur, el) => {
  return timer(dur, el);
};

// initial values for page load...
timer(60, 1);

setTimeout(() => {
  timer(24, 2);
},200);

setTimeout(() => {
  timer(40, 3);
},500);

setTimeout(() => {
  timer(55, 4);
},100);

setTimeout(() => {
  timer(45, 5);
},600);

setTimeout(() => {
  timer(10, 6);
},800);
