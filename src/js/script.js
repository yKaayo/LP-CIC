// Navbar Toggler
const navBarToggler = document.querySelector(".navbar-toggler .bi");

navBarToggler.addEventListener("click", () => {
    if (navBarToggler.classList.contains("bi-justify-right")) {
        navBarToggler.classList.replace("bi-justify-right", "bi-x");
    } else {
        navBarToggler.classList.replace("bi-x", "bi-justify-right");
    }
})

// Show or Hide Password
const eye = document.querySelector("#eye");
const inputPassword = document.querySelector("#password");

eye.addEventListener("click", () => {
    if (inputPassword.type === "password") {
        inputPassword.setAttribute("type", "text");
        eye.classList.replace("bi-eye", "bi-eye-slash");
    } else {
        inputPassword.setAttribute("type", "password");
        eye.classList.replace("bi-eye-slash", "bi-eye");
    }
})
