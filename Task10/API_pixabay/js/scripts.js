// 1) ENDPOINT
// 2) SOURCE
// 3) PARAMETRS

let URL = "https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&image_type=photo&category=backgrounds&per_page=12";

// fetch(URL)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// CRUD
// 1) GET - READ
// 2) POST - CREATE
// 3) DELETE - DELETE
// 4) PUT - UPGRATE

// Форматы в которых приходят данные с сервера
// JSON
// XML
// CSV


// 1) Данні з інпута (по кліку, або на кнопку ЕНТЕР і інпут чиститься)
// 2) Створити силку з данними з інпута
// 3) Посилаємо запит
// 4) Перевести з JSON формата
// 5) Намалювати розмітку

let inputTXT = document.querySelector(".input");
let box = document.querySelector(".box");
console.log(box)
box.addEventListener("submit", handler);
function handler(event) {
    event.preventDefault();
    console.log(inputTXT.value);
    URL = `https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&image_type=photo&q=${inputTXT.value}&per_page=12`
    fetch(URL)
    .then(response => response.json())
    .then(data => razmetka(data))
    .catch(err => console.log(err));
    
/* <div class="one">
<p>Photographer is USERNAME</p>
<img src= URL>
</div> */
box.reset();
};

function razmetka (data) {
    console.log(data);
    for(el of data.hits){
let container = document.querySelector("#container");
let div = document.createElement("div");
container.append(div);
div.classList.add("one");
let p = document.createElement("p");
div.append(p);
p.textContent = `Photographer is ${el.user}`;
let img = document.createElement("img");
div.append(img);
img.src = el.largeImageURL;
    }
};