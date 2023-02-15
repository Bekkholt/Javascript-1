const url = "https://wizard-world-api.herokuapp.com/Houses";

const resultsContainer = document.querySelector(".results");

async function callApi(){

        try {
        const response = await fetch(url);

        const json = await response.json();

        console.log(json);

        const houses = json;

        resultsContainer.innerHTML += "Houses:";

        for (let i =0; i < houses.length; i++) {

        resultsContainer.innerHTML += `<a class="card" href="details.html"
        <h4>${houses[i].name}</h4>
    </a>`;
        }
        } catch (error) {
                console.log(error);
                resultsContainer.innerHTML = ("error", error);
        }

}

callApi(url);