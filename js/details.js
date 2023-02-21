const detailContainer = document.querySelector(".details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

let id = params.get("id");

const detailUrl = "https://wizard-world-api.herokuapp.com/Houses/" + id;

console.log(detailUrl);

async function fetchDetails(){
    try {
        detailContainer.innerHTML = `<div class="loader"></div>`
        const response = await fetch(detailUrl);
        const details = await response.json();
        
        document.title = details.name;
        console.log(details);
        createHtml(details);
        
    } catch (error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
}

fetchDetails();

function createHtml(details) {
    detailContainer.innerHTML = `<h3>${details.name}</h3>
        <div class="details">House founder: ${details.founder}</div>
        <div class="details">House ghost: ${details.ghost}</div>
        <div class="details">House commonroom: ${details.commonRoom}</div>`;}