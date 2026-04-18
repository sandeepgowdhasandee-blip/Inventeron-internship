const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;
    clearErrors();

    const fields = [
        "fullname","fathername","mothername",
        "phone","dob","email","gender",
        "address","password","confirmPassword"
    ];

    fields.forEach(id => {
        const input = document.getElementById(id);
        if (input.value.trim() === "") {
            showError(input, "This field is required");
            isValid = false;
        }
    });

    const email = document.getElementById("email");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
        showError(email, "Enter valid email");
        isValid = false;
    }

    const phone = document.getElementById("phone");
    if (phone.value.length !== 10 || isNaN(phone.value)) {
        showError(phone, "Enter valid 10 digit phone number");
        isValid = false;
    }

    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    if (password.value.length < 6) {
        showError(password, "Password must be at least 6 characters");
        isValid = false;
    }

    if (password.value !== confirmPassword.value) {
        showError(confirmPassword, "Passwords do not match");
        isValid = false;
    }

    if (isValid) {
        alert("Registration Successful!");
        form.reset();
    }
});

function showError(input, message) {
    input.parentElement.querySelector(".error").innerText = message;
}

function clearErrors() {
    document.querySelectorAll(".error").forEach(e => e.innerText = "");
}
       