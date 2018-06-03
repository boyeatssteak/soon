let now = new Date();
let expire = new Date(Date.UTC(2018, 5, 28, 4, 59, 23));
// let expire = new Date('June 02, 2018 23:45:30 GMT -0700');
let remaining = Math.floor((expire - now) / 1000);
let daysElement = document.getElementById("dispDays");
let hoursElement = document.getElementById("dispHours");
let minutesElement = document.getElementById("dispMinutes");
let secondsElement = document.getElementById("dispSeconds");

function timerUpdate(duration) {
  let days = Math.floor(duration / 60 / 60 / 24);
  let hours = Math.floor(duration / 60 / 60 % 24);
  let minutes = Math.floor(duration / 60 % 60);
  let seconds = Math.floor(duration % 60);
  let dispDays;
  let dispHours;
  let dispMinutes;
  let dispSeconds;
  if(days < 10) { dispDays = "0" + days; } else { dispDays = days; };
  if(hours < 10) { dispHours = "0" + hours; } else { dispHours = hours; };
  if(minutes < 10) { dispMinutes = "0" + minutes; } else { dispMinutes = minutes; };
  if(seconds < 10) { dispSeconds = "0" + seconds; } else { dispSeconds = seconds; };
  daysElement.innerHTML = dispDays;
  hoursElement.innerHTML = dispHours;
  minutesElement.innerHTML = dispMinutes;
  secondsElement.innerHTML = dispSeconds;
  remaining--;
}
function arrived() {
  clearInterval(on);
  document.getElementById("content").classList.toggle("switch");
  document.getElementById("arrived").classList.toggle("switch");
}
let on = setInterval(function(){
  if (remaining >= 0) {
    timerUpdate(remaining);
    // console.log(remaining);
  } else {
    arrived();
  }
}, 1000);
// let logElement = document.getElementById("log");
// function log(message) {
//   let line = document.createElement("div");
//   line.innerHTML = "LOG: " + message;
//   logElement.appendChild(line);
// }
// log(now);
// log(expire);
// log(remaining);
// let expire2 = new Date(Date.UTC(2018, 5, 28, 4, 59, 23));
// log(expire2);
