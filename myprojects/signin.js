const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");
const form = document.getElementById("loginForm");

/* Controlled Inputs */
let emailValue = "";
let passwordValue = "";

emailInput.addEventListener("input", function () {
    emailValue = emailInput.value;
});

passwordInput.addEventListener("input", function () {
    passwordValue = passwordInput.value;
});

/* Form Validation */
form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop form submission

    if (emailValue === "" || passwordValue === "") {
        errorMsg.textContent = "All fields are required.";
        return;
    }

    if (!emailValue.includes("@")) {
        errorMsg.textContent = "Please enter a valid email.";
        return;
    }

    if (passwordValue.length < 6) {
        errorMsg.textContent = "Password must be at least 6 characters.";
        return;
    }

    errorMsg.style.color = "green";
    errorMsg.textContent = "Login successful!";
});
