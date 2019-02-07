let date = new Date();
console.log(date);
// Mon Mar 19 2018 16:51:32 GMT+0200 (FLE Standard Time)

let dateSet = new Date("March 4, 2017");
console.log(dateSet);

let date7 = new Date(2000, 5, 8, 12, 0, 0, 0);
console.log(date7);
// Thu Jun 08 2000 12:00:00 GMT+0300 (FLE Daylight Time)

let dateMS = new Date(1000000);
console.log(dateMS);
// Thu Jan 01 1970 02:16:40 GMT+0200 (FLE Standard Time)

let dateNow = Date.now();
console.log(dateNow); // 1521471595501

date = new Date();
console.log("Date: " + date);
console.log("getDate(): " + date.getDate());
console.log("getDay(): " + date.getDay());
console.log("getMonth(): " + date.getMonth());
console.log("getFullYear(): " + date.getFullYear());
console.log("getHours(): " + date.getHours());
console.log("getMinutes(): " + date.getMinutes());
console.log("getSeconds(): " + date.getSeconds());
console.log("getMilliseconds(): " + date.getMilliseconds());
console.log("getTime(): " + date.getTime());

date = new Date();

// формат вывода
const options = {
  weekday: 'long',
  year    : 'numeric',
  month   : 'short',
  day     : 'numeric',
  hour    :'2-digit',
  minute  :'2-digit'
};

// Украина
let localeUk = date.toLocaleString('Uk-uk', options);
console.log(localeUk); // понеділок, 19 бер. 2018 р., 17:42

let localeUs = date.toLocaleString("en-US", options);
console.log(localeUs); // Monday, Mar 19, 2018, 5:43 PMtoString, toDateString, toTimeString 

console.log(date.toString());
console.log(date.toDateString());
console.log(date.toTimeString());


let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("success!"));
    }, 2000);
  });


  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // Если все ок, то вызываем resolve и передаем данные
      resolve("Data passed into resolve function :)");
  
      // Если что-то не так, вызваем reject и передаем ошибку
      // reject("Error passed into reject function :(")
    }, 2000);
  });
  
  // выполнится мгновенно
  console.log("BEFORE promise.then");
  
  const onResolve = data => {
    console.log("INSIDE promise.then - onResolve");
    console.log(data); // "Data passed into resolve function :)"
  };
  
  const onReject = error => {
    console.log("INSIDE promise.then - onReject");
    console.log(error); // "Error passed into reject function :("
  };
  
  promise.then(
    // будет вызвана через 2 секунды, если обещание выполнится успешно
    onResolve,
    // будет вызвана через 2 секунды, если обещание выполнится с ошибкой
    onReject
  );
  
  // выполнится мгновенно
  console.log("AFTER promise.then");