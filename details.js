const detailContainer = document.querySelector(".details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

if (id === null) {
location.href = "/";
}

const detailUrl = "https://wizard-world-api.herokuapp.com/Houses/" + id;

console.log(detailUrl);

async function fetchDetails(){

        try {
        const response = await fetch(detailUrl);

        const details = await response.json();

        console.log(details);

        createHtml(details);

    } catch (error) {
        console.log(error);
        detailContainer.innerHTML = ("error", error);
    }
}

fetchDetails();



function createHtml(details) {
    detailContainer.innerHTML = `<h3>${details.name}</h3>
        <div class="details">House founder: ${details.founder}</div>
        <div class="details">House ghost: ${details.ghost}</div>
        <div class="details">House commonroom: ${details.commonRoom}</div>`;}