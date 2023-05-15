const bars = document.querySelector(".fa-bars");
const cross = document.querySelector(".fa-xmark");

bars.addEventListener("click",()=>{
   
    
 cross.style.display="block"
 bars.style.display="none"
   
})

cross.addEventListener("click",()=>{
    cross.style.display="none"
    bars.style.display="block"
})

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieBox = document.querySelector('#movie-box');




const getMovies = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    showMovies(data.results)
    
}



const showMovies = (data) => {
    movieBox.innerHTML = "";
    data.forEach(element => {
        const box = document.createElement("div");
        box.classList.add("col-md-3");
        box.innerHTML = `
        
        <div class="card">
        <img src="${IMGPATH + element.poster_path}" class="card-img-top" alt="..." onclick="view()">
        <div class="card-body">
        <h5 class="card-title">Title: ${element.original_title}</h5>
        <h4>Rating: ${element.vote_average}</h4>
        <h5>Release Date: ${element.release_date}</h5>
        <small><p>Overview: ${element.overview}</p></small>
                            
    </div>  
        </div>
                   

        
        
        `;

        movieBox.appendChild(box)
    });
}


getMovies(APIURL);

document.querySelector('#search').addEventListener('keyup', function (event) {
    if (event.target.value != "") {
        getMovies(SEARCHAPI + event.target.value)
    } else {
        getMovies(APIURL)
    }
})

