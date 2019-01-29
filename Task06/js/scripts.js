// // Написати конструктор обєкта Account який буде описувати рахунок користувача.
// // Обєкт має мати такі унікальні ключі:
// // 1) Імя юзера
// // 2) id юзера
// // 3) ключ balance
// // 4) ключ credits // список кредитів
// // 5) ключ deposits // список депозитів
// // 6) ключ depositIncome // загальний прибуток від депозитів
// // 7) ключ creditCosts // загальні затрати по кредитах
// // 8) ключ charity // сума яку виділили на благодійність
// function Account(userName, IDUser){
//     this.userName = userName;
//     this.IDUser = IDUser;
//     this.balance = 0;
//     this.credits = [];
//     this.deposits = [];
//     this.depositIncome = 0;
//     this.creditCosts = 0;
//     this.charity = 0;
// };
// // 1) countDepositsIncome // метод що приймає суму депозита і та збільшує поле depositIncome в задежності від типу і ставки і періоду депозиту.
// Account.prototype.countDepositsIncome = function(x){
//     let percent = Number.parseFloat(x.percent)/100;
//     if(x.type==="simple"){
//     this.depositIncome += x.amount*(percent/12)*x.period;
//     } else if (x.type==="compound"){
//         let result = x.amount*Math.pow((1+percent/12),x.period)-x.amount;
//         console.log(result);    
//     this.depositIncome += result;
//     }else{
//     return;
//     }
// };
// // 2) openDeposit // метод що додає депозит в список deposits і запускає метод countDepositsIncome
// Account.prototype.openDeposit = function(x){
//     this.deposits.push(x);
//     this.countDepositsIncome(x);
// };
// // 3) countCreditCost  // метод що приймає суму кредиту і його тип та збільшує поле creditCosts
// Account.prototype.countCreditCost = function(y){
//     let percent = Number.parseFloat(y.percent)/100;
//     if(y.type==="annuity"){
//     let k = (percent * Math.pow(1+percent,y.period))/((1+percent,y.period)-1);
//     this.creditCosts += y.amount*(k*y.period-1);
//     } else if (y.type==="simple"){
//         let result = ((2*y.amount-((y.amount*(y.period-1))/y.period))/2)*y.period*percent;
//         console.log(result);    
//     this.creditCosts += result;
//     } else {
//     return;
//     }
// };
// // 4) openCredit // метод що додає кредит в список credits і запускає метод countCreditCost
// Account.prototype.openCredit = function(y){
//     this.credits.push(y);
//     this.countCreditCost(y);
// };
// // 5) showIncome // метод що показує загальний дохід від депозитів
// Account.prototype.showIncome = function(){
//     console.log(this.depositIncome);
//     return this.depositIncome;
// };
// // 6) showCost // метод що показує загальні затрати на кредити
// Account.prototype.showCost = function(){
//     console.log(this.creditCosts);
//     return this.creditCosts;
// };
// // 7) showProfit //метод що показує прибуток (різниця доходів і витрат)
// Account.prototype.showProfit = function(){
//     console.log(this.depositIncome-this.credits); 
//     return this.depositIncome-this.credits;
// };
// // 8) getCash //метод що приймає число і зменьшує баланс юзера так як він знімає готівку з рахкнку
// Account.prototype.getCash = function(){

// };
// // 9) addition // метод що приймає число і збільшує баланс юзера (поповнення через термінал)
// Account.prototype.addition = function(ammount){
//     this.balance += ammount;
// };
// // 10) closeCredit метод що закриває кредит в банку і видаляє його з поля credits та забирає суму з creditCosts
// Account.prototype.closeCredit = function(){

// };
// // 11) closeDeposit метод що закриває депозит в банку і видаляє його з поля deposits та забирає суму з depositIncome
// Account.prototype.closeDeposit = function(){

// };

// // Також мають бути такі методи
// // 1) countDepositsIncome // метод що приймає суму депозита і та збільшує поле depositIncome в задежності від типу і ставки і періоду депозиту.
// // 2) openDeposit // метод що додає депозит в список deposits і запускає метод countDepositsIncome
// // 3) countCreditCost  // метод що приймає суму кредиту і його тип та збільшує поле creditCosts
// // 4) openCredit // метод що додає кредит в список credits і запускає метод countCreditCost
// // 5) showIncome // метод що показує загальний дохід від депозитів
// // 6) showCost // метод що показує загальні затрати на кредити
// // 7) showProfit //метод що показує прибуток (різниця доходів і витрат)
// // 8) getCash //метод що приймає число і зменьшує баланс юзера так як він знімає готівку з рахкнку
// // 9) addition // метод що приймає число і збільшує баланс юзера (поповнення через термінал)
// // 10) closeCredit метод що закриває кредит в банку і видаляє його з поля credits та забирає суму з creditCosts
// // 11) closeDeposit метод що закриває депозит в банку і видаляє його з поля deposits та забирає суму з depositIncome

// // Зразок обєкта депозита
// // const deposit = {
// //     id:1,
// //     amount: 5000,
// //     type: '', // типи депозиту 'simple', 'compound'
// //     percent: '10%',
// //     period: 1 // період вказуємо в місяцях
// // }

// // зразок обєкта кредиту
// // const credit = {
// //     id:2,
// //     amount: 500000,
// //     type: '', // типи кредиту 'annuity', 'simple'
// //     percent: '5%',
// //     period: 15 // період вказуємо в роках
// // }


// // simple deposit formula https://www.rapidtables.com/calc/finance/simple-interest-calculation.html 
// // compound deposit formula https://www.rapidtables.com/calc/finance/compound-interest-formula.html

// // annuity credit formula
// // Дивитися Приклад 4.
// // https://uk.wikibooks.org/wiki/%D0%A4%D1%96%D0%BD%D0%B0%D0%BD%D1%81%D0%B8/%D0%9E%D0%B1%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F_%D0%B2%D1%96%D0%B4%D1%81%D0%BE%D1%82%D0%BA%D1%96%D0%B2_%D0%B7%D0%B0_%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%BE%D0%BC_%D0%B0%D0%B1%D0%BE_%D0%B4%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D0%BC

// // simple credit formula
// // Дивитися Приклад 3.
// // https://uk.wikibooks.org/wiki/%D0%A4%D1%96%D0%BD%D0%B0%D0%BD%D1%81%D0%B8/%D0%9E%D0%B1%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F_%D0%B2%D1%96%D0%B4%D1%81%D0%BE%D1%82%D0%BA%D1%96%D0%B2_%D0%B7%D0%B0_%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%BE%D0%BC_%D0%B0%D0%B1%D0%BE_%D0%B4%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D0%BC

// // В якому порядку перевіряти роботу кода.
// // Рахуємо депозити помісячно
// // 1) створюємо обєкт запуском new Account(name, id);
// const andrii = new Account("Andrii", 1);
// // 2) Запускаєм метод addition() // для поповнення балансу
// andrii.addition(5000);
// // 3) Запускаєм метод openDeposit({amount: 50000, type: 'simple', percent: '15%', period: 24}) // відкриваємо по депозиту різного типу
// andrii.openDeposit({id: 1, amount: 50000, type: 'simple', percent: '15%', period: 24});
// andrii.showIncome();
// // 4) Запускаєм метод openDeposit({amount: 20000, type: 'compound', percent: ;'20%', period: 12}) //  відкриваємо по депозиту різного типу
// andrii.openDeposit({id: 2, amount: 20000, type: 'compound', percent: '20%', period: 12});
// andrii.showIncome();
// // 5)Запускаєм метод openCredit({ammount: 500000 ,type: 'annuity', percent: '5%', period:10})
// andrii.openCredit({amount: 500000 ,type: 'annuity', percent: '5%', period: 10});
// andrii.showCost();
// // 6)Запускаєм метод openCredit({ammount:10000 ,type: 'simple', percent: '25%', period:3})
// andrii.openCredit({amount:10000 ,type: 'simple', percent: '25%', period:3});
// andrii.showCost();
// // 7) Запускаєм метод showIncome()
// andrii.showIncome();
// // 8) Запускаєм метод showCost()
// andrii.showCost();
// // 9) Запускаєм метод showProfit()
// andrii.showProfit();
// // 10) Запускаєм метод getCash(1000)
// // 11) Запускаєм метод addition(5000)
// // 12)Запускаєм метод closeCredit(id)
// // 13)Запускаєм метод closeDeposit(id)






/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount. 
  
  В prototype функции-конструктора добавить метод getAccountInfo(), 
  который выводит в консоль значения полей login, email и friendsCount. 
  
  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/
// function Account(login, email, friendsCount){
//     this.login = login;
//     this.email = email;
//     this.friendsCount = friendsCount;
// }

// Account.prototype.getAccountInfo = function() {
//     console.log("Login: " + this.login);
//     console.log("email: " + this.email);
//     console.log("friendsCount: " + this.friendsCount);
// }
// let obj1 = new Account("Andrii", "radomely@gmail.com", 5);
// obj1.getAccountInfo();
// console.log(obj1);


/*
  Напишите ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в поле value.
  
  Добавьте классу следующие методы:
  
    - getValue() - возвращает текущее значение поля value
  
    - append(str) - получает парметр str - строку и добавляет 
      ее в конец значения поля value
    
    - prepend(str) - получает парметр str - строку и добавляет 
      ее в начало значения поля value
  
    - pad(str) - получает парметр str - строку и добавляет 
      ее в начало и в конец значения поля value
*/

const builder = new StringBuilder('.');

builder.append('^'); 
console.log(builder.getValue()); // '.^'

builder.prepend('^'); 
console.log(builder.getValue()); // '^.^'

builder.pad('='); 
console.log(builder.getValue()); // '=^.^='
