const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm-password");

passwordField.setCustomValidity("This field is required.");
confirmPasswordField.setCustomValidity("This field is required.");

passwordField.addEventListener("keyup", () => {
    passwordField.value === "" 
        ? passwordField.setCustomValidity("This field is required")
        : passwordField.setCustomValidity("");
});

confirmPasswordField.addEventListener("keyup", () => {
    passwordField.value === confirmPasswordField.value
        ? confirmPasswordField.setCustomValidity("")
        : confirmPasswordField.setCustomValidity("Passwords do not match.");
});