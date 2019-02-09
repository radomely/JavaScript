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
    значений времени.
    
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
class Stopwatch{
  constructor(parent){
    this.startTime = null;
    this.pauseTime = null;
    this.id = null;
    this.lapArr = [];
    this.root = document.createElement("div");
    this.root.classList.add("root");
    parent.append(this.root);
    this.root.innerHTML = `<div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
</div>
<ul class="laps js-laps"></ul>`;
    this.time = this.root.querySelector(".js-time");
    this.startBtn = this.root.querySelector(".js-start");
    this.resetBtn = this.root.querySelector(".js-reset");
    this.lapBtn = this.root.querySelector(".js-take-lap");
    this.lapUl = this.root.querySelector(".js-laps");
    this.buttonHandler = this.buttonHandler.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.callback = this.callback.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.pause = this.pause.bind(this);
    this.goOn = this.goOn.bind(this);
    this.lapTimer = this.lapTimer.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.getFormattedTime = this.getFormattedTime.bind(this);

    this.startBtn.addEventListener("click", this.buttonHandler);
  }
  /*
  * Логика работы кнопки Start
  */
  buttonHandler (event){
    console.log(this);
    if (this.id !== null) {
      this.pause(event);
    } else if (this.pauseTime !== null){
      this.goOn(event);
    } else {
      this.startTimer(event);
    }
  }
  /*
  *Запускает таймер, который считает время 
  *со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
  *новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
  */
  startTimer (event){
    this.startTime = Date.now();
    this.id = setInterval(this.callback, 100);
    this.resetBtn.addEventListener("click", this.resetTimer);
    this.lapBtn.addEventListener("click", this.lapTimer);
    event.target.textContent = "Pause";
    event.target.classList.add("pause-btn-active");
    event.target.parentElement.children[2].classList.add("lap-btn-active");
    event.target.parentElement.children[3].classList.add("reset-btn-active");
  }
  /*
  *Callback для setInterval Расчитывает текущее состояние таймера
  *и запускает метод обновления значений на экране
  */
  callback (){
    let timeNow = Date.now();
    this.deltaTime = timeNow - this.startTime;
    this.updateTime(this.time, this.deltaTime);
  }
  /*
  *Полностью сбрасывает работу таймера
  */
  resetTimer (event){
    clearInterval(this.id);
    this.id = null;
    this.startTime = null;
    this.pauseTime = null;
    this.lapArr = [];
    this.lapUl.textContent = "";
    this.resetBtn.removeEventListener("click", this.resetTimer);
    this.lapBtn.removeEventListener("click", this.lapTimer);
    this.updateTime(this.time, 0);
    event.target.parentElement.children[1].textContent = "Start";
    event.target.parentElement.children[1].classList.remove("pause-btn-active");
    event.target.parentElement.children[1].classList.remove("continue-btn-active");
    event.target.parentElement.children[2].classList.remove("lap-btn-active");
    event.target.classList.remove("reset-btn-active");
  }
  /*
  *Приостанавливает работу таймера
  */
  pause (event){
    clearInterval(this.id);
    this.id = null;
    this.pauseTime = Date.now();;
    event.target.textContent = "Continue";
    event.target.classList.remove("pause-btn-active");
    event.target.classList.add("continue-btn-active");
  }
  /*
  *Продолжает работу таймера с момента остановки
  */
  goOn(event){
    let timeNow = Date.now();
    this.startTime = this.startTime + timeNow - this.pauseTime;
    this.id = setInterval(this.callback, 100);
    this.pauseTime = null;
    event.target.textContent = "Pause";
    event.target.classList.remove("continue-btn-active")
    event.target.classList.add("pause-btn-active");
  }
  /*
  * Получает значение таймера на текущий момент, сохранаяет его в массив и выводит на экран.
  */
  lapTimer (){
    this.lapArr.push(this.getFormattedTime(this.pauseTime===null ? Date.now() - this.startTime : this.pauseTime - this.startTime));
    const li = document.createElement("li");
    li.textContent = this.lapArr[this.lapArr.length-1];
    this.lapUl.append(li);
  }
  /*
  * Обновляет поле счетчика новым значением при вызове
  * аргумент time это кол-во миллисекунд
  */
  updateTime(elem, time) {
    elem.textContent = this.getFormattedTime(time);
  }
  /*
  * Форматирует время выводимое на экран
  */
  getFormattedTime(time) {
    let date = new Date(time);
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let milliseconds = date.getMilliseconds();
    minutes = minutes>=10? minutes : "0" + minutes;
    seconds = seconds>=10? seconds : "0" + seconds;
    milliseconds = Math.floor(milliseconds/100);
    return (minutes + ":" + seconds + "." + milliseconds);
  }
}


new Stopwatch(document.querySelector(".parentA"));
new Stopwatch(document.querySelector(".parentB"));
new Stopwatch(document.querySelector(".parentC"));