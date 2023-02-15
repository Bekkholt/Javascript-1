const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (id === null) {
	location.href = "/";
}

const detailUrl = "https://wizard-world-api.herokuapp.com/Houses/" + id;

const detailContainer = document.querySelector(".details");

async function fetchDetails(){

        try {
        const response = await fetch(url);

        const details = await response.json();

        console.log(details);

        createHtml(details);

    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = ("error", error);
}
}

fetchDetails();

function createHtml(details) {
    detailContainer.innerHTML = `<h4>${details.name}</h4>
        <div class="details">${details.animal}</div>
        <div class="details">Released: ${details.element}</div>
        <div class="details">Released: ${details.founder}</div>`;}