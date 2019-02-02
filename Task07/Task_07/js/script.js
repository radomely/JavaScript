/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/

const root = document.querySelector("#root");

function createBoxes(num){
  const result = document.createElement("div");
  result.classList.add("result");
  for(let i=0;i<num;i++){
    let div = document.createElement("div");
    div.style.backgroundColor = "#" + Math.floor(Math.random() * 16777216).toString(16);
    div.style.width = 30+(i*10) + "px";
    div.style.height = 30+(i*10) + "px";
    result.append(div);
  }
  root.append(result);
}
createBoxes(20);