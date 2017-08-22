/* eslint no-console: 'off' */

// const today = Date.now();
// eslint-disable-next-line no-console
// console.log(`Everything is working!\n${today}\nYay! 😁🎉`);
import css from './timers.css';

const timerList = document.querySelectorAll('.time'); // our timer array
const timerArr = Array.from(timerList);

const timer = (sec, timerNum) => {
  let timerEl = document.querySelector(`#t${timerNum}`); // get our specific timer
  let secInt = sec;

  timerEl.innerHTML = `<span>${secInt}</span>`;

  if (timerNum === 2) {
    timerEl.style.transitionDuration = secInt;
    timerEl.classList.add('transition');
  }

  if (timerNum === 5) {
    timerEl.innerHTML += '<div class="inner-timer"></div>';
  }

  if (secInt > 0) {
    setTimeout(() => {
      console.log('SetTimeout...');
      console.log(secInt);

      timer(secInt - 1, timerNum);
    }, 1000); // one second intervals
  }
};

const timerListeningArr = timerArr.map((el) => {
  el.addEventListener('click', (e) => {
    const elId = e.target.id[1];

    if (el.innerHTML > 1) {
      if (elId === 2) {
        el.classList.remove('transition');
      }
      let newDur = Math.floor(Math.random() * 100);
      timer(newDur, elId);
    }
  });
  return el;
});

// Our global method give a duration and a timer # to start that timer
window.setTimer = (dur, el) => {
  return timer(dur, el);
};

// initial values for onPageLoad...
timer(60, 1);

setTimeout(() => {
  timer(24, 2);
},200);

setTimeout(() => {
  timer(40, 3);
},500);

setTimeout(() => {
  timer(55, 4);
},1000);

setTimeout(() => {
  timer(45, 5);
},600);

setTimeout(() => {
  timer(30, 6);
},100);
