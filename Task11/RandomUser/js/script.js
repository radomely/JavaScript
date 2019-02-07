function handle(obj){
    const source = document.querySelector('#template').innerHTML.trim();
    const templateFunc = Handlebars.compile(source);
    const markup = templateFunc(obj);
    const container = document.querySelector('.content-placeholder');
    container.innerHTML = markup;
    const ul = document.querySelector("#values_list");
    const ulAll = document.querySelectorAll("li");
    const userTitle = document.querySelector("#user_title");
    const userValue = document.querySelector("#user_value");
    ul.addEventListener("mouseover", hendleMouseover);
    function hendleMouseover(event){
        if (event.target.nodeName !== "LI") return;
        ulAll.forEach(element => {
            element.classList.remove("active");
        });
        event.target.classList.add("active");
        userTitle.textContent = event.target.dataset.title;
        userValue.textContent = event.target.dataset.value;
    }
}
fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {data.results[0].dob.date = data.results[0].dob.date.substring(8,10) + "/" + data.results[0].dob.date.substring(5,7) + "/" + data.results[0].dob.date.substring(0,4); return data})
    .then(data => handle(data.results))
    .catch(err => console.log(err));