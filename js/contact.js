const form = document.querySelector("form");
const fullName = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const message = document.querySelector("#message")
const button = document.querySelector("button");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(fullName.value, 1) === false) {
        message.innerHTML += `<div class="message">Name required</div>`;
    } else {
        message.innerHTML = "";
    }

    if (checkLength(subject.value, 10) === false) {
        message.innerHTML += `<div class="message">Subject must have a minimum length of 10</div>`;
    } else {
        message.innerHTML.display = "none";
    }

    if (validateEmail(email.value) === false) {
        message.innerHTML += `<div class="message">Email should be an email</div>`;
    } else {
        message.innerHTML.display = "none";
    }

    if (checkLength(address.value, 25) === false) {
        message.innerHTML += `<div class="message">Address must have a minimum length of 25</div>`
    } else {
        message.innerHTML.display = "none";
    }

}

function submitForm(event) {
    event.preventDefault(); {
        if (checkLength(fullName.value, 1)
        && checkLength(subject.value, 10)
        && validateEmail(email.value)
        && checkLength(address.value, 25)) {
    message.innerHTML += '<div class="success">Success! Your info was submitted</div>';
        } else {
    form.reset();
        }
    }
}

form.addEventListener("submit", validateForm);

form.addEventListener("submit", submitForm)

function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

