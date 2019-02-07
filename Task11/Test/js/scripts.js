const data = {
    people: [
        {firstName: 'Homer', lastName: 'Simpson'},
        {firstName: 'Peter', lastName: 'Griffin'},
        {firstName: 'Eric', lastName: 'Cartman'},
        {firstName: 'Kenny', lastName: 'McCormick'},
        {firstName: 'Bart', lastName: 'Simpson'}
    ],
    temp: ['HTML','CSS','JavaScript','React','Node']
};


const source = document.querySelector('#example-template').innerHTML.trim();
const templateFunc = Handlebars.compile(source);
const markup = templateFunc(data);
// console.log(markup);
const container = document.querySelector('.content-placeholder');
container.innerHTML = markup;

const source2 = document.querySelector("#example-template2").innerHTML.trim();
let tempFunc = Handlebars.compile(source2);
let mark = tempFunc(data);
// let container = document.querySelector(".content-placeholder");
container.innerHTML += mark;