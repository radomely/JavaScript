// last fm api https://www.last.fm/ru/api
// last.fm key 412e51e107155c7ffabd155a02371cbd
// "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=412e51e107155c7ffabd155a02371cbd&format=json"
// youtrube iframe
// <iframe src={`https://www.youtube.com/embed/${videoID}?autoplay=1`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
// </iframe>
// youtube search API https://developers.google.com/youtube/v3/docs/search/list
// "https://www.googleapis.com/youtube/v3/search?maxResults=25&part=snippet&key=AIzaSyAGwWGzULP4Q9plH7a9ATpZW_8o2ZgJOH8&q=surfing&type=video"
// yputube key AIzaSyAGwWGzULP4Q9plH7a9ATpZW_8o2ZgJOH8 (edited) 

let table = document.querySelector(".tableOfTrack");
let body = document.querySelector("body");

fetch("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=412e51e107155c7ffabd155a02371cbd&format=json")
    .then(res => res.json())
    .then(data=>{
        getLastFM (data.tracks.track);
    })
    .catch(err => {
        console.log(err)
    })

   function getLastFM (arr){
       let resultString = "";
       for(el of arr){
            resultString += `<tr><td><img src="${el.image[0]["#text"]}" alt=""></td><td>${el.name}</td><td>${el.artist.name}</td><td><button>Play in Youtube</button></td></tr>`;
       }
       table.innerHTML = resultString;
   }
   function playVideo(data){
       console.log(data.items[0].id.videoId)
    let videoID = data.items[0].id.videoId;
    body.innerHTML = '<iframe src=' + `https://www.youtube.com/embed/${videoID}?autoplay=1` + ' frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>';
   }

table.addEventListener("click", playVideoYoutube);
function playVideoYoutube({target}){
    const surfing = target.parentElement.parentElement.childNodes[1].textContent + target.parentElement.parentElement.childNodes[2].textContent;
    fetch(`https://www.googleapis.com/youtube/v3/search?maxResults=1&part=snippet&key=AIzaSyAGwWGzULP4Q9plH7a9ATpZW_8o2ZgJOH8&q=${surfing}&type=video`)
    .then(res => res.json())
    .then(data=>{
        playVideo(data);
    })
    .catch(err => {
        console.log(err)
    })
}

// items[""0""].id.videoId