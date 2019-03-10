/* 
  Напишите приложение для хранения url веб-страниц в виде карточек-закладок. 
  
  Реализуйте следующий функционал:
    - Используйте Gulp для сборки проекта, JS обработан транспайлером Babel, ресурсы оптимизированы
    
    - Для добавления новой закладки, в приложении есть форма с элементом input и кнопкой "Добавить"
    
    - В приложении есть список всех добавленных карточек-закладок, располагающийся под формой
    
    - Некоторые элементы интерфейса создаются динамически. Используйте шаблонизатор Handlebars для
      создания списка карточек. Форма уже есть в HTML при загрузке страницы.
      
    - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходят проверки:
        * на существование закладки с такой ссылкой в текущей коллекции закладок. Если такая закладка есть,
          всплывает диалоговое окно оповещающее пользователя о том, что такая закладка уже есть.
        * при условии валидной, еще не существующей в коллекции ссылки, карточка с такой ссылкой
          добавляется в коллекцию.
          
    - В интерфейсе, новые карточки добавляются наверх списка, а не вниз.
    
    - Каждая карточка-закладка содержит кнопку для удаления карточки из коллекции, при клике 
      на кнопку происходит удаление.
      
    - При повторном посещении страницы с одного и того же устройства и браузера, пользователь видит
      все карточки-закладки которые были во время последнего его посещения. Используйте localStorage
      
  🔔 Оформление интерфейса произвольное
*/

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
    - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходи проверка 
      на валидность введенной ссылки: если был введен невалидный url то должно всплывать 
      диалоговое окно, оповещающее пользователя о том, что это невалидный url. Используйте
      регулярные выражения для валидации url.
          
    - Каждая карточка содержит превью изображение и базовую информацию о странице по адресу закладки,
      для получения этой информации воспользуйтесь этим Rest API - https://www.linkpreview.net/
*/


"use strict";
const form = document.querySelector(".js-form");
const input = document.querySelector(".js-input");
const ul = document.querySelector(".js-card-bookmarks");
const source = document.querySelector('#template').innerHTML.trim();
const templateFunc = Handlebars.compile(source);


// При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходи проверка 
// на валидность введенной ссылки: если был введен невалидный url то должно всплывать 
// диалоговое окно, оповещающее пользователя о том, что это невалидный url. Используйте
// регулярные выражения для валидации url.
form.addEventListener("submit", e => {
  e.preventDefault();
  const reg = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;//для валидации url
  if (!reg.test('http://' + input.value)) {
    alert("это невалидный url");
    return;
  }
  let arrLinks = [];
  if(localStorage.getItem("links")) {
    arrLinks = [...JSON.parse(localStorage.getItem("links"))];
    for(let el of arrLinks){
      if (el.url.includes(input.value)){
        alert("Такая закладка уже есть");
        return 
      }
    }
  }
  fetch(`http://api.linkpreview.net/?key=5c699234ac7d511f26f3efee36d3d5d140d9a43ae8c00&q=http://${input.value}`)
    .then(response => response.json())
    .then(data => {
      if (data.error){
        alert("Ссылка не найдена");
        return;
      }
      arrLinks.unshift(data);
      localStorage.setItem("links", JSON.stringify(arrLinks));
      ul.innerHTML = templateFunc(data) + ul.innerHTML;
    })
    .catch(err => console.error(err));
  form.reset();
});

// Каждая карточка-закладка содержит кнопку для удаления карточки из коллекции, при клике 
// на кнопку происходит удаление.
ul.addEventListener("click", ({target}) => {
  if(target.className !== "js-button-delete-card"){
    return;
  }
  let arrLinks = [...JSON.parse(localStorage.getItem("links"))];
  arrLinks = arrLinks.filter(el => el.title !== target.parentNode.childNodes[3].childNodes[1].textContent);
  target.parentNode.remove();
  localStorage.setItem("links", JSON.stringify(arrLinks));
});

// При повторном посещении страницы с одного и того же устройства и браузера, пользователь видит
// все карточки-закладки которые были во время последнего его посещения. Используйте localStorage
window.addEventListener("DOMContentLoaded", () => { 
  if(localStorage.getItem("links")){
    JSON.parse(localStorage.getItem("links")).map(el => (ul.innerHTML += templateFunc(el)));
  } 
});