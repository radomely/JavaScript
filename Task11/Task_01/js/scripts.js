/*
  К pen уже подключен Handlebars.
  Используйте встроенные шаблоны и метод Handlebars.compile
  
  Создайте шаблон списка указаного во вкладке HTML.
  
  Отрендерите список в DOM по данным из массива listItems.
*/

const products = [
    { name: 'Apples', count: 50 },
    { name: 'Grapes', count: 44 },
    { name: 'Cheese', count: 128 },
    { name: 'Milk', count: 293 },
  ];

const source = document.querySelector("#template").innerHTML.trim();
let tempFunc = Handlebars.compile(source);
let mark = products.reduce((acc,el)=> acc + tempFunc(el),"");
let container = document.querySelector(".products");
container.innerHTML = mark;