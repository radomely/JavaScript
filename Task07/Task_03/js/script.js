/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

const elements = ["HTML", "CSS", "JavaScript", "React", "Node"];
let listUL = document.querySelector(".list");
for (el of elements) {
  const li = document.createElement("li");
  li.textContent = el;
  listUL.append(li);
}
