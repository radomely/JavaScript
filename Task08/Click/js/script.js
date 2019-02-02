// 2) Написати скрипт який при ховері буде міняти позицію кнопок на екрані, щоб не можна було по них клікнути
// 3) Нова позиція кнопок має бути випадковою
// 4) Кнопки не повинні виїжати за межі екрану
// 5) Позиція кнопок має вираховуватися відносно висоти і ширини вікна браузера
// 6) Переміщення кнопок зробити плавним за допомогою transition
// 7) Визначати кнопку на якій відбулася подія можна двома способами:
// 7.1) event
// 7.2) this
// 8) Корисні команди:
// window.innerWidth
// window.innerHeight
// clientHeight
// clientWidth
// mouseenter

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const handleClick = event => {
    event.target.style.top = Math.floor(Math.random() * (window.innerHeight - btn.clientHeight)) + "px";
    event.target.style.left = Math.floor(Math.random() * (window.innerWidth - btn.clientWidth)) + "px";
};
container.addEventListener("mouseover", handleClick);