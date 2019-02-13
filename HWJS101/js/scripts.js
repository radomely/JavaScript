/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/

const searchInput = document.querySelector(".js-search-input");
const usersTable = document.querySelector(".js-users-table");
const searchForm = document.querySelector(".js-search-form");
const headerOfTable = `<tr><th>ID</th><th class = "w200">NAME</th><th class = "w200">AGE</th><th></th></tr>`;
const addNewUserButton = document.querySelector(".js-add-new-user-button");

/*
* функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
*/
function getAllUsers() {
  return fetch("https://test-users-api.herokuapp.com/users/");
}
/*
* функция getUserById(id) - должна вернуть пользователя с переданным id.
*/
function getUserById(id){
  return fetch(`https://test-users-api.herokuapp.com/users/${id}`)
}
/*
* функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
*/
function addUser(name, age){
  return fetch("https://test-users-api.herokuapp.com/users", {
    method: 'POST',
    body: JSON.stringify({name: name, age: age}),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
}
/*
* функция removeUser(id) - должна удалять из БД юзера по указанному id.
*/
function removeUser(id) {  
  return fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
    method: 'DELETE'
  })
}  
/*
* функция updateUser(id, user) - должна обновлять данные пользователя по id. 
*/
function updateUser(id, user){
  return fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
}
/*
* функция usersTableHTML(data) - должна вывести в HTML текущий список всех пользователей в БД.
*/
function usersTableHTML(data) {
  usersTable.innerHTML = headerOfTable;
  for(el of data["data"]){
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${el.id}</td>
                    <td>${el.name}</td>
                    <td>${el.age}</td>
                    <td><button class="js-update-user-button">update user</button><button class="js-delete-user-button">remove user</button></td></tr>`;
    usersTable.append(tr);
  }
}
/*
* функция userTableHTML(data) - должна вывести в HTML пользователя с переданным id.
*/
function userTableHTML(data) {
  usersTable.innerHTML = headerOfTable;
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${data.data.id}</td>
                    <td>${data.data.name}</td>
                    <td>${data.data.age}</td>
                    <td><button class="js-update-user-button">update user</button><button class="js-delete-user-button">remove user</button></td></tr>`;
    usersTable.append(tr);
}
/*
* функция userAddTableHTML(data) - выводит в HTML записанного в БД юзера с полями name и age.
*/
function userAddTableHTML(data) {
  usersTable.innerHTML = headerOfTable;
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${data.data._id}</td>
                    <td>${data.data.name}</td>
                    <td>${data.data.age}</td>
                    <td><button class="js-update-user-button">update user</button><button class="js-delete-user-button">remove user</button></td></tr>`;
    usersTable.append(tr);
}
/*
* Логика работы кнопки Search
*/
function submitHandler (event) {
  event.preventDefault();
  if (searchInput.value === "") {
    getAllUsers()
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error in fetch");
    })
    .then(data => usersTableHTML(data))
    .catch(err => console.log(err)); 
  } else {
    getUserById(searchInput.value)
    .then(response => {
      if(response.ok) return response.json();
      throw new Error("Error in fetch")
    })
    .then(data => userTableHTML(data))
    .catch(err=> console.log(err));
  }
}
/*
* функция addNewUserButtonHandler ({target}) - Обработчик event, должна записывать в БД юзера с полями name и age.
*/
function addNewUserButtonHandler ({target}){
  const name = target.parentElement.parentElement.children[1].children[0].value;
  const age = target.parentElement.parentElement.children[2].children[0].value;
  if(name === "" || age === ""){
    alert("Перед добавлением нового пользователя необходимо ввести его имя и возраст")
    return;
  }
  addUser(name, age)
  .then(response => {
    if (response.ok) return response.json();
    throw new Error("Error in fetch");
  })
  .then(data => userAddTableHTML(data))
  .catch(err => console.log(err));
  target.parentElement.parentElement.children[1].children[0].value = "";
  target.parentElement.parentElement.children[2].children[0].value = "";
}
/*
* tableButtonHandler ({target}) - функция для обработки нажатий кнопок внутри таблицы "remove user" "update user" "save user"
*/
function tableButtonsHandler ({target}) {
  const tr = target.parentElement.parentElement;
  if(target.classList.contains("js-delete-user-button")){ // Обработка кнопки "remove user" Удаление пользователя из таблицы и из базы.
    const ID = target.parentElement.parentElement.children[0].textContent;
    removeUser(ID)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error in fetch");
    })
    .then(data => data)
    .catch(err => console.log(err));
    tr.remove();
  }
  if(target.classList.contains("js-update-user-button")){ // Обработка кнопки "update user" Редактирование существующего пользователя в таблице
    tr.innerHTML = `<td>${target.parentElement.parentElement.children[0].textContent}</td>
    <td><input class="js-update-name-input" type="text" placeholder="${target.parentElement.parentNode.children[1].textContent}"></td>
    <td><input class="js-update-age-input" type="text" placeholder="${target.parentElement.parentNode.children[2].textContent}"> </td>
    <td><button class="js-save-user-button">save user</button><button class="js-delete-user-button">remove user</button></td>`;
  }
  if(target.classList.contains("js-save-user-button")){ // Обработка кнопки "save user" внесение сделанных изменений в выбранном пользователе в базу данных
    let newName = target.parentElement.parentElement.children[1].children[0].value;
    if (newName === ""){
      newName = target.parentElement.parentElement.children[1].children[0].placeholder
    }
    let newAge = target.parentElement.parentElement.children[2].children[0].value;
    if (newAge === ""){
      newAge = target.parentElement.parentElement.children[2].children[0].placeholder;
    }
    const ID = target.parentElement.parentElement.children[0].textContent;
    const user = { name: newName, age: Number(newAge)};
    updateUser(ID, user)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error in fetch");
    })
    .then((data)=> {tr.innerHTML = `<td>${data.data.id}</td>
                                    <td>${data.data.name}</td>
                                    <td>${data.data.age}</td>
                                    <td><button class="js-update-user-button">update user</button><button class="js-delete-user-button">remove user</button></td>`})
    .catch(err => console.log(err));
  }
}
searchForm.addEventListener("submit", submitHandler);
addNewUserButton.addEventListener("click", addNewUserButtonHandler);
usersTable.addEventListener("click", tableButtonsHandler);