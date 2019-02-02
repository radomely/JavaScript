/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];

function createPostCard(post){
  let movieDiv = document.createElement("div");
  movieDiv.classList.add("movie");
  let img = document.createElement("img");
  img.classList.add("movie__image");
  img.src = post.img;
  img.alt = "movie image";
  movieDiv.append(img);
  let movieBodyDiv = document.createElement("div");
  movieBodyDiv.classList.add("movie__body");
  movieDiv.append(movieBodyDiv);
  let movieTitleH2 = document.createElement("h2");
  movieTitleH2.classList.add("movie__title");
  movieTitleH2.textContent = post.title;
  movieBodyDiv.append(movieTitleH2);
  let movieDescriptionP = document.createElement("p");
  movieDescriptionP.classList.add("movie__description");
  movieDescriptionP.textContent = post.text;
  movieBodyDiv.append(movieDescriptionP);
  let movieLinkP = document.createElement("p");
  movieLinkP.classList.add("movie__link-p");
  movieBodyDiv.append(movieLinkP);
  let movieLinkA = document.createElement("a");
  movieLinkA.classList.add("movie__link");
  movieLinkA.textContent = post.link;
  movieLinkA.href = post.link;
  movieLinkP.append(movieLinkA);
  return movieDiv;
};

function createCards(posts){
  const result = document.createElement("div");
  result.classList.add("result");
  for(let i=0;i<posts.length;i++){
    result.append(createPostCard(posts[i]));
  }
  return result;
};

const root = document.querySelector("body");
root.prepend(createCards(posts));