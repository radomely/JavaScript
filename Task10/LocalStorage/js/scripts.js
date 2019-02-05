// localStorage.setItem("test", JSON.stringify)
const form = document.querySelector("#form");
const selectors = document.querySelectorAll("select");
const body = document.querySelector("body");

function readData(e) {
    e.preventDefault();
    let settings = {};
    selectors.forEach(el => settings[el.name] = el.value);
    localStorage.setItem('settings',JSON.stringify(settings));
    changeStyle();
}

function changeStyle () {
    let obj = JSON.parse(localStorage.getItem('settings'));
    if(!obj){return}
    body.style.color = obj.color;
    body.style.fontSize = obj.fontSize + 'px';
    body.style.fontFamily = obj.fontFamily;
}

form.addEventListener("submit", readData);
window.addEventListener("DOMcontentLoaded", changeStyle);