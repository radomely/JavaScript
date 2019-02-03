/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/

const button = document.querySelector("button");
button.addEventListener("click", handler);
function handler (){
  document.querySelector(".result").textContent = Array.from(document.querySelectorAll("input")).reduce((acc, el)=>acc+Number(el.value),0)
}