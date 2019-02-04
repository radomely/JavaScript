/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/
 
let inputList = document.querySelectorAll('.input-list input');

for(el of inputList){
el.addEventListener("blur", handler);
}
function handler({target}){
if(target.value.length === Number(target.dataset.length)){
  target.classList.add('valid');
  target.classList.remove('invalid');
  } else {
  target.classList.add('invalid');
  target.classList.remove('valid');
  }
};