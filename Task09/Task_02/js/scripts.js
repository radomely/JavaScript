/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Используйте возможности объекта Date для работы со временем.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

function getFormattedTime(time) {
  let date = new Date(time);
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let milliseconds = date.getMilliseconds();
  minutes = minutes>=10? minutes : "0" + minutes;
  seconds = seconds>=10? seconds : "0" + seconds;
  milliseconds = Math.floor(milliseconds/100);
  return (minutes + ":" + seconds + "." + milliseconds);
  }
  
  console.log(
    getFormattedTime(1523621052858)
  ); // 04:12.8
  
  console.log(
    getFormattedTime(1523621161159)
  ); // 06:01.1
  
  console.log(
    getFormattedTime(1523621244239)
  ); // 07:24.2
   
  
   