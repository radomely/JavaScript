/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.------------------
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Выполните домашнее задание используя класс с полями и методами.
  
  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет 
  динамически создана вся разметка для секундомера.
  
  Должна быть возможность создать сколько угодно экземпляров секундоментов 
  на странице и все они будут работать независимо.
  
  К примеру:
  
  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);
  
  Где parent* это существующий DOM-узел. 
*/
const time = document.querySelector(".js-time");
const startBtn = document.querySelector(".js-start");
const resetBtn = document.querySelector(".js-reset");
const lapBtn = document.querySelector(".js-take-lap");
const lapUl = document.querySelector(".js-laps");

const timer = {
  startTime: null,
  pauseTime: null,
  id: null,
  lapArr: []
};

/*
* Вспомогательные функции
*/
function buttonHandler (event){
  if (timer.id !== null) {
    pause(event);
  } else if (timer.pauseTime !== null){
    goOn(event);
  } else {
    startTimer(event);
  }
}
function startTimer (event){
  console.log("Start");
  timer.startTime = Date.now();
  timer.id = setInterval(callback, 100);
  event.target.textContent = "Pause";
  event.target.style.backgroundColor = "#0000FF";
  // setActiveBtn(target);
  resetBtn.addEventListener("click", resetTimer);
  lapBtn.addEventListener("click", lapTimer);
  event.target.parentElement.children[2].style.backgroundColor = "#FFFF00";
  event.target.parentElement.children[2].style.color = "#FFFFFF";
  event.target.parentElement.children[3].style.backgroundColor = "#FF0000";
}
function callback (){
  let timeNow = Date.now();
  deltaTime = timeNow - timer.startTime;
  updateTime(time, deltaTime);
}
function resetTimer (event){
  console.log("Reset");
  clearInterval(timer.id);
  timer.id = null;
  timer.startTime = null;
  timer.pauseTime = null;
  timer.lapArr = [];
  lapUl.textContent = "";
  // setActiveBtn(target);
  updateTime(time, 0);
  // console.log(event);target.parentElement.children[1].textContent
  event.target.parentElement.children[1].textContent = "Start";
  event.target.parentElement.children[1].style.backgroundColor = "#00FF00";
  event.target.style.backgroundColor = "#FF0000";
  resetBtn.removeEventListener("click", resetTimer);
  lapBtn.removeEventListener("click", lapTimer);
}
function pause (event){
  console.log("Pause");
  clearInterval(timer.id);
  timer.id = null;
  timer.pauseTime = Date.now();;
  event.target.textContent = "Continue";
  event.target.style.backgroundColor = "#00ff00";
}
function goOn(event){
  console.log("GoOn");
  let timeNow = Date.now();
  timer.startTime = timer.startTime + timeNow - timer.pauseTime;
  timer.id = setInterval(callback, 100);
  event.target.textContent = "Pause";
  event.target.style.backgroundColor = "#0000FF";
  timer.pauseTime = null;
}
function lapTimer (){
  console.log("Lap");
  const li = document.createElement("li");
  li.textContent = getFormattedTime(timer.pauseTime===null ? Date.now() - timer.startTime : timer.pauseTime - timer.startTime);
  lapUl.append(li);
}
/*
* Обновляет поле счетчика новым значением при вызове
* аргумент time это кол-во миллисекунд
*/
function updateTime(elem, time) {
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
function setActiveBtn(event) {
  if(event.target.classList.contains('active')) {
    return;
  }
  
  startBtn.classList.remove('active');
  stopBtn.classList.remove('active');
  
  event.target.classList.add('active');
}

startBtn.addEventListener("click", buttonHandler);