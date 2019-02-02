/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

function createMovieCard(){
  let movieDiv = document.createElement("div");
  movieDiv.classList.add("movie");
  let img = document.createElement("img");
  img.classList.add("movie__image");
  img.src = "http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg";
  img.alt = "movie image";
  movieDiv.append(img);
  let movieBodyDiv = document.createElement("div");
  movieBodyDiv.classList.add("movie__body");
  movieDiv.append(movieBodyDiv);
  let movieTitleH2 = document.createElement("h2");
  movieTitleH2.classList.add("movie__title");
  movieTitleH2.textContent = "The Godfather";
  movieBodyDiv.append(movieTitleH2);
  let movieDescriptionP = document.createElement("p");
  movieDescriptionP.classList.add("movie__description");
  movieDescriptionP.textContent = "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.";
  movieBodyDiv.append(movieDescriptionP);
  let movieDateP = document.createElement("p");
  movieDateP.classList.add("movie__date");
  movieDateP.textContent = "Released: 1972-03-14";
  movieBodyDiv.append(movieDateP);
  let movieRatingP = document.createElement("p");
  movieRatingP.classList.add("movie__rating");
  movieRatingP.textContent = "Rating: 8.6";
  movieBodyDiv.append(movieRatingP);
  return movieDiv;
}
const body = document.querySelector("body");
body.prepend(createMovieCard());