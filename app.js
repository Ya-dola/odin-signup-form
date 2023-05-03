// Constants
const firstName = document.querySelector('#first-name');
const firstNameError = document.querySelector('#first-name-error');
const lastName = document.querySelector('#last-name');
const lastNameError = document.querySelector('#last-name-error');
const email = document.querySelector('#email');
const emailError = document.querySelector('#email-error');
const phoneNum = document.querySelector('#phone-num');
const phoneNumError = document.querySelector('#phone-num-error');
const pass = document.querySelector('#pass');
const passError = document.querySelector('#pass-error');
const confPass = document.querySelector('#conf-pass');
const confPassError = document.querySelector('#conf-pass-error');

// Event Listeners
firstName.addEventListener('input', () => {
    if (firstName.value === "") {
        firstNameError.textContent = "Type Your First Name!";
        firstName.nextElementSibling.classList.add("labelError");
    }
    else {
        firstNameError.textContent = "";
        firstName.nextElementSibling.classList.remove("labelError");
    }
});

lastName.addEventListener('input', () => {
    if (lastName.value === "") {
        lastNameError.textContent = "Type Your Last Name!";
        lastName.nextElementSibling.classList.add("labelError");
    }
    else {
        lastNameError.textContent = "";
        lastName.nextElementSibling.classList.remove("labelError");
    }
});

email.addEventListener('input', () => {
    if (email.validity.typeMismatch) {
        emailError.textContent = "Enter Valid Email! (Ex. dola@email.com)";
        email.nextElementSibling.classList.add("labelError");
    }
    else {
        emailError.textContent = "";
        email.nextElementSibling.classList.remove("labelError");
    }
});

phoneNum.addEventListener('input', () => {
    if (phoneNum.validity.patternMismatch) {
        phoneNumError.textContent = "Enter 10 Digit Phone Number!";
        phoneNum.nextElementSibling.classList.add("labelError");
    }
    else {
        phoneNumError.textContent = "";
        phoneNum.nextElementSibling.classList.remove("labelError");
    }
});

pass.addEventListener('input', () => {
    if (pass.validity.patternMismatch) {
        let errMsg = "";
        const regExCapitals = /[A-Z]/g;
        const regExSimples = /[a-z]/g;
        const regExDigits = /[0-9]/g;

        if (regExCapitals.test(pass.value)) errMsg += "";
        else errMsg += " , 1 Capital Letter";

        if (regExSimples.test(pass.value)) errMsg += "";
        else errMsg += " , 1 Simple Letter";

        if (regExDigits.test(pass.value)) errMsg += "";
        else errMsg += " , 1 Digit";

        if (pass.value.length < 8) errMsg += " & Min 8 Characters";
        else errMsg += "";

        if (errMsg.length !== 0)
            // To Fix the Wording if only Length Error Remains
            errMsg = errMsg.substring(3, 4) === "M" ?
                     errMsg.substring(3) :
                     "Missing: " + errMsg.substring(3);

        passError.textContent = errMsg;
        pass.nextElementSibling.classList.add("labelError");
    }
    else {
        passError.textContent = "";
        pass.nextElementSibling.classList.remove("labelError");
    }
});

confPass.addEventListener('input', () => {
    if (pass.value !== confPass.value) {
        confPassError.textContent = "Passwords DO NOT Match!";
        confPass.nextElementSibling.classList.add("labelError");
    }
    else {
        confPassError.textContent = "";
        confPass.nextElementSibling.classList.remove("labelError");
    }

    if (confPass.validity.patternMismatch)
        confPass.nextElementSibling.classList.add("labelError");
    else
        confPass.nextElementSibling.classList.remove("labelError");
});
