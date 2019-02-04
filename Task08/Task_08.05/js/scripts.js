/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/

const images = document.querySelector(".images");
images.addEventListener("click", handler);
function handler({target}){
  if(target.nodeName !== "IMG") return;
    alert(target.src);
};