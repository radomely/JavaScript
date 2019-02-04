/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/
const form = document.querySelector('.question-form');
form.addEventListener("submit",onSubmit);
function onSubmit(event){
  event.preventDefault();
  document.querySelector(".result").textContent = "Result: " + Array.from(form.querySelectorAll("input")).find(el=>el.checked).value;
}