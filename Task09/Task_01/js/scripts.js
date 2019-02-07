/*
  Дан массив цветов и кнопки "Start" и "Stop". Сделайте так, чтобы после
  нажатия кнопки "Start", каждую секунду body менял цвет фона на случайное 
  значение из массива. 

  При нажатии на кнопку "Stop", изменении цвета фона должно останавливаться.
  
  Учтите что на кнопку Start могно нажать бесконечное количество раз,
  сделайте так чтобы пока изменение темы запушено, нажатие на кнопку
  Start не имело эффекта.
*/

const colors = ['#FFFFFF', '#F44336', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
const body = document.querySelector('body');
const start = document.querySelector('.js-start');
const stop = document.querySelector('.js-stop');
let timerId = null;
let btnStartIsPressed = false;

function startDoing (){
    if(btnStartIsPressed) return;
    timerId = setInterval(()=>body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)], 1000); 
    btnStartIsPressed = true;
}

function stopDoing (){
    clearInterval(timerId);
    btnStartIsPressed = false;
};

start.addEventListener('click', startDoing);
stop.addEventListener('click', stopDoing); 
