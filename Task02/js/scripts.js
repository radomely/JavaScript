/*
  Есть массив имен пользователей.
  В первом console.log вывести длину массива.
  
  В последующих console.log дополнить конструкцию
  так, чтобы в консоль вывелись указаные в комментариях 
  элементы массива.
*/

let users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

console.log(users.length); // 4

console.log(users[1]); // Poly
console.log(users[3]); // Chelsey
console.log(users[0]); // Mango
console.log(users[2]); // Ajax


/* Есть массив имен пользователей */

users = ["Mango", "Poly", "Ajax", "Chelsey"];

/* Используя методы массива, последовательно выполнить следующие операции */

// Удалить из начала массива нулевой элемент
users.shift();
console.log(users); // ["Poly", "Ajax", "Chelsey"]

// Удалить из конца массив последний элемент
users.pop();
console.log(users); // ["Poly", "Ajax"]

// Добавить в начало массива любое имя
users.unshift("Andrii");
console.log(users); // ["добавленое имя", "Poly", "Ajax"]

// Добавить в конец массива два любых имени за одну операцию
users.push("Denis", "Diana");
console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]


/*
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string
  
  PS: для перебора массива используте цикл for или for...of
*/

let string;
let arr;
string = prompt("введите произвольную строку:");
// Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
arr = string.split(" ");
console.log(arr);

// Вывести в консоли общую длину массива arr
console.log(arr.length);

// Используя цикл, вывести в консоль все индексы массива arr
for(i=0;i<arr.length;i++)
console.log(i);

// Используя цикл, вывести в консоль все элементы массива arr
for (let variable of arr )
console.log(variable);

// Используя цикл, bывести в консоли все пары индекс:значение массива arr
for(i=0;i<arr.length;i++)
console.log(i + ":" + arr[i]);


/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
   Если посетитель ввёл другое число или нажал Cancel – попросить ввести ещё раз, 
   и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while
*/
let num
do{
  num = prompt("Введите пожалуйста число больше 100");
  if(num==null) break;
  num = Number(num);
}while(num <= 100);

/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/

const min = 1;
const max = 100;
for(i=min;i<=max;i++){
  if(i%3===0) console.log("Fizz");
  else if (i%5===0) console.log("Buzz");
  else console.log(i);
}

/*
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/

const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
const num = 10;
const newArray = [];