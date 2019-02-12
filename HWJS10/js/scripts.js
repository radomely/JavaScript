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

const searchInput = document.querySelector(".search-input");
const usersTable = document.querySelector(".users-table");
const searchForm = document.querySelector(".search-form");
const addNewUserButton = document.querySelector(".js-add-new-user-button");

searchForm.addEventListener("submit", submitHandler); 

/*
* Логика работы кнопки Search
*/
function submitHandler (event) {
  event.preventDefault();
  if (searchInput.value === "") {
    getAllUsers(event);
  } else {
    getUserById(searchInput.value);
  }
}
/*
* функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
*/
function getAllUsers(event) {
  return fetch("https://test-users-api.herokuapp.com/users/")
        .then(response => {
          if (response.ok) return response.json();
          throw new Error("Error in fetch");
        })
        .then(data => usersTableHTML(data))
        .catch(err => console.log(err)); 
}
function usersTableHTML(data) {
  console.log(data);
  const trHead = document.createElement("tr");
    trHead.innerHTML = `<td>Id</td><td>Name</td><td>Age</td>`;
    usersTable.append(trHead);
  for(el of data["data"]){
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${el.id}</td><td>${el.name}</td><td>${el.age}</td><td><button class="js-update-user-button">updated user</button><button class="js-delete-user-button">remove user</button></td></tr>`;
    usersTable.append(tr);
  }
}
/*
* функция getUserById(id) - должна вернуть пользователя с переданным id.
*/
function getUserById(id){
  console.log(`https://test-users-api.herokuapp.com/users/${id}`);
  return fetch(`https://test-users-api.herokuapp.com/users/${id}`)
        .then(response => {
          if(response.ok) return response.json();
          throw new Error("Error in fetch")
        })
        .then(data => userTableHTML(data))
        .catch(err=> console.log(err));
}
function userTableHTML(data) {
  console.log(data);
  const trHead = document.createElement("tr");
    trHead.innerHTML = `<td>Id</td><td>Name</td><td>Age</td>`;
    usersTable.append(trHead);
  // for(el of Array.from(data["data"])){
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${data.data.id}</td><td>${data.data.name}</td><td>${data.data.age}</td><td><button class="js-update-user-button">update user</button><button class="js-delete-user-button">remove user</button></td></tr>`;
    usersTable.append(tr);
  // }
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
  .then(response => {
    if (response.ok) return response.json();
    throw new Error("Error");
  })
  .then(data => userAddTableHTML(data))
  .catch(err => console.log(err));
}
addNewUserButton.addEventListener("click", addNewUserButtonHandler);

function addNewUserButtonHandler ({target}){
  console.log(event);
  console.log(target.parentElement.parentElement.children[1].children[0].value + " " + target.parentElement.parentElement.children[2].children[0].value)
  addUser(target.parentElement.parentElement.children[1].children[0].value, target.parentElement.parentElement.children[2].children[0].value);
  target.parentElement.parentElement.children[1].children[0].value = "";
  target.parentElement.parentElement.children[2].children[0].value = "";
}
function userAddTableHTML(data) {
  console.log(data);
  const trHead = document.createElement("tr");
    trHead.innerHTML = `<td>Id</td><td>Name</td><td>Age</td>`;
    usersTable.append(trHead);
  // for(el of Array.from(data["data"])){
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${data.data._id}</td><td>${data.data.name}</td><td>${data.data.age}</td><td><button class="js-update-user-button">update user</button><button class="js-delete-user-button">remove user</button></td></tr>`;
    usersTable.append(tr);
  // }
}


 
usersTable.addEventListener("click", tableButtonHandler);
function tableButtonHandler ({target}) {
  console.log(target);
  if(target.classList.contains("js-delete-user-button")){
    const ID = target.parentElement.parentElement.children[0].textContent;
    removeUser(ID);
    target.parentElement.parentElement.remove();
  }
  if(target.classList.contains("js-update-user-button")){
    const tr = target.parentElement.parentNode;
    tr.innerHTML = `<td>${target.parentElement.parentElement.children[0].textContent}</td>
    <td><input class="js-update-name-input" type="text" placeholder="${target.parentElement.parentNode.children[1].textContent}"></td>
    <td><input class="js-update-age-input" type="text" placeholder="${target.parentElement.parentNode.children[2].textContent}"> </td>
    <td><button class="js-save-user-button">save user</button><button class="js-delete-user-button">remove user</button></td>`;
  }
  if(target.classList.contains("js-save-user-button")){
    let newName = target.parentElement.parentElement.children[1].children[0].value;
    if (newName === ""){
      newName = target.parentElement.parentElement.children[1].children[0].placeholder
    }
    let newAge = target.parentElement.parentElement.children[2].children[0].value;
    if (newAge === ""){
      newAge = target.parentElement.parentElement.children[2].children[0].placeholder;
    }
    console.log(target.parentElement.parentElement.children[1].children[0].value + " "+ target.parentElement.parentElement.children[2].children[0].value)
    const ID = target.parentElement.parentElement.children[0].textContent;
    const user = { name: newName, age: Number(newAge)};
    updateUser(ID, user);
  }
}
 /*
* функция removeUser(id) - должна удалять из БД юзера по указанному id.
*/
  function removeUser(id) {  
  return fetch(`https://test-users-api.herokuapp.com/users/${id}`,{method: 'DELETE'})
  .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error in fetch");
  })
  .then(data => data)
  .catch(err => console.log(err));
} 
     
/*
* функция updateUser(id, user) - должна обновлять данные пользователя по id. 
*/
function updateUser(id, user){
  fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then(response => {
    if (response.ok) return response.json();
    throw new Error("Error in fetch");
  })
  .then(data => console.log(data))
  .catch(err => console.log(err));
}