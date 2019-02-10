

const output = document.querySelector('#js-output');
const input = document.querySelector('#js-input');
const btn = document.querySelector('#js-btn');

const updateView = () => {
  output.textContent = localStorage.getItem('goit-js-module-12') || '';
};

const handleClick = () => {
  localStorage.setItem('goit-js-module-12', input.value);
  updateView();
};

updateView();

btn.addEventListener('click', handleClick);

