const recommendedBtn = document.getElementById("recommended")
const preferredGenres = document.getElementById("genre");
const preferredRating = document.getElementById("rating");
const preferredYears = document.getElementById("year");
const preferredList = document.getElementById("movie-list")


recommendedBtn.addEventListener('click', (event) => {
    event.preventDefault();
    async function logJSONData() {
        const recommendations = [];
        const response = await fetch("./data.json");
        const jsonData = await response.json();
        jsonData.forEach(movie => {
            if (movie.genres.includes(preferredGenres.value) || movie.vote_average == preferredRating.value || movie.release_date.split("-")[0] == preferredYears.value) {
                recommendations.push(movie);
            }
        });

        preferredList.innerHTML = ""; // clear the previous content of preferredList

        recommendations.forEach(movie => {
            const list = `
            <td>${movie.id}</td>
            <td>
                <div class="d-flex">
                    <img src="${" https://image.tmdb.org/t/p/w45" + movie.poster_path}" alt="${movie.title}">
                    <div>
                        <div><span>${movie.title}</span></div>
                        <div><span class="badge text-bg-primary">${movie.certification}</span></div>
                    </div>
                </div>
            </td>
            <td>${movie.release_date.split("-")[0]}</td> `

            preferredList.innerHTML += list; // append each card to preferredList
        });
    }
    logJSONData()
});



