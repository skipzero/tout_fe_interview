// const today = Date.now();
// eslint-disable-next-line no-console
// console.log(`Everything is working!\n${today}\nYay! 😁🎉`);

const timerList = document.querySelectorAll('.time'); // our timer array
const timerArr = Array.from(timerList);

console.log(timerArr);

const timer = (sec, timerNum) => {
  let timerEl = document.querySelector(`#t${timerNum}`); // get our specific timer
  let secInt = sec;
  timerEl.innerHTML = secInt;
  console.log(secInt);

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
    console.log(e.target.id);
    console.log(e);
  });
  return el;
});

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
