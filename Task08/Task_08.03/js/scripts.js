// /*
//   Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
//   - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
//   - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
//   - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
//   - Привяжите вызовы методов и значение счетчика к раметке
// */


const btnSub = document.querySelector('button[data-action = "sub"]');
const btnAdd = document.querySelector('button[data-action = "add"]');
const result = document.querySelector('.value');

function update (value) {
  result.textContent = value;
}

class Counter{
  constructor(onChange) {
    this.value = 0;
    this.onChange = onChange;
    onChange(this.value);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this); 
  }

  increment() {
    this.value++;
    this.onChange(this.value)
  }

  decrement() {
    this.value--
    this.onChange(this.value)
  }
}

let counter =  new Counter(update);

btnSub.addEventListener("click", counter.decrement);
btnAdd.addEventListener("click", counter.increment);