// let box = document.querySelector(".box");
// let a = 0;
// let b = 0;
// const start = () => {
//     a = Number(prompt("Введите число А"));
//     b = Number(prompt("Введите число А"));
//     document.querySelector("#a").textContent = a;
//     document.querySelector("#b").textContent = b;
//   };
// const sum = () => {
//     document.querySelector("#sum").textContent = a+b;
// };
// const minus = () => {
//     document.querySelector("#minus").textContent = a-b;
// };
// const mult = () => {
//     document.querySelector("#mult").textContent = a*b;
// };
// const devide = () => {
//     document.querySelector("#divide").textContent = a/b;
// };
// const pow = () => {
//     document.querySelector("#pow").textContent = Math.pow(a,b);
// };

// const handleClick = event => {
//     switch (event.target.className){
//         case "get-Value": start();
//         break;
//         case "sum": sum();
//         break;
//         case "minus": minus();
//         break;
//         case "mult": mult();
//         break;
//         case "divide": devide();
//         break;
//         case "pow": pow();
//         break;
//     }
//   };

// box.addEventListener("click",handleClick);


class Calculator {
    constructor() {
         // this = {}
         this.a = null;
         this.b = null;

         this.getValue = this.getValue.bind(this);
         this.sum = this.sum.bind(this);
    }

    getValue() {
         console.log(this);
         this.a = Number(prompt('Enter number'));
         this.b = Number(prompt('Enter number'));
         a.textContent = this.a;
         b.textContent = this.b;
    }

    sum() {
         console.log(this);
         sum.textContent = this.a + this.b;
    }
}

let machine = new Calculator();

startBtn.addEventListener('click',machine.getValue);
sumBtn.addEventListener('click', machine.sum);