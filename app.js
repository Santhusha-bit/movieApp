const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const movieList = document.getElementById("movie-list");

function getMovies(searchTerm) {
  const apiKey = "79b3c7cb56450f7a7d85e0cdb191dad5";
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      movieList.innerHTML = "";
      data.results.forEach((movie) => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
                    <h2>${movie.title}</h2>
                    <p>${movie.overview}</p>
                `;
        movieList.appendChild(movieElement);
      });
    })
    .catch((error) => console.log(error));
}

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value;
  getMovies(searchTerm);
});

searchInput.addEventListener("keydown", () => {
  const searchTerm = searchInput.value;
  getMovies(searchTerm);
});
