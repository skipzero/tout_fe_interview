/* eslint no-console: 'off' */

// const today = Date.now();
// eslint-disable-next-line no-console
// console.log(`Everything is working!\n${today}\nYay! 😁🎉`);

const timerList = document.querySelectorAll('.time'); // our timer array
const timerArr = Array.from(timerList);

const timer = (sec, timerNum) => {
  let timerEl = document.querySelector(`#t${timerNum}`); // get our specific timer
  let secInt = sec;

  if (timerNum === 2) {
    timerEl.style.transitionDuration = secInt;
    timerEl.classList.add('transition');
  }

  timerEl.innerHTML = secInt;
  console.log(timerEl.innerHTML);

  const ourTimer = setTimeout(() => {
    timer(secInt, timerNum);
  }, 1000); // one second intervals

  if (secInt < 1) {
    clearTimeout(ourTimer);
    return;
  }

  // const handleClick = (e) => {
  //   console.log(this);
  //   console.log(e);
  // };
  //
  secInt = secInt - 1;
};



const timerListeningArr = timerArr.map((el, index) => {
  el.addEventListener('click', (e) => {
    const elId = e.target.id[1];
    console.log(`\n${e.target.id[1]}\n`);
    if (el.innerHTML < 1) {
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
