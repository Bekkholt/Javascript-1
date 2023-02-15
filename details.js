const url = "https://wizard-world-api.herokuapp.com/Houses/0367baf3-1cb6-4baf-bede-48e17e1cd005";

const resultsContainer = document.querySelector(".results");

async function callApi(){

        try {
        const response = await fetch(url);

        const details = await response.json();

        console.log(details);

        const houses = json;

        createHtml(details);

        resultsContainer.innerHTML += "Houses";

        for (let i =0; i < houses.length; i++) {

        resultsContainer.innerHTML += `<div class="card">
        <h4>${houses[i].name}</h4>
    </div>`;
        }
        } catch (error) {
                console.log(error);
                resultsContainer.innerHTML = ("error", error);
        }

}

callApi(url);

function createHtml(details) {
    container.innerHTML = `<h1>${details.name}</h1>
                            <div class="details-image" 
                                    style="background-image: url('${details.background_image}')"></div>
                                <div class="details-description">${details.description}</div>
                                <time class="details-date">Released: ${details.released}</time>`;
}