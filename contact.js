const form = document.querySelector("form");
const fullName = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const message = document.querySelector("#message")
const button = document.querySelector("button");

// function checkIfButtonIsDisabled() {
//     if (checkLength(fullName.value, 1) && checkLength(subject.value, 10) && validateEmail(email.value) && checkLength(address.value, 25)) {
//         button.disabled = false;
//     } else {
//         message.innerHTML = "";
//         button.disabled = true;
//     }
// }

// fullName.addEventListener("keyup", this.checkIfButtonIsDisabled);
// subject.addEventListener("keyup", this.checkIfButtonIsDisabled);
// email.addEventListener("keyup", this.checkIfButtonIsDisabled);
// address.addEventListener("keyup", this.checkIfButtonIsDisabled);

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

function submitForm(event) {
    event.preventDefault();

    const acceptFullName = checkLength(fullName.value, 1);
    const acceptSubject = checkLength(subject.value, 10);
    const acceptEmail = validateEmail(email.value);
    const acceptAddress = checkLength(address.value, 25);
    const acceptAll = acceptFullName && acceptSubject && acceptEmail && acceptAddress;

    if (acceptAll){
        message.innerHTML = '<div class="message">Thank you, your message is delivered</div>';
    }
    else {
        if (!acceptFullName){
            message.innerHTML += `<div class="message">Name required</div>`;
        }
        if (!acceptSubject) {
            message.innerHTML += `<div class="message">Subject must have a minimum length of 10</div>`
        }
        if (!acceptEmail) {
            message.innerHTML += `<div class="message">Email should be an email</div>`
        }
        if (!acceptAddress) {
            message.innerHTML += `<div class="message">Address must have a minimum length of 25</div>`
        }
    }

        
    form.reset();
}

form.addEventListener("submit", submitForm);