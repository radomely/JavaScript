/*
  Написать функцию fetchUserData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

const input = document.querySelector("input");
const form = document.querySelector(".search-form");
const result = document.querySelector(".result");
const API_URL = "https://api.github.com/users/";

form.addEventListener("submit", fetchUserData);

/*
  @param {FormEvent} evt
*/
function fetchUserData(evt) {
  evt.preventDefault();
  fetch(API_URL + input.value)
    .then(response => {
      if(response.ok) return response.json();
      throw new Error("There is no such user");
  })
  .then(data => {
        result.innerHTML = `
        Avatar: <img src="${data.avatar_url}" alt="avatar" width="100px"> <br>
        Username: ${data.login}<br>
        Bio: ${data.bio}<br>
        Public repos: ${data.public_repos}`;})
        .catch(err => console.log(err));
}