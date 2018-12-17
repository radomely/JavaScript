/*
  - Объявите две переменные: guest и name
  - В переменную name запишите строку 'Mango'
  - Скопируйте значение из name в guest
  - Выведите в консоли значение переменной guest (должно вывести 'Mango')
*/
"use strict";

let guest, name;
name = 'Mango';
guest = name;
console.log(guest);

/*
  Есть три переменные содержащие день, месяц, и год. 
  Необходимо получить строку день\месяц\год
  в формате xx\xx\xxxx
  
  Найдите ошибку в записи значания для переменной date, 
  результат будет выведен в консоль и равен комментарию 
  напротив console.log()
*/

const day = "02";
const month = 10;
const year = 2017;

const date = day + "\\" + month + "\\" + year;

console.log(date); // 02\10\2017

/* 
  Напишите скрипт который:
  - при загрузке страницы спрашивает имя пользователя (используйте prompt)
  - после того как было введено имя показывает alert с тем что ввели в prompt
*/

const yourName = prompt('Please enter your name!');
alert(yourName);

/*
  Есть три переменные name, date и roomType, содержащие 
  имя гостя, дату его прибытия на отдых и тип комнаты отеля.
  
  Используя шаблонные строки необходимо записать 
  в перменную message сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
  
  Найти ошибки в коде и исправить их, при верном решении 
  в консоль будет выведена строка идентичная той что 
  напротив console.log
*/

const name2 = 'Mango';
const date2 = '14/08/2031';
const roomType = 'люкс';

const message = `${name2} прибывает на отдых ${date2} в ${roomType}.`;

console.log(message); // Mango прибывает на отдых 14/08/2031 в люкс.


/*
  Есть 3 переменные в которых хранится  размер составляющих 
  блочной модели в формате Npx, где N это целое число.
  
  Используя эти переменные, запишите в переменную totalWidth 
  общую ширину блока в формате Npx.
  
  К примеру "сумма" '20px' и '30px' будет равна '50px'.
  
  Если все верно, то в консоли будет выведена строка '125px'
*/

const padding = "20px";
const border = "5px";
const contentWidth = "100px";

let totalWidth;

//totalWidth = Number(padding) + Number(border) + Number(contentWidth) + 'px';
totalWidth = parseInt(padding)+parseInt(border)+parseInt(contentWidth) + 'px';

console.log(totalWidth); // '125px'

/*
  Напишите скрипт который: 
  
  - Через prompt cпрашивает 'Какой сейчас год?'
  - Если посетитель вводит 2018 - показывать alert со строкой 'Все верно!'
  - Если что-то другое — показывать alert 'Но ведь на вдоре 2018!'
  
  PS: используйте конструкцию if..else.
*/ 

const yourYear = prompt('Какой сейчас год?');
if (yourYear=="2018")
alert('Все верно!');
else
alert('Но ведь на вдоре 2018!');

console.log(true && 2);
console.log("KK" && "Hello");


const monthName = "May";
let season;
console.log(season);
 season="";
switch (monthName) {
  case "June":
    season += "Summer";
  case "May":
    season += "Spring";
    break;
  case "September":
    season += "Autumn";
    break;
  default:
    season += "Winter";
}
console.log(season);

/*
  Напишите скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Приходите еще!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
  
  PS: используйте конструкцию if..else.
*/ 
let intNumber = prompt('Введите произвольное целое число');
if(intNumber==null){
    alert('Приходите еще!');
}else if(Number.parseInt(Number(intNumber))){
    alert('Спасибо!')
}else{
    alert('Необходимо было ввести целое число!');
}

/* 
  В переменную num записывается случайное число.
  
  Используя ветвления запишите в переменную type строку:  
    - "even" если num четное
    - "odd" если num не четное

  PS: попробуйте использовать тернарный оператор
*/

const num = Number.parseInt(Math.random() * 100);

let type=num%2?"odd":"even";

console.log(`${num} is ${type}`);

/* 
  Время состоит из: 
    часов(hours)
    минут (minutes)
    секунд(seconds).
  
  Время должно всегда выводиться в формате xx:xx:xx
  Например: 01:12:04 или 14:03:45
  
  Составляющие времени не гарантированно состоят из 2-х цифр!
  
  Напишите скрипт который проверяет каждую составляющую,
  тоесть значения переменных hours, minutes, seconds 
  и добавлят впереди 0 если необходимо.
*/

let hours = 7;
let minutes = 3;
let seconds = 42;

hours=hours<10?"0"+hours:hours;
minutes=minutes<10?"0"+minutes:minutes;
seconds=seconds<10?"0"+seconds:seconds;

const time = `${hours}:${minutes}:${seconds}`;

console.log('Time is: ', time);

/* 
  Создайте срипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то вывести 
  alert с текстом 'очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, 
  вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, 
  в зависимости от числа, используя switch, 
  вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/
let switchNumber = prompt('Введите число от 1 до 5');
if(switchNumber==null){
    alert('очень жаль, приходите еще!');
}else
    switch (switchNumber) {
        case "1":
            alert("Каталог хостелов");
            break;
        case "2":
            alert("Каталог бюджетных отелей");
            break;
        case "3":
            alert("Каталог отелей ***");
            break;
        case "4":
            alert("Каталог отелей ****");
            break;
        case "5":
            alert("Каталог лучших отелей");
            break;
        default:
            alert('Неверный ввод, возможные варианты 1-5!');
    }