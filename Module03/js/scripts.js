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

// let st = Math.sqrt(379);
// console.log(st);
// console.log(st.toFixed(0));
// console.log(st.toFixed(1));
// console.log(st.toFixed(2));
// let st1 = Math.sqrt(587);
// console.log(st1);
// console.log(Math.ceil(st1));
// console.log(Math.floor(st1));
// let a, 




// 1) Створити 3 змінних (камінь ножиці папір).
// 2) Записати варіант користувача в змінну.
// 3) Создати змінну в яку запишеться варіант компютера.
// 4) Зрівняти змінну юзера і компютера:
// 4,1) Якщо змінні однакові тоді нічия (Вивести результат)
// 4,2) Якщо змінні різні: 
// 4,2,2) Опрацювати варіанти перемоги юзера (Вивести результат)
// 4,2,3) Інакше виграв комп. (Вивести результат)

// let stone = "stone";
// let scisors = "scisors";
// let paper = "paper";

// let result = prompt("Введите ваш ответ");
// switch (result){
//     case: "stone" break
// }
// let computer = Number(Math.random()*100)%3;
// console.log(computer);


// let str = prompt("Введите строку");
// let newStr = str.split('');
// console.log(newStr.reverse().join(''));
// console.log(str);
// console.log(newStr.reverse().join('') === str);
// newStr = newStr.reverse().join('')
// if(newStr === str) {
//     alert("Полиндром");
// } else {
//     alert("Не полиндром");
// }


// let namesArr = ['Albert','Isaac', 'Galileo', 'Marie', 'Johannes', 'Nicolaus', 'Max', 'Katherine', 'Ada', 'Sarah', 'Lise','Hanna'];
// let tempNamesArr = namesArr.slice();
// let team = [];
// let maxi = prompt("Введите колличество массивов");
// let maxj = prompt("Введите длинну внутреннего массива");
// for (let i = 0; i < maxi; i++){
//     let arrtemp = [];
//     for(let j = 0; j < maxj; j++){
//         arrtemp[j]=tempNamesArr.splice(Math.floor(Math.random()*tempNamesArr.length),1).toString();
//     }
//     team.push(arrtemp);
// }
// console.table(team);


// let numberOfGoods = prompt("Введите колличество покупок");
// let Purchase;
// let sum=0;
// for(let i=0; i<numberOfGoods; i++){
//     Purchase = prompt("Введите название товара и цену Например \"Булочка:5\"");
//     sum+=Number.parseFloat(Purchase.split(':')[1]);
// }
// alert("Сумма денег необходимая для покупок" + sum);


// let arr = [5,10,15,20,25,30,35,40, 10];
// let arrCopy = arr.slice();
// let result = [10,20,35];
// console.log(arrCopy);
// console.log(result);
// for(let i = 0; i<result.length;i++){
//     let indexOfElementToDel = arrCopy.indexOf(result[i])
//     arrCopy.splice(indexOfElementToDel,1);
// }
// console.log(arrCopy);


// Написать програму которая находит разницу значений двух масивов

// 1) [1, 2, 3], [100, 2, 1, 10] // [3, 10, 100]

// let arr1 = [1,2,3];
// let arr2 = [100, 2, 1, 10];

// let unicArr = [];

// for(let el of arr1){
//     if(!arr2.includes(el)){
//         unicArr.push(el);
//     }
// }
// for(let el of arr2){
//     if(!arr1.includes(el)){
//         unicArr.push(el);
//     }
// }
// console.log(unicArr);



