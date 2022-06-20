
const APIKEY = "secret"
//다시 시작하면 복호화 
const requestUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`

fetch(requestUrl)
    .then(response => response.json())
    .then(response => { console.log(response) }) 
