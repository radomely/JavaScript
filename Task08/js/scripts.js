// 1. Читаєм інформаціюю з інпутів  (querySelector, value)
// 2. Перемножаємо дані з інпутів (function)
// 3. Відобразити на екрані результат пункту 2 (textContent)
// 4. Округлити до двох знаків після коми (toFixed(2))
// 5. Перезаписуємо інформацію в синьому квадраті (value range, textContent)
// 6. Вартість перезаписується при зміні будьякого інпута (event - input and function p2)
// 7. Вартість розрахувати при завантаженні сторінки. (DOMContent)

let inputPrice = document.querySelector("#price");
console.log(inputPrice.value);
let inputQuantity = document.querySelector("#quantity");
console.log(inputQuantity.value);
let amount = document.querySelector(".amount");
let form = document.querySelector("form");
console.log(form.value);
// const mul = function (x,y){
//     return x*y;
// }
let textRightTotal = document.querySelector(".total");
const mul = function (){
textRightTotal.textContent = (inputPrice.value*inputQuantity.value).toFixed(2);
amount.textContent = inputQuantity.value;
}

form.addEventListener("input",mul);
window.addEventListener("DOMcontentloaded",mul);

////////////////////////////////////////////////////////////////////////////////////////////////////