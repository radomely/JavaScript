/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

let listArray = document.querySelector(".list");
listArray.firstElementChild.style.color = "rgb(255, 0, 0)";
listArray.lastElementChild.style.color = "#0000ff";