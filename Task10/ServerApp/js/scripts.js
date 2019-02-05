let ul = document.querySelector(".todo-list");
let form = document.querySelector(".form");
let input = document.querySelector(".input");

fetch("http://localhost:3001/tasks")
    .then(res =>res.json())
    .then(data=>{
        localStorage.setItem("tasks", JSON.stringify(data));
        renderItems(data)
    })
    .catch(err => {
        let storageData = JSON.parse(localStorage.getItem("tasks") || []);
        renderItems(storageData);
        console.log(err)
    })

    function renderItems (arr){
        let result = arr.reduce((acc , el)=> acc + `<li
        class="todo-list__item">
        ${el.text}
        <button
          class="btn todo-list__item-remove" data-id=${el.id}>
          <i class="fa fa-times" data-id=${el.id}></i>
        </button>
      </li>`, "");
      ul.innerHTML += result;
    }

    function createTask (event){
        event.preventDefault();
        if(!input.value){
            return;
        }
        let task = {
            text: input.value,
        }
        fetch("http://localhost:3001/tasks", {
            method: "post",
            body: JSON.stringify(task),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
        })
        .then(res=> res.json())
        .then(data => {
            let arr = JSON.parse(localStorage.getItem("tasks"));
            arr.push(data); //localStorage.setItem("task", JSON.stringify(data))
            localStorage.setItem("tasks", JSON.stringify(arr));
            renderItems([data])
        })
        .catch(err => console.log(err))
        // console.log(task);
        form.reset();
    }

    function deleteTask (event){
        let id = event.target.dataset.id;
        fetch(`http://localhost:3001/tasks/${id}`,{method: "delete"})
        .then(res => res.json())
        .then(data => {
            event.target.closest("li").remove();
            // console.log(event.target.closest("li"));
            // console.log(data)
            let storageData = JSON.parse(localStorage.getItem("tasks"));
            let filteredArr = storageData.filter(el=>el.id !== Number(id));
            localStorage.setItem("tasks", JSON.stringify(filteredArr));
        })
        .catch(arr => console.log(err))
    }

    ul.addEventListener("click", deleteTask);
    form.addEventListener("submit", createTask);