const refs = {
  sec: document.querySelector('[data-value="secs"]'),
  min: document.querySelector('[data-value="mins"]'),
  hour: document.querySelector('[data-value="hours"]'),
  day: document.querySelector('[data-value="days"]'),
};

const finalTime = new Date('Aug 17, 2021').getTime();

let currentTime = null;
let time = null;
let days = null;
let hours = null;
let mins = null;
let secs = null;


function timer() {
  currentTime = Date.now();

  time = finalTime - currentTime;

  days = Math.floor(time / (1000 * 60 * 60 * 24));
  hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  secs = Math.floor((time % (1000 * 60)) / 1000);

  refs.sec.textContent = pad(secs);
  refs.min.textContent = pad(mins);
  refs.hour.textContent = pad(hours);
  refs.day.textContent = pad(days);
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function timerStart() {
  setInterval(timer, 1000);
}

timerStart();

// class CountdownTimer {
//   constructor() {
//     this.refs = {
//       sec: document.querySelector('[data-value="secs"]'),
//       min: document.querySelector('[data-value="mins"]'),
//       hour: document.querySelector('[data-value="hours"]'),
//       day: document.querySelector('[data-value="days"]'),
//       };
//     this.finalTime = null;
//     this.currentTime = null;

//     };
//     getFinalTime() {
//        return this.finalTime.getTime()
//     }

//     timer() {
//   this.currentTime = Date.now();

//   const time = this.getFinalTime() - this.currentTime;

//   const days = Math.floor(time / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//   const secs = Math.floor((time % (1000 * 60)) / 1000);

//   this.refs.sec.textContent = pad(secs);
//   this.refs.min.textContent = pad(mins);
//   this.refs.hour.textContent = pad(hours);
//   this.refs.day.textContent = pad(days);
//     };

//      pad(value) {
//          return String(value).padStart(2, '0');         
//     }
//     timerStart() {

//   return setInterval(timer, 1000);
//     };
// };




