// Отримати масив валют з сайта НБУ 
// Силка для запиту 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
// Вивести інформацію на екран в форматі списка. Пункт списку має мати 3 спана:
// Спан №1 показує текстову назву валюти
// Спан №2 показує курс
// Спан №3 показує позначку валюти (наприклад USD)
// Створити на екрані 3 кнопки та інпут.
// 1)Кнопка №1 сортує від дорожчого до дешевшого
// 2)Кнопка №2 сортує від дешевшого до дорощого
// 3)Кнопка №3 сортує по алфавіту
// 4)В інпут вводимо назву валюти текст або cc і отримуємо курс конкретної валюти.

//    .then(data => {if (event.target.classList.contains("btn")) {return data.filter(el=> el.txt.contains() || el.cc.contains())}else return data;})

function fetchData(event) {
    event.preventDefault();
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then(response => response.json())
    .then(data => {if (event.target.classList.contains("btn1")) {return data.sort((a, b)=> b.rate - a.rate)}else return data;})
    .then(data => {if (event.target.classList.contains("btn2")) {return data.sort((a, b)=> a.rate - b.rate)}else return data;})
    .then(data => {if (event.target.classList.contains("btn3")) {return data.sort((a, b)=> a.txt.localeCompare(b.txt))}else return data;})
    .then(data => {if (event.target.classList.contains("btn")) {return data.filter(el=>el.txt.indexOf(event.path[1][0].value) !== -1 || el.cc.indexOf(event.path[1][0].value) !== -1);}else return data;})
    .then(data => razmetka(data))
    .catch(err => console.log(err));
}

function razmetka (data) {
    let container = document.querySelector("#container");
    let result="";
    for(el of data){
    result += `<li><span>${el.txt}</span><span>${el.rate}</span><span>${el.cc}</span></li>`;
    }
    container.innerHTML = result;
};

const form = document.querySelector(".box");
form.addEventListener("click", fetchData);