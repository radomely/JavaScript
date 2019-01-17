// /*
//   Напишите функцию checkNumberType(num)

//   Функция получает число num как аргумент и возвращает
//   строку "Even" если число четное и строку "Odd" если не четное.
// */
// function checkNumberType(num){
//     return num%2 === 0 ? "Even" : "Odd";
// };

// // Вызовы функции для проверки
// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'

/*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/
// function formatString(str){
//     return str.length <= 40 ? str : str.slice(0,40) + "...";
// }
// // Вызовы функции для проверки
// console.log(
//     formatString("Curabitur ligula sapien, tincidunt non.")
//   ); // вернется оригинальная строка

//   console.log(
//     formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
//   ); // вернется форматированная строка

//   console.log(
//     formatString("Curabitur ligula sapien.")
//   ); // вернется оригинальная строка

//   console.log(
//     formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
//   ); // вернется форматированная строка

/*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/
// function checkForSpam(str){
//     return (str.toLowerCase().includes("spam") || str.toLowerCase().includes("sale")) ? true : false;
// };
// // Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true

/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/

// function getPx(str){
//     return typeof str === "string"? Number.parseFloat(str) : null;
// }

// // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null

/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы,
  символы букв и цифр!
*/

// function findLongestWord(str){
//     str = str.split(" ");
//     let maxWord = "";
//     let maxWordLength = 0;
//     for(let el of str){
//         if(el.length>maxWordLength){
//             maxWordLength = el.length;
//             maxWord = el
//         };
//     };
//     return maxWord;
// }

// // Вызовы функции для проверки
// console.log(
//     findLongestWord("The quick brown fox jumped over the lazy dog")
//   ); // вернет 'jumped'

//   console.log(
//     findLongestWord("Google do a roll")
//   ); // вернет 'Google'

//   console.log(
//     findLongestWord("May the force be with you")
//   ); // вернет 'force'

/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/
// function findLargestNumber(numbers){
//     let maxNumber = 0;
//     for(el of numbers){
//         if(el>maxNumber){
//             maxNumber = el;
//         }
//     }
//     return maxNumber;
// }
// // Вызовы функции для проверки
// console.log(
//     findLargestNumber([1, 2, 3])
//   ); // вернет 3

//   console.log(
//     findLargestNumber([27, 12, 18, 5])
//   ); // вернет 27

//   console.log(
//     findLargestNumber([31, 128, 14, 74])
//   ); // вернет 128

/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

// const uniqueNumbers  = [2, 1, 4, 9];
// function addUniqueNumbers(){
//     for (let el of arguments){
//         if(!uniqueNumbers.includes(el)){
//             uniqueNumbers.push(el);
//         }
//     }
// }

// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]

/*
  Напишите функцию filterFromArray(arr), которая 
  объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Функция возвращает новый массив, который содержит только 
  те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
*/

// const filterFromArray = function(arr) {
// let copyOfArr = arr.slice();
// let indexToDel = -1;
//   for(let i = 1; i<arguments.length;i++){
//     indexToDel = copyOfArr.indexOf(arguments[i]);
//     while(indexToDel !== -1){
//         copyOfArr.splice(indexToDel,1);
//         indexToDel = copyOfArr.indexOf(arguments[i]);
//     }
//   }
//   return copyOfArr;
// };

// // Вызовы функции для проверки
// console.log(
//   filterFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // [1, 3, 5]

// console.log(
//   filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17]

//  #1
// Напишите ф-ю которая принисает число и возвращает его зеркальную копию.

// function reverseNumber(number){
//    return Number(String(number).split("").reverse().join(""));
// };

// const reverseNumber = (number) => {
//     return Number(String(number).split("").reverse().join(""));
//  };

//  console.log(reverseNumber(12)) // 21
//  console.log(reverseNumber(567)) // 765
//  console.log(reverseNumber(1004)) // 4001

// #2
// Напишите ф-ю которая принемает строку и делает из нее строку в стиле capitalize.

// function capitalize(str){
//    arr = str.split(" ");
//    let strCapitalize = [];
//     for(element of arr){
//         strCapitalize.push(element[0].toUpperCase() + element.substr(1))
//     }
//     return strCapitalize.join(" ");
// }

// Вариант №2
// function capitalize(str){
//     let sTr= str.toLowerCase().split(' ');
//    let modArr = sTr.map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase())).join(' ');
//     return modArr;
//  }

// console.log(capitalize('write javaScript function')); //Write JavaScript Function
// console.log(capitalize('the quick brown fox')); //The Quick Brown Fox
// console.log(capitalize('go to the editor')); //Go To The Editor

// #3
// Напишите ф-ю которая принемает строку и возвращает количество гласных букв в строке

// function countOfVowels(str){
//     let Vowels = ['E','Y','U','I','O','A'];
//     let numberOfVowels=0;
//     for (let el of str){
//         if(Vowels.includes(el.toUpperCase())){
//             numberOfVowels++;
//         }
//     }
//     return numberOfVowels;
// }

// console.log(countOfVowels('The quick brown fox')) // 5
// console.log(countOfVowels('Example string')) // 4
// console.log(countOfVowels('Go to the editor')) // 6

//#4
// Напишите ф-ю которая принимает строку и букву и возвращает количество этой буквы в строке

// function countLetter(str, letter){
//     let countLetter=0;
//     for(el of str){
//         if(el === letter){
//             countLetter++;
//         }
//     }
//     return countLetter;
// }
//  console.log(countLetter('w3school.com', 'o')) // 3

// #5 Напишите ф-ю которая переводит rgb цвет в hex цвет
// Здесь поможет Number() i toString()

// function convertColor(str){
//     let tmpstr;
//     result = "#"
//     tmpstr=str.slice(4,-1);
//     tmpstr=tmpstr.split(",");
//     for(el of tmpstr){
//         result += Number(el).toString(16);
//     }
//     return result;
// }
// console.log(convertColor('rgb(255,255,255)')) // #ffffff
// console.log(convertColor('rgb(0,0,0)')) //#000000
// console.log(convertColor('rgb(66, 134, 244)')) //#4286f4

// #6
// Дан непустой массив целых чисел (X). В этой задаче вам нужно вернуть массив, состоящий только из неуникальных элементов данного массива. Для этого необходимо удалить все уникальные элементы (которые присутствуют в данном массиве только один раз). Для решения этой задачи не меняйте оригинальный порядок элементов. Пример: [1, 2, 3, 1, 3], где 1 и 3 неуникальные элементы и результат будет [1, 3, 1, 3].

// function nonUniqueElements(arr){
//     let arrNonUniq = [];
//     for(let i=0;i<arr.length;i++){
//         let arrNew = arr.slice();
//         arrNew.splice(i,1);
//         if(arrNew.includes(arr[i])){
//             arrNonUniq.push(arr[i]);
//         }
//     }
//     return arrNonUniq;
// }

// console.log(nonUniqueElements([1, 2, 3, 1, 3])) // [1, 3, 1, 3]
// console.log(nonUniqueElements([1, 2, 3, 4, 5])) // []
// console.log(nonUniqueElements([5, 5, 5, 5, 5])) // [5, 5, 5, 5, 5]
// console.log(nonUniqueElements([10, 9, 10, 10, 9, 8])) // [10, 9, 10, 10, 9]
