
const APIKEY = "secret"
//다시 시작하면 복호화 
const requestUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`
const IMAGE_URL = "https://image.tmdb.org/t/p/w500"
const now_playingURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`
const now_playing = document.getElementById("now-playing");


fetch(requestUrl)
    .then(response => response.json())
    .then(response => {
        response.results.forEach(element => {
            let movie = document.createElement("li");
            let movie_div = document.createElement("div");
            let backdrop = document.createElement("img");
            backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);
            let title = document.createElement("h4");
            title.innerText = element.title;
            let rate = document.createElement("span");
            rate.innerHTML = element.vote_average;
            movie_div.appendChild(backdrop);
            movie_div.appendChild(title);
            movie_div.appendChild(rate);
            movie.appendChild(movie_div);
            now_playing.appendChild(movie);
        });
    }) 
