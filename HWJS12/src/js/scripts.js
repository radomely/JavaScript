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
// form
const form = document.querySelector(".add-form");
const input = document.querySelector(".add-input");
const add = document.querySelector(".add-button");
// list & item
const list = document.querySelector(".links-list");
const key = "5c699234ac7d511f26f3efee36d3d5d140d9a43ae8c00";

// add item
form.addEventListener("submit", e => {
  e.preventDefault();
  if (input.value === "" || input.value === "http://")
    return alert("Input correct URL");
  let arrLinks = [];
  if(localStorage.getItem("links")) arrLinks = [...JSON.parse(localStorage.getItem("links"))];
  if (arrLinks.includes(input.value)) return alert("This links already exist");

  const URL = `http://api.linkpreview.net/?key=${key}&q=${input.value}`;
  fetch(URL)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) return alert("Cant find such URL");
      arrLinks.unshift(data);
      localStorage.setItem("links", JSON.stringify(arrLinks));
      list.innerHTML += createLi({ ...data });
    })
    .catch(err => console.error(err));

  form.reset();
});

// delete item
list.addEventListener("click", e => {
  if (e.target.nodeName !== "SPAN") return;
  const arrLinks = [...JSON.parse(localStorage.getItem("links"))];
  arrLinks.splice(
    arrLinks.indexOf(
      e.target.closest("li").querySelector(".content").textContent
    ),
    1
  );
  e.target.closest("li").remove();
  localStorage.setItem("links", JSON.stringify(arrLinks));
});

// validation
form.addEventListener("input", e => {
  const reg = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

  if (reg.test(input.value)) {
    input.classList.add("valide");
    input.classList.remove("invalide");
    add.removeAttribute("disabled", false);
    add.style.backgroundColor = "#05af00";
  } else {
    input.classList.remove("valide");
    input.classList.add("invalide");
    add.setAttribute("disabled", true);
    add.style.backgroundColor = "red";
  }
});

// default show
window.addEventListener("DOMContentLoaded", () => { 
  if(localStorage.getItem("links")) JSON.parse(localStorage.getItem("links")).map(elem => (list.innerHTML += createLi(elem)));
});

// html element
const createLi = ({ url, description, image, title }) =>
  `<li class="links-list__item">
                                <img class="link-preview" src="${image}" alt="No content">
                                <div class="link-info">
                                  <a class="content" href="${url}">${title}</a>
                                  <p class="link-descr">${description}</p>
                                </div>
                                <span class="remove">+</span>  
                              </li>`;