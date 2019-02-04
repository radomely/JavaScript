/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/

const openModalBtn = document.querySelector(".btn");
const modalWindow = document.querySelector(".js-modal-backdrop");
const closeModalBtn = document.querySelector(".close-btn"); 

openModalBtn.addEventListener("click", openModal);
function openModal () {
  modalWindow.classList.remove("modal-hidden");
};

modalWindow.addEventListener("click", closeModal);
function closeModal(event){
  if(event.target != modalWindow && event.target != closeModalBtn) return; 
  event.currentTarget.classList.add("modal-hidden"); 
};