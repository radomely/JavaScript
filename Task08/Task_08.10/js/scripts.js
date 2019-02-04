/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

const list = document.querySelector(".js-menu"); 
const linkList = Array.from(document.querySelectorAll(".js-menu a")); 

list.addEventListener("click", changeActiveItem);
function changeActiveItem (event) {
    event.preventDefault();
    if(event.target.nodeName != 'A') return; 
    linkList.map(elem => elem.classList.remove("active"));
    event.target.classList.add("active"); 
};