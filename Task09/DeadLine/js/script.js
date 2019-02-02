const deadline = new Date(2019, 2, 31, 12, 0, 0);
let secText = document.querySelector('.seconds');
let minText = document.querySelector('.minutes');
let hoursText = document.querySelector('.hours');
let daysText = document.querySelector('.days');

function timer () {
let today = Date.now();
let delta = deadline - today;
// console.log(delta);

let sec = Math.floor(delta /1000 % 60);
let min = Math.floor(delta / 60000 % 60);
let hours = Math.floor(delta / 3600000 % 24);
let days = Math.floor(delta / 86400000);
// console.log(sec);
// console.log(min);
// console.log(hours);
// console.log(days);

secText.textContent = sec >= 10 ? sec : `0${sec}`;
minText.textContent = min >=10 ? min : `0${min}`;
hoursText.textContent = hours >= 10 ? hours : `0${hours}`;
daysText.textContent = days >= 10 ? days : `0${days}`;
}


setInterval(timer,1000);