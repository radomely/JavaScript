/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
//   };

// user.mood = "happy";
// user.hobby = "javascript";
// delete user.premium;

// for(let key in user){
//     console.log(key + ":" + user[key])
// }

// const keys = Object.keys(user);
// console.log(keys);
// for(let key of keys){
//     console.log(key + ":" + user[key]);
// }

// const entries = Object.entries(user);
// console.log(entries);
// for(let entry of entries){
//     console.log(entry[0] + ":" + entry[1]);
// }

/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
//   };

// const entries = Object.entries(tasksCompleted);
// let maxTask = 0;
// let name = "Empty";
// for(let entry of entries){
//     if(entry[1] > maxTask){
//         maxTask = entry[1];
//         name = entry[0];
//     }
// }
// console.log("The winner is " + name);

/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// function countProps(obj){
//     return Object.keys(obj).length;
// }

// // Вызовы функции для проверки
// console.log(
//     countProps({})
//   ); // 0

//   console.log(
//     countProps({a: 1, b: 3, c: 'hello'})
//   ); // 3

/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// function isObjectEmpty(obj){
//     return Object.keys(obj).length === 0 ? true : false;
// }

// // Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
//   ); // true

//   console.log(
//     isObjectEmpty({a: 1})
//   ); // false

//   console.log(
//     isObjectEmpty({a: 1, b: 2})
//   ); // false

/*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/

// function countTotalSalary(salaries){
//     let totalSalary = 0;
//     for(let key in salaries){
//         if(salaries.hasOwnProperty([key])){
//             totalSalary += salaries[key];
//         }
//     }
//     return totalSalary;
// }

// // // Вызовы функции для проверки
// console.log(
//     countTotalSalary({})
//   ); // 0

//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80
//     })
//   ); // 330

/*  
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

// const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
//   ];

// function getAllPropValues(arr, prop){
//     let arrValues = [];
//     for(let element of arr){
//         if(element.hasOwnProperty(prop)){
//             arrValues.push(element[prop])
//       }
//     }
//     return arrValues;
// }

//   // Вызовы функции для проверки
//   console.log(
//     getAllPropValues(users, 'name')
//   ); // ['Poly', 'Mango', 'Ajax']

//   console.log(
//     getAllPropValues(users, 'mood')
//   ); // ['happy', 'blissful', 'tired']

//   console.log(
//     getAllPropValues(users, 'active')
//   ); // []

/*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, необходимо передать 
  как аргументы при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
*/
// function User(name, isActive, age, friends) {
//   this.name = name;
//   this.isActive = isActive;
//   this.age = age;
//   this.friends = friends;
//   this.getUserInfo = function () {
//     console.log(`User ${this.name} is ${this.age} years old and has ${this.friends} friends`);
//   };
// };

// const andrii = new User("Andrii", true, 36, 7);
// const sergii = new User("Sergii", true, 37, 7);
// andrii.getUserInfo();
// console.log(andrii);
// console.log(sergii);
// sergii.getUserInfo();

// /*
//   Расставьте отсутствующие this в методах объекта store
// */

// const store = {
//   products: ['bread', 'cheese', 'milk', 'apples'],
//   managers: ['poly', 'mango', 'ajax'],
//   addManager(manager) {
//     this.managers.push(manager);

//     console.log(this.managers);
//   },
//   removeManager(manager) {
//     const idx = this.managers.indexOf(manager);

//     this.managers.splice(idx, 1);

//     console.log(this.managers);
//   },
//   getProducts() {
//     console.log(this.products);

//     return this.products;
//   }
// }

// store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

// store.removeManager('mango'); // ['poly', ajax', 'chelsey']

// store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']

/*  
  Расставьте отсутствующие this в конструкторе объектов Account
*/

// function Account(login, password, type = "regular") {
//   this.login = login;
//   this.password = password;
//   this.type = type;

//   this.changePassword = function(newPassword) {
//     this.password = newPassword;

//     console.log(this.password);
//   };

//   this.getAccountInfo = function() {
//     console.log(`
//       Login: ${this.login},
//       Pass: ${this.password},
//       Type: ${this.type}
//     `);
//   };
// }

// const account = new Account("Mango", "qwe123", "premium");

// console.log(account.login); // 'Mango'
// console.log(account.password); // 'qwe123'
// console.log(account.type); // 'premium'

// account.changePassword("asdzxc"); // 'asdzxc'

// account.getAccountInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'

//////////////////////////////////////////////////////////////////////// Extra Task
// Написать ф-ю конструктор Pizza который создает обэкты пиццы.
// Обект должен иметь такие поля:
// 1) Название пиццы // через параметр
// 2) Размер пиццы // чеерз параметр
// 3) набор начинок // масив
// 4) набор соусов // масив
// 5) метод totalPrice который возвращает цену пиццы // размер + начинки + соусы
// 6) метод totalCallories который возвращает суму калорий пиццы // размер + начинки + соусы
// 7) метод addToppings котрый принимает обект начинки и добавляет его а масив начинок если ее нету
// 8) метод addSouces котрый принимает обект соуса и добавляет его а масив соусов если его нету
// 9) метод deleteToppings который удаляет начинку из масива если она там есть
// 10) метод deleteSousess который удаляет соус из масива если он там есть

// Размеры,(sizes) начинки,(topings) соусы (souces) это обекты.
// sizes
// const BIG = {
// price: 80,
// callories: 150
// }
// const SMALL = {
// price: 50,
// callories: 100,
// }
// // topings
// const MEAT = {
// name: 'meat',
// price: 20,
// callories: 85
// }
// const CHEESE = {
// name: 'cheese',
// price: 15,
// callories: 50
// }
// const SALAT = {
// name: 'salat',
// price: 12,
// callories: 5
// }
// const CORN = {
// name: 'corn',
// price: 10,
// callories: 5
// }
// // souces
// const SOUSE = {
// name: 'souce',
// price: 8,
// callories: 30
// }
// const MUSTARD = {
// name: 'mustard',
// price: 13,
// callories:10
// }
// const KETCHUP = {
// name: 'ketchup',
// price: 8,
// callories: 7
// }

// function Pizza(name,size){
//   this.name = name;
//   this.size = size;
//   this.toppings = [];
//   this.souces = [];
//   // 5) метод totalPrice который возвращает цену пиццы // размер + начинки + соусы
//   this.totalPrice = function(){
//     totalPriceOfPizza = this.size.price + this.toppings.reduce((acc,el)=>acc+el.price,0) + this.souces.reduce((acc,el)=>acc+el.price,0);
//     return totalPriceOfPizza;
//   };
//   // 6) метод totalCallories который возвращает суму калорий пиццы // размер + начинки + соусы
//   this.totalCallories = function(){
//     totalCalloriesOfPizza = this.size.callories + this.toppings.reduce((acc,el)=>acc+el.callories,0) + this.souces.reduce((acc,el)=>acc+el.callories,0);
//     return totalCalloriesOfPizza;
//   };
//   // 7) метод addToppings котрый принимает обект начинки и добавляет его а масив начинок если ее нету
//   this.addToppings = function(topping){
//     if(this.toppings.find(el=>el.name === topping.name)===undefined){
//       this.toppings.push(topping);
//     }
//   };
//   // 8) метод addSouces котрый принимает обект соуса и добавляет его а масив соусов если его нету
//   this.addSouces = function(souce){
//     if(this.souces.find(el=>el.name === souce.name)===undefined){
//       this.souces.push(souce);
//     }
//   };
//   // 9) метод deleteToppings который удаляет начинку из масива если она там есть
//   this.deleteToppings = function(topping){
//     let index = this.toppings.indexOf(topping);
//     this.toppings.splice(index,1);
//   };
//   // 10) метод deleteSousess который удаляет соус из масива если он там есть
//   this.deleteSousess = function(souce){
//     let index = this.souces.indexOf(souce);
//     this.souce.splice(index,1);
//   };
// };

// // создвть 2 разных пицы большую и маленькую. Дл каждой из них добавить по одной начинке и соус. Потом вывести цену и калории.
// const francheska = new Pizza("francheska", BIG);
// francheska.addToppings(MEAT);
// francheska.addSouces(SOUSE);
// console.log("Price: " + francheska.totalPrice() + " Calories: " + francheska.totalCallories());//Price: 108 Calories: 265
// const forCheese = new Pizza("forCheese", SMALL);
// forCheese.addToppings(CHEESE);
// forCheese.addSouces(MUSTARD);
// console.log("Price: " + forCheese.totalPrice() + " Calories: " + forCheese.totalCallories());//Price: 78 Calories: 160
// // Дальше добавить еще по одному соусу и 2 начинки.
// francheska.addSouces(KETCHUP);
// francheska.addToppings(SALAT);
// francheska.addToppings(CORN);
// forCheese.addSouces(KETCHUP);
// forCheese.addToppings(SALAT);
// forCheese.addToppings(CORN);
// // Потом удалить одну начинку и вывести цену и калории новой пицы
// francheska.deleteToppings(CORN);
// forCheese.deleteToppings(SALAT);
// console.log(francheska);
// console.log(forCheese);
// console.log("Price: " + francheska.totalPrice() + " Calories: " + francheska.totalCallories());//Price:  Calories:
// console.log("Price: " + forCheese.totalPrice() + " Calories: " + forCheese.totalCallories());//Price:  Calories:

// Написати калькулятор за допомогою ф-ї конструктора. Ця ф-я створює обєкт з  методами read(), sum(), mul(), addMethod(name, function);
// Метод read() запитує в користувача числа за допомогою prompt і запамятовує їх.
// Метод read() працює до тих пір поки користувач не натисне Cancel;
// Метод sum() виводить в консоль суму всіх чисел що ввели в процесі роботи метода read().
// Метод console.log(calculator.sum()) // 15() виводить в консоль добуток всіх чисел.
// Метод addMethod(name, function) вчить калькулятор нової операції.
// параметр name - назва нового метода
// параметр function - код нового метода.
// За допомогою метода addMethod(name, function) додати в калькулятор новий функціонад який буде знаходити різницю всіх введених цифр які отримали при використанні метода read();

function Calculator() {
  this.inNumArr = [];
  this.read = function() {
    let x = 0;
    while (true) {
      x = prompt("Введите число:");
      if (x === null) {
        break;
      } else {
        this.inNumArr.push(Number.parseFloat(x));
      }
    }
  };
  this.sum = function() {
    return this.inNumArr.reduce((acc, el) => acc + el, 0);
  };
  this.mul = function() {
    return this.inNumArr.reduce((acc, el) => acc * el, 1);
  };
  this.addMethod = function(name, functionX) {
    this[name] = functionX;
  };
}
const functionX = function() {
  return this.inNumArr.reduce((acc, el) => acc - el, 0);
};
//////////////
let calculator = new Calculator();
calculator.read(); // вводимо 5 цифр (1,2,3,4,5) після цього натискаємо Cancel і метод read() зупиняє роботу
console.log(calculator.sum()); // 15
console.log(calculator.mul()); // 120
calculator.addMethod("minus", functionX); // додається метод на віднімання
console.log(calculator.minus()); // -13
