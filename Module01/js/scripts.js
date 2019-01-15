// // let num = 3;
// // alert(num);

// let now = new Date();
// let hour = now.getHours();
// let min = now.getMinutes();
// let sec = now.getSeconds();
// // let time;
// // setInterval (time, 5000);

//  console.log(`${hour}:${min}:${sec}`);
 

//  let clients = ["Mango", "Poly", "Ajax"];

// // length вернет текущую длину массива
// console.log(clients.length); // 3

// clients.length = 5;
// console.log(clients.length); // 5
// console.log(clients); // ["Mango", "Poly", "Ajax", empty × 2]
// console.log(clients[4]); // undefined

//  clients.length = 2;
// console.log(clients); // ["Mango", "Poly"]




// // split
// const message = "Welcome to Bahamas!";

// // Разбивает строку по разделителю, в данном случае это пробел
// console.log(message.split(" ")); // ["Welcome", "to", "Bahamas!"]

// // Вызов split с пустой строкой разобьёт по буквам
// console.log(message.split("")); // ["W", "e", "l", "c", "o", "m", "e", " ", "t", "o", " ", "B", "a", "h", "a", "m", "a", "s", "!"]

// // join
// clients = ["Mango", "Poly", "Ajax"];

// // Сошьет все элементы массива в строку,
// // между каждой парой элементов будет указанный разделитель
// console.log( clients.join(" ")); // "Mango Poly Ajax"
// console.log( clients.join(",")); // "Mango,Poly,Ajax"
// console.log( clients.join("-")); // "Mango-Poly-Ajax

// // Создаем пустой массив
// const stack = [];

// // Добавляем элементы в конец массива
// stack.push(1);
// console.log( stack ); // [1]

// stack.push(2);
// console.log( stack ); // [1, 2]

// stack.push(3);
// console.log( stack ); // [1, 2, 3]

// stack.push(4);
// console.log( stack ); // [1, 2, 3, 4]

// stack.push(5);
// console.log( stack ); // [1, 2, 3, 4, 5]

// // Удаляем элементы из конца массива
// console.log( stack.pop() ); //  5
// console.log( stack ); // [1, 2, 3, 4]

// console.log( stack.pop() ); //  4
// console.log( stack ); // [1, 2, 3]

// console.log( stack.pop() ); //  3
// console.log( stack ); // [1, 2]

// console.log( stack.pop() ); //  2
// console.log( stack ); // [1]

// console.log( stack.pop() ); //  1
// console.log( stack ); // []

// console.log( stack.pop() ); //  undefined


// clients = ["Mango", "Ajax", "Poly"];

// console.log( clients.shift() ); // Mango

// console.log( clients ); // ["Ajax", "Poly"]

// clients.unshift( "Chelsey" );

// console.log( clients ); // ["Chelsey", "Ajax", "Poly"]

// prompt("Введите число") < 0 ?  alert("Верно") : alert("Неверно");

// clients = ["Mango", "Ajax", "Poly", "Chelsey"];

// // Вернет новый массив в котором будут элементы с индексами от 1 до 2
// console.log( clients.slice(1, 3) ); // ["Ajax", "Poly"]

// // Вернет новый массив в котором будут
// // элементы с индексами от 1 до (clients.length - 1)
// console.log( clients.slice(1) ); // ["Ajax", "Poly", "Chelsey"]

// // Вернет копию исходного массива
// console.log( clients.slice() ); // ["Mango", Ajax", "Poly", "Chelsey"]

// // Вернет новый массив состоящих из последних двух элементом исходного
// console.log( clients.slice(-2) ); // ["Poly", "Chelsey"]

// // Предположим, у нас есть массив оценок,
// // который содержит пять чисел от 1 до 5.
// const scores = [1, 2, 3, 4, 5];

// // Следующая операция удаляет три элемента массива,
// // начиная с первого элемента (индекс 0).
// const deletedScores = scores.splice(0, 3);

// // Теперь массив scores содержит два элемента.
// console.log(scores); // [4, 5]

// // А массив deletedScores содержит три удаленных элемента.
// console.log(deletedScores); // [1, 2, 3]

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const age = 20;

// console.log( Array.isArray(fruits) ); // true
// console.log( Array.isArray(age) ); // false


// // С помощью цикла можно заполнять массив данными
// const numbers = [];
// let num = 0;

// while (num < 10) {
//   numbers.push(num);
//   num += 1;
// }

// console.log("numbers: ", numbers);

// for(let i = 0, max = 10; i < max; i += 1) {
//     console.log(`${max} % ${i} = `, max % i);
//   }

//   numbers.length=0;

// for(let i = 0; i < 10; i += 1) {
//   numbers.push(`number-${i}`);
// }

// console.log(numbers);

// // Итерация по массиву
// clients = ['Mango', 'Ajax', 'Poly'];

// for(const value of clients) {
//   console.log(value);
// }

// const [ grapes, oranges, apples ] = [10, 2];
// console.log(oranges);

let st = Math.sqrt(379);
console.log(st);
console.log(st.toFixed(0));
console.log(st.toFixed(1));
console.log(st.toFixed(2));
let st1 = Math.sqrt(587);
console.log(st1);
console.log(Math.ceil(st1));
console.log(Math.floor(st1));
let a, 