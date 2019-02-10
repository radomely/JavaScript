/*
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

const input = document.querySelector("input");
const form = document.querySelector(".search-form");
const result = document.querySelector(".result");
const API_URL = "https://restcountries.eu/rest/v2/name/";

/*
  @param {FormEvent} evt
*/
function fetchCountryData(evt) {
  evt.preventDefault();
  fetch(API_URL + input.value)
    .then(response => {
        if(response.ok) return response.json();
        throw new Error("There is no such country");
    })
    .then(data => {
          result.innerHTML = `
          Country name: ${data[0].nativeName}<br>
          Capital: ${data[0].capital}<br>
          Main currency: ${data[0].currencies[0].name}<br>
          Flag:  <img src="${data[0].flag}" class = "flag" alt="flag">`;
    })
    .catch(err => console.log(err));
}
form.addEventListener("submit", fetchCountryData);