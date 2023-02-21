const url = "https://wizard-world-api.herokuapp.com/Houses";

const resultsContainer = document.querySelector(".results");

async function callApi(){

        try {

        resultsContainer.innerHTML += `<div class="loader"></div>`

        const response = await fetch(url);

        const json = await response.json();

        console.log(json);

        const houses = json;

        resultsContainer.innerHTML = "";

        houses.forEach(function(house) {
                resultsContainer.innerHTML += `<a href="details.html?id=${house.id}" class="card">
                                                        <h3 class="name">${house.name}</h3>
                                                        <p class="properties">${house.animal}</p>
                                                        <p class="properties">${house.houseColours}</p>
                                                        <p class="properties">${house.element}</p>
                                                </a>`;
            });
        } catch (error) {
                console.log(error);
                resultsContainer.innerHTML = message("error", error);
            }
        }

callApi(url);