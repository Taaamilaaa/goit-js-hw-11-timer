const refs = {
  sec: document.querySelector('[data-value="secs"]'),
  min: document.querySelector('[data-value="mins"]'),
  hour: document.querySelector('[data-value="hours"]'),
  day: document.querySelector('[data-value="days"]'),
  startBtn: document.querySelector('.start'),
  stopBtn: document.querySelector('.stop'),
  
};


const finalTime = new Date('Aug 17, 2021').getTime();


let id = null;

refs.startBtn.addEventListener('click', timerStart)
refs.stopBtn.addEventListener('click', () => clearInterval(id));


let currentTime = null;
let time = null;
let days = null;
let hours = null;
let mins = null;
let secs = null;

function timerStart() {
  id = setInterval(timer, 1000);
}

function timer() {
  currentTime = Date.now();

  time = finalTime - currentTime;

if (time < 0) {
  clearInterval(id)
  return
  }
  days = Math.floor(time / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
  hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
  mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
  secs = Math.floor((time % (1000 * 60)) / 1000).toString().padStart(2, '0');

  refs.sec.textContent = secs;
  refs.min.textContent = mins;
  refs.hour.textContent = hours;
  refs.day.textContent = days;
}




// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this.selector = selector;
//     this.targetDate = targetDate;
//   }
//   getRefs() {

//     const container = document.querySelector(this.selector);
//     const days = container.querySelector('[data-value="days"]');
//     const hours = container.querySelector('[data-value="hours"]');
//     const minutes = container.querySelector('[data-value="mins"]');
//     const seconds = container.querySelector('[data-value="secs"]');
//     const startBtn = container.querySelector('.start');
//     const stopBtn = container.querySelector('.stop');
//     this.interval = null;
// return {startBtn, stopBtn, container, days, hours, minutes, seconds}
//   }
//   updateTimer({container, days, hours, minutes, seconds}) {
//     const time = this.targetDate - Date.now();

//     if (time < 0) {
//       clearInterval(this.interval);

//     container.innerHTML = "<h1>This is over</h1>"
//       return
//     }
//     days.textContent =  Math.floor(time / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
//     hours.textContent =Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
//     minutes.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
//     seconds.textContent = Math.floor((time % (1000 * 60)) / 1000).toString().padStart(2, '0');

// }
//   start = () => {
//     setInterval(() => {
//        this.updateTimer(this.getRefs()), 1000
//     })
//     console.log('start');
//   }
//   stop = () => {
//     clearInterval(this.interval);

//     console.log('stop');
//   }
// //   addListeners ({startBtn, stopBtn}) {
// // console.log(startBtn, stopBtn);
// //     startBtn.addEventListener('click', this.start);
// //     stopBtn.addEventListener('click', this.stop);
// //   }

// };

// const timer = new CountdownTimer({
//  selector: '#timer-1',
//  targetDate: new Date('Aug 15, 2021 15:09:00'),
// })

//   timer.start();
