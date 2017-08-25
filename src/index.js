/* eslint no-console: 'off' */

import css from './timers.css';

const timer = (sec, timerNum) => {

  const timerArr = ['','','','','',''];
  const timerEl = document.querySelector(`#t${timerNum}`); // get our specific timer
  const timerSpan = document.querySelector(`#t${timerNum} span`); // get timer span
  const innerTimer = document.querySelector('#t5 .inner-timer'); // inner div for animation

const timerObj = timerArr.map((timer, indx) => {

  timer.el = document.createElement('div');
  timer.el.innerHTML =  `<span>${timer.duration}</span>`;
  timer.id = indx + 1;

  return timer;
});
  let secInt = sec;

  timerSpan.innerHTML = `${secInt}`;

  if (13 % secInt === 0 && timerNum != 7 || timerNum != 2) {
    timerEl.classList.toggle('blink');
  }

  if (timerNum === 2) {
    timerEl.style.transition = `background ${secInt}s`;
    timerEl.classList.add('transition');
  }

  if (timerNum === 5) {
    innerTimer.style.transition = `top ${secInt}s`;
    innerTimer.classList.add('transition');
  }

  if (secInt > 0) {
    const resetId = setTimeout(() => {
      timer(secInt - 1, timerNum);
     }, 1000); // one second intervals
     clearArr[timerNum - 1] = resetId;
   }
};

const timerListeningArr = timerArr.map((el) => {
  el.addEventListener('click', (e) => {
    const elId = e.currentTarget.id[1];
    const timerVal = el.querySelector(`span`); // get timer span
    el.classList.remove('transition');
    el.classList.add('reset');

    if (timerVal.innerHTML < 1) {
      let newDur = Math.floor(Math.random() * 100);
      timer(newDur, elId);
    }
  });
  return el;
});

// Our global method give a duration and a timer # to start that timer
window.setTimer = (dur, el) => {
  clearTimeout(clearArr[el - 1]); // clear existing timeout before starting a new one on same element
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
