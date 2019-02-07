/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Используйте возможности объекта Date для работы со временем.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 3.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

const clockface = document.querySelector(".js-clockface");
const startBtn = document.querySelector(".js-timer-start");
const stopBtn = document.querySelector(".js-timer-stop");

const timer = {
  startTime: null,
  deltaTime: null,
  id: null
};

/*
* Вспомогательные функции
*/
function startTimer ({target}){
  if (timer.id !== null) return;
  timer.startTime = Date.now ();
  timer.id = setInterval(callback, 100);
  setActiveBtn(target);
}
function callback (){
  let timeNow = Date.now();
  timer.deltaTime = timeNow - timer.startTime;
  updateClockface(clockface, timer.deltaTime);
}
function stopTimer ({target}){
  if (timer.id === null) return;
  clearInterval(timer.id);
  timer.id = null;
  setActiveBtn(target);
}
/*
* Обновляет поле счетчика новым значением при вызове
* аргумент time это кол-во миллисекунд
*/
function updateClockface(elem, time) {
  elem.textContent = getFormattedTime(time);
}
/*
* Форматирует время выводимое на экран
*/
function getFormattedTime(time) {
  let date = new Date(time);
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let milliseconds = date.getMilliseconds();
  minutes = minutes>=10? minutes : "0" + minutes;
  seconds = seconds>=10? seconds : "0" + seconds;
  milliseconds = Math.floor(milliseconds/100);
  return (minutes + ":" + seconds + "." + milliseconds);
}
/*
* Подсветка активной кнопки
*/
function setActiveBtn(target) {
  if(target.classList.contains('active')) {
    return;
  }
  
  startBtn.classList.remove('active');
  stopBtn.classList.remove('active');
  
  target.classList.add('active');
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);