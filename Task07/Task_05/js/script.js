/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

const inputArray = Array.from(document.querySelectorAll("input"));

function collectInputData(inputs) {
  return inputs.reduce(
    (acc, el) => (el.hasAttribute("checked") ? acc.concat(el.value) : acc),
    []
  );
}
console.log(collectInputData(inputArray));
