// 1) Скачати картинки
// 2) Наповнити розмітку
// 3) Створити через js модалку + В правому верхньому кутку хрестик на закриття
// 4) В модалці має зявлятися по центру картинка з підписом
// 5) При кліку на оверлей чи хрестик модалка пропадає
// 6) Пункти 3,4,5, активуються при кліку на картинку галереї (делегування).
// 7) Якщо все працює переписати на клас.
// *
// 1) Додати до модалки кнопку превю
// 2) При кліку на неї збоку зявляється панель з міні-картинками
// 3) При кліку на маленьку картинку змінюється картинка в модалці.
// 4) До міні-картинок додається бордер який підсвічує активне зображення.

const gallery = document.querySelector("#gallery");

const handleClick = event => {
const modal = document.createElement("div");
gallery.after(modal);
modal.classList.add("modal");
const image = document.createElement("img");
image.classList.add("image");
console.log(event.target.dataset.big);
// image.setAttribute("src", event.target.dataset.big)
image.setAttribute("src", event.target.getAttribute("data-big"))
modal.append(image);
// position absolete 50 50 -50  getAttribute(name)
}
gallery.addEventListener("click",handleClick);

