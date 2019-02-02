/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/
let ulArray =  Array.from(document.querySelector(".categories").children);
ulArray.map(el=>console.log("Категория: " + el.firstChild.textContent.trim() + "\nКоличество вложенных li: " + el.children[0].children.length));