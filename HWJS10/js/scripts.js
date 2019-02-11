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

const searchButton = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-input");
const usersTable = document.querySelector(".users-table");
const searchForm = document.querySelector(".search-form");


searchForm.addEventListener("submit", getAllUsers); 

function getAllUsers(event) {
  event.preventDefault();
  // if(searchInput.value === ""){
  return fetch("https://test-users-api.herokuapp.com/users/")
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error");
    })
    .then(data => usersTableHTML(data))
    .catch(err => console.log(err)); 
  }
// }
function usersTableHTML(data) {
  console.log(data);
  const trHead = document.createElement("tr");
    trHead.innerHTML = `<td>Id</td><td>Name</td><td>Age</td>`;
    usersTable.append(trHead);
  for(el of Array.from(data["data"])){
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${el.id}</td><td>${el.name}</td><td>${el.age}</td>`;
    usersTable.append(tr);
  }
}


 
// getById.addEventListener("click", e => {
//  let inputId = inputUserId.value;
//  if(inputId){
//     getUserById(inputId);
//  }else{
//      alert('Input user ID');
//  } 
//   inputUserId.value = "";
// }); 

// function getUserById(id) {  
//     return fetch(`https://test-users-api.herokuapp.com/users/${id}`)
//       .then(response => {
//         if (response.ok) return response.json();
//         throw new Error("Smth went WRONG");
//       })
//       .then(data => updateHTML(data, userById))
//       .catch(err => console.log(err));
//   } 
  

// postNewUser.addEventListener('click', (e)=>{
//     let userName = inputNewUserName.value;
//     let userAge = Number(inputNewUserAge.value); 
//     if(userName && userAge ){
//          addUser(userName, userAge);
//     }else{  
//         alert('Incorrect data !!!');
//     } 
//     inputNewUserName.value = "";
//     inputNewUserAge.value = ""; 
// })

// function addUser(name, age){  
//     return fetch('https://test-users-api.herokuapp.com/users', {
//         method: 'POST',
//         body: JSON.stringify({ name: name, age: age}),
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         }
//       })
//       .then(response => {
//         if (response.ok) return response.json();
//         throw new Error("Smth went WRONG");
//       })
//       .then(data => updateHTML(data, newUser))
//       .catch(err => console.log(err));
//   } 

 
// deleteUser.addEventListener("click", e => {
//     let inputDelId = inputDeleteUser.value;
//     if(inputDelId){
//         removeUser(inputDelId);
//     }else{
//         alert('Input correct ID !!!')
//     } 
//     inputDeleteUser.value = "";
//    }); 
   
//    function removeUser(id) {  
//     return fetch(`https://test-users-api.herokuapp.com/users/${id}`,{
//         method: 'DELETE',
//     })
//     .then(response => {
//         if (response.ok) return response.json();
//         throw new Error("Smth went WRONG");
//     })
//     .then(data => updateHTML(data, removedUser))
//     .catch(err => console.log(err));
//      } 
     


// updateUserData.addEventListener('click', (e)=>{
//     let updId = inputUpdID.value;
//     let updName = inputUpdName.value;
//     let updAge = Number(inputUpdAge.value);
//     const updUserData = {
//         name: updName,
//         age: updAge,
//     }; 
//     if(updId && updName && updAge){
//         updateUser(updId, updUserData)
//     }else{
//         alert("Input nessesary data !!!");
//     }
//     inputUpdID.value = "";
//     inputUpdName.value = "";
//     inputUpdAge.value = "";
// })
 

// function updateUser(id, user){
// return fetch("https://test-users-api.herokuapp.com/users/" + id,{
//     method:'PUT',
//     body: JSON.stringify(user),
//     headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//     }})
//     .then(response => {
//         if(response.ok) return response.json();
//         throw new Error("Smth went WRONG");
//     })
//     .then(data => {
//         updateHTML(data, updatedUser)
//     })
//     .catch(err => console.error(err)); 
// } 


//   function updateHTML(data, parentNode) {
//     let user = data["data"];
//     const innerElem = document.createElement("div");
//     innerElem.innerText = `UserId: ${user.id}
//                              User-Name: ${user.name}
//                              User-Age: ${user.age}`;
//     parentNode.append(innerElem);
//   }