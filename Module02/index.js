'use strict';
// 1) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

// let a = ['a', 'b', 'c'];
// let b = [1, 2, 3];
// const newArr = a.concat(b);
// console.log(newArr);

// 2) Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// a)
// let a = ['a', 'b', 'c'];
// a.push(1);
// a.push(2);
// a.push(3);
// console.log(a);
// b)
// let a = ['a', 'b', 'c'];
// a.splice(3,0,1,2,3);
// console.log(a);

// 3) Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// const newArr = a.concat(b);
// console.log(newArr);

// 4) Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
// let arrayOne = [1, 2, 3];
// arrayOne.reverse();
// console.log(arrayOne);


// 5) Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// a)
// let a = [1, 2, 3];
// a.splice(0,0,4,5,6);
// console.log(a);
// b)
// let a = [1, 2, 3];
// a.unshift(4,5,6);
// console.log(a);


// 6) Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let a = [1, 2, 3];
// a.splice(0,0,4,5,6);
// console.log(a);
// b)
// let a = [1, 2, 3];
// a.unshift(4,5,6);
// console.log(a);

// 7)  Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// let a = ['js', 'css', 'jq'];
// alert(a[0]);

// 8) Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// a)
// let a = ['js', 'css', 'jq'];
// alert(a[2]);
// b)
// let a = ['js', 'css', 'jq'];
// console.log(a[a.length-1]);

// 9) Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// let a = [1, 2, 3, 4, 5];
// let b = a.slice(0, 3);
// console.log(b);


// 11) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// let a = [1, 2, 3, 4, 5];
// a.splice(1,2);
// console.log(a);


// 12)  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

// let a = [1, 2, 3, 4, 5];
// let deleted = a.splice(1,3);
// console.log(deleted);


// 13) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]

// let a = [1, 2, 3, 4, 5];
// a.splice(3, 0, 'a', 'b', 'c');
// console.log(a);


// 14) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');
// console.log(arr);


// 15)  Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let a = 'abcde';
// if(a[0] === 'a'){
//   console.log('Yes');
// }else{
//   console.log('No No')
// }


// 16)   Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let str = '12345';
// if(str[0] == 1 || str[0] == 2 || str[0] == 3){
//   alert('ДА');
// }else{
//   alert('NO!!!')
// }


// 17)   Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.

// let a = "123";
// alert(Number(a[0]) + Number(a[1]) + Number(a[2]));


// 18)  Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let a = '123321';

// if(Number(a[0]) + Number(a[1]) + Number(a[2]) === Number(a[3]) + Number(a[4]) + Number(a[5])){
//   alert('Zaebis');
// }else{
//   alert('Ne zaebis');
// }


// Задание 1. Дан массив mas. Выведите его в формате индекс элемента — значение (через три дефиса). Каждый элемент с новой строки.

//  let mas = [15, 'hello', 'trump', 23, 'world', 999, 176];


//  console.log((mas.indexOf(15))+ '---' + mas[0]);
//  console.log((mas.indexOf('hello'))+ '---' + mas[1]);
//  console.log((mas.indexOf('trump'))+ '---' + mas[2]);
//  console.log((mas.indexOf(23))+ '---' + mas[3]);
//  console.log((mas.indexOf('world'))+ '---' + mas[4]);
//  console.log((mas.indexOf(999))+ '---' + mas[5]);
//  console.log((mas.indexOf(176))+ '---' + mas[6]);





// Задание 2. Дан массив mas. Выведите его в формате индекс элемента — значение (через дефис). Каждый элемент с новой строки. Выводить нужно те элементы, значение которых больше пяти (5).
// но надо лделать циклами

// var mas = [2, 3, 4, 5, 6, 4, 77, 32, 4];

// if(mas[0] > 5){
//     console.log((mas.indexOf(2)) + '-' + mas[0]);
// }if(mas[1] > 5){
//     console.log((mas.indexOf(3)) + '-' + mas[1]);
// }if(mas[2] > 5){
//     console.log((mas.indexOf(4)) + '-' + mas[2]);
// }if(mas[3] > 5){
//     console.log((mas.indexOf(5)) + '-' + mas[3]);
// }if(mas[4] > 5){
//     console.log((mas.indexOf(6)) + '-' + mas[4]);
// }if(mas[5] > 5){
//     console.log((mas.indexOf(4)) + '-' + mas[5]);
// }if(mas[6] > 5){
//     console.log((mas.indexOf(77)) + '-' + mas[6]);
// }if(mas[7] > 5){
//     console.log((mas.indexOf(32)) + '-' + mas[7]);
// }if(mas[8] > 5){
//     console.log((mas.indexOf(4)) + '-' + mas[8]);
// }

// 3) Клонирование массива  - напишите скрипт, который копирует массив не изменяя оригинал - ['Капуста', 'Репа', 'Редиска', 'Морковка']

// let mas = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// console.log(mas.slice());


// 4) Преобразование массива в строку - Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой.

// let mas = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// console.log(mas.join(','));


// 5) Получить последние элементы массива - Напишите код, который возвращает фрагмент массива, содержащий последние '5' элементов массива.
// let mas = ['Капуста', 'Репа', 'Редиска', 'Морковка', ',Bananas', 'apple', 'mango', 'cucumber'];
// console.log(mas.slice(length - 5));


// 6) Разворачивание массива - напишите скрипт который развернёт массив.

// let mas = ['Капуста', 'Репа', 'Редиска', 'Морковка', ',Bananas', 'apple', 'mango', 'cucumber'];

// console.log(mas.reverse());

// *Задачи на приемы работы с циклами на JavaScript*
// 1) С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.

// let str = '';

// for(let i = 1; i < 10; i += 1){
//     str = str + i;
// }
// console.log(str);



// 2)  С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.
// let str = '';
// for(let i = 9, min = 0; i > min; i -=1) {
//     str = str + i;
//     console.log(str);
// }


// 3) С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.

// let str = '';
// for(let i = 1, max = 10; i < 10; i++){
//     str = str + i + '-';
// }
// console.log('-' + str);


// ***4) Сумма элементов двух массивов - Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.
// [1, 2, 3, 4, 5];
// [4, 5, 6];

// let a = [1, 2, 3, 4, 5];
// let b = [4, 5, 6];
// let c = [];
// let max = [];
// let min = [];
// if (a.length > b.length) {
//    max = a;
//    min = b
// } else {
//    max = b;
//    min = a;
// };
// for (let i = 0; i < max.length; i++){
//    if (min[i]===undefined) {
//        min[i]=0;
//    };
//    c[i] = a[i]+b[i];
// };
// console.log(c)


// 5) Дан массив mas. Выведите его в формате индекс элемента — значение (через три дефиса). Каждый элемент с новой строки.
// {
//     mas = [15, 'hello', 'trump', 23, 'world', 999, 176];
// }

// let mas = [15, 'hello', 'trump', 23, 'world', 999, 176];

// for(let i = 0; i < mas.length; i +=1){
//     console.log(i + '---'+ mas[i]);
// }

// 6) Дан массив mas. Выведите его в формате индекс элемента — значение (через дефис). Каждый элемент с новой строки. Выводить нужно те элементы, значение которых больше пяти (5).
// {
//     var mas = [2, 3, 4, 5, 6, 4, 77, 32, 4];
// }

// var mas = [2, 3, 4, 5, 6, 4, 77, 32, 4];

// for(let i = 0; i<mas.length; i +=1){
//     if(mas[i]>5){
//         console.log(i + '-' + mas[i] );
//     }
// }


// 7) создайте массив из чисел, примерно 5-10 чисел. Посчитайте сумму числе в массиве. Распечатайте сперва все исходные данные, потом распечатайте сумму чисел в массиве.

// var mas = [2, 3, 4, 5, 6, 4, 77, 32, 4, 6, 19 , 30, 8, 44];
// let b = 0;
// for(let i=0; i<mas.length;i+=1){
//     b=mas[i]+b;
// }console.log(b);


// 8) Создайте массив из чисел, примерно 5-10 чисел. Посчитайте массив, в котором каждый элемент это разница между соседними элементами исходного массива. Например первый элемент результирующего массива это разница между вторым и первым элементом исходного массива, второй элемент результирующего массива это разница третьего и второго элемент исх. массива. Распечатайте сперва исходные данные, потом распечатайте результирующим массив.

// let a = [2, 3, 4, 5, 6, 4, 77, 32, 4, 6, 19 , 30, 8, 44];
// let b = [];

// for(let i = 0; i<a.length-1; i+=1){
//     b[i] = a[i+1]-a[i];
//     console.log(b);
// }


// 9) Удалить повторяющиеся элементы массива - верните массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).
// ["php", "php", "css", "css",
//  "script", "script", "html", "html", "java"
// ];

// let a = ["php", "php", "css", "css",
//  "script", "script", "html", "html", "java"
// ];
// let b = [];
// for(let i=0; i < a.length; i +=1){
//     if(a[i] == a[i+1]){
//         a.splice(i,1);
//         b.push(a[i]);
//     }  
// }
// console.log(a);
// console.log(b);


// 10) Переместить элемент массива из одной позиции в другую - замените два соседних элемента в массиве.





// 11) Массив указанной длины - напишите скрипт который генерирует массив заданной длины 4, заполненный целыми числами, где каждое число больше предыдущего на единицу.
// let a = [];

// for(let i =0; i < 4; i++){
//     a[i] = i;
//     console.log(a[i]);
// }
// console.log(a);


// 12)     Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

// let a = [2, 3, 4, 5, 6, 4, 77, 32, 4, 6, 19 , 30, 8, 44];
// let sum = 0;

// for(let i = 0; i < a.length; i++){
//     sum += a[i];
//     if(sum > 10){
//         console.log('Чтобы в сумме получилось больше 10ти, нужно: ' + (i+1) + ' элемента');
//         break;
//     }
// }




// 13)  Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
// ПИЗДЕЧ Версия!
// let a = [2, 3, 4, 5, 6, 4, 77, 666]
// console.log(a);
// let b = 0;
// let mass = Math.ceil((a.length-1) / 2);
// for(let i = 0; i < mass; i ++){
//     b = a[i];
//     a[i] = a[a.length-(i+1)];
//     a[a.length-(i+1)] = b;
// }
// console.log(a);


// Low vr.
// const a = [2, 3, 4, 5, 6, 4, 77]
// for(let i = 0; i < a.length; i ++){
//     a.splice(i,0, a.pop());
// }
// console.log(a);


// Dima vr.
// var mas = [2, 3, 2, 5, 1, 4, 77, 32, 4];
// var mas2 = [];
//    for (let i = 0; i < mas.length; i++) {
//    mas2.unshift( mas[i]);
//    }


// Nadin vr
// const a = [2, 3, 4, 5, 6, 4, 77];
// const b = [];
// for(let i = a.length-1; i >= 0; i --){
//     b.push(a[i]);
// }
// console.log(a);
// console.log(b);

// *На цикл в цикле.* 
// 12) Выведите на экран таблицу умножения (как в школьной тетради).

// for(let i = 1; i < 10; i++){
//     for(let j = 1; j < 10; j++){
//         console.log(`${i} * ${j} = ` + (i * j));
//     }
// }



// 13) Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее. Показать решение.




// 14) Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
    // let a = [];
    // let p = Number(prompt('Введите число'));
    // a.push(prompt('введите букву: '));
    // for(let i = 1; i < p; i++){
    //     a[i] = a[i-1] + a[0];
    // }
    // console.log(a);
   
    
// Второй способ
// const arr = [];
// for (let i=1; i<=10; i++) {
//     arr.push('x'.repeat(i));
// }
// console.log(arr)


// *Многомерные массивы*
// 15) Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// let mass = [[1, 2, 3], [4, 5], [6]];
// let accum = 0;
// for(let i = 0; i < mass.length; i++){
//     for(let j = 0; j < mass[i].length; j++){
//         accum = accum + mass[i][j];
//         console.log(accum);
//     }
// }
// console.log(accum);
// оператор Макара (ES6)
// let mass = [[1, 2, 3], [4, 5], [6]];
// let b = [...mass[0]];
// console.log(b);
// let accum = 0;
// for(let i = 0; i < mass.length; i++){
//     accum = accum + accum[i];
// }
// console.log(accum);





// 16) Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// let mass = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let accum = 0;
// for(let i = 0; i < mass.length; i++){
//     for(let j = 0; j < mass[i].length; j++){
//         for(let k = 0; k < mass[i][j].length; k++){
//             accum = accum + mass[i][j][k];
//             console.log(accum);
//         }
//     }
// }
// console.log(accum);


// *На флаги*
// 17) Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.
// const a = [2, 3, 4, 5, 6, 4, 77];
// Первый способ
// if(a.includes(5)){
//     console.log('YES');
// }else{
//     console.log('NO');
    
// }
// Tern
// a.includes(5) ? console.log('YES') : console.log('NO');

// Второй способ
// a.indexOf(5) != -1 ? console.log('YES') : console.log('NO');



// 18) Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.
// let num = 15;
// let b = false;
// for(let i = 2; i < num; i++){
//     if(num % i == 0){
//        b = true;
//        break;
//     }
// }
// console.log(b);


// 19) Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'. (edited) 

// const a = [2, 3, 4, 5, 5, 6, 4, 77, 2];
// let hide = 'No';

// for(let i = 0; i < a.length; i++){
//     if(a[i]==a[i+1]){
//         hide = 'yes';
//         break;
//     }
// }
// console.log(hide);








// Убираем уровни с Макаром
// let mass =  [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let b = mass.flat(2);
// console.log(b);


// Задание 1 Вывести числа от 4 до 400 на экран.
// for(let i = 4; i <=400; i++){
//     console.log(i);
// }

// Задание 2 Вывести числа в последовательности: 4 7 10 13 с помощью цикла.

// for(let i = 4; i <=200; i+=3){
//        console.log(i);
// }

// Задание 3 Вывести числа 654 653 652 до нуля.
// for(let i = 654; i >= 0; i--){
//             console.log(i);
// }

// Задание 7 Выведите с помощью цикла коды спецсимволов от 1000 до 2000. 
// Напомню, что спецсимвол получается комбинацией &#число; Например &#1222;

// for(let i=1000; i <=2000; i++){
//     document.write(`&#${i} - ${i}<br> `);
// }


// Задание 8 Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num

// let n = 1000;
// let stop = 50;
// let i = 0;
// do{
//     n = n/2;
//     i++; 
//     console.log(n);
// }
// while(n >= stop);

// console.log(i);

// Второй вариант
// let i;
// for(i = 0; n >= stop; i++){
//     n = n / 2;
//     console.log(n);
// }
// console.log(i);

    

// Задание 9 Найти факториал числа, у пользователя запрашивается число, и в результате выдаётся факториал числа,(если ввести к примеру 5 то результат должен быть равен 120,
//     потому что факториал 5 это 5*4*3*2*1)

// let num = 5;
// let fact = 1;
// for(let i = num; i >= 1; i--){
//     fact = fact*i;
// }
// console.log(fact);



// Задание 10 Найти последовательность Хэеса, то есть пользователь вводит число и в результате должно быть выдано сообщение, с самой последовательностью, количеством шагов,
// которое понадобилось для нахождения этой последовательности, и вершиной последовательности, это максимальное число из этой последовательности. Последовательность
// Хэеса считается так: если ввели число 9, то проверяем его, если оно чётное, делим на 2, если нечетное, умножаем на 3 и прибавляем 1, и так до тех пор пока число не
// будет равно 1.
// 9*3+1=28
// 28/2=14
// 14/2=7
// 7*3+1=22
// 22/2=11
// 11*3+1=34
// 34/2=17
// 17*3+1=52
// 52/2=26
// 26/2=13
// 13*3+1=40
// 40/2=20
// 20/2=10
// 10/2=5
// 5*3+1=16
// 16/2=8
// 8/2=4
// 4/2=2
// 2/2=1

// /*


// let num = Number(prompt('Введите число: '));
// let i = 0;
// while(num != 1){
//     if(num%2 == 0){
//         num /= 2;
//         console.log(num);
        
//     }else{
//         num = num * 3 + 1;
//         console.log(num);
//     }
//     i++;
// }
// console.log(`Наше число итераций: ${i}`);
