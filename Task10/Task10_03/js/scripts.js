/*
  Документация API: https://jsonplaceholder.typicode.com/

  Просмотр всех пользователей: https://jsonplaceholder.typicode.com/users/ 

  Написать функцию fetchUsers, которая посылает get запрос.
  Результатом fetch будет массив объектов.
  
  В таблицу .user-table добавить строки для каждого пользователя.
  Каждая строка состоит из 5-ти столбцов указанного формата.
  Кол-во строк будет такое как и кол-во объектов пользователей в ответе.
  
    Имя | Почта | Город | Вебсайт | Компания
    Имя | Почта | Город | Вебсайт | Компания
    и так далее для каждого пользователя...
*/

const form = document.querySelector(".search-form");
const userTable = document.querySelector(".users-table");
form.addEventListener("submit", fetchUsers);

/*
  @param {FormEvent} evt
*/
function fetchUsers(evt) {
  evt.preventDefault();
  fetch("https://jsonplaceholder.typicode.com/users/")
    .then(response => response.json())
    .then(data => dataHandler(data))
    .catch(err => console.log(err));
}

function dataHandler(data) {
  console.log(data)
  for(el of data) {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${el.name}</td>
      <td>${el.email}</td>
      <td>${el.address.city}</td>
      <td>${el.website}</td>
      <td>${el.company.name}</td>`;
    userTable.append(row);
  }
}