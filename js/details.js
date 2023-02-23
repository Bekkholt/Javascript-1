const detailContainer = document.querySelector(".details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id = params.get("id");

const detailUrl = "https://wizard-world-api.herokuapp.com/Houses/" + id;

async function fetchDetails(){
    try {
        detailContainer.innerHTML = `<div class="loader"></div>`
        const response = await fetch(detailUrl);
        const details = await response.json();
        
        document.title = details.name;

        createHtml(details);
        
    } catch (error) {
        detailContainer.innerHTML = message("error", error);
    }
}

fetchDetails();

function createHtml(details) {
    detailContainer.innerHTML = `<h2>${details.name}</h2>
    <h5>House founder:</h5><div class="details founder">${details.founder}</div>
    <h5>House ghost:</h5><div class="details ghost">${details.ghost}</div>
    <h5>House commonroom:</h5><div class="details room">${details.commonRoom}</div>`;
    }