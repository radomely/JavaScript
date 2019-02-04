/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/
const input = document.querySelector('.input'); 
const message = document.querySelector('.message');
const inputValue = document.querySelector('.input-value'); 

input.addEventListener('focus', inFocus);
function inFocus(){
  message.innerText = "Input is in focus!";
};
input.addEventListener('input', inputTyping);
function inputTyping({target}){
  inputValue.innerText = `Current input value: ${target.value}`;
};