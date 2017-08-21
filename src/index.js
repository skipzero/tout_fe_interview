// const today = Date.now();
// eslint-disable-next-line no-console
// console.log(`Everything is working!\n${today}\nYay! 😁🎉`);
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
  secInt = secInt - 1;
};

timer(60, 1);

setTimeout(() => {
  timer(24, 2);
},200);

setTimeout(() => {
  timer(60, 3);
},500);

setTimeout(() => {
  timer(80, 4);
},1000);

setTimeout(() => {
  timer(45, 5);
},600);

setTimeout(() => {
  timer(30, 6);
},100);
