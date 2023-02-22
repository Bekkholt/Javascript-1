const url = "https://wizard-world-api.herokuapp.com/Houses";
const resultsContainer = document.querySelector(".results");

async function callApi(){
        try {
        resultsContainer.innerHTML += `<div class="loader"></div>`
        const response = await fetch(url);
        const json = await response.json();

        const houses = json;

        resultsContainer.innerHTML = "";

        houses.forEach(function(house) {
                resultsContainer.innerHTML += `<a href="details.html?id=${house.id}" class="card">
                                                        <h3 class="name">${house.name}</h3>
                                                        <p class="properties">Animal: ${house.animal}</p>
                                                        <p class="properties">Colours: ${house.houseColours}</p>
                                                        <p class="properties"> Element: ${house.element}</p>
                                                </a>`;
                                        });
        } catch (error) {
                resultsContainer.innerHTML = message("error", error);
        }
}

callApi(url);