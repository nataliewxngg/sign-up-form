const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm-password");

passwordField.setCustomValidity("This field is required.");
confirmPasswordField.setCustomValidity("This field is required.");

confirmPasswordField.addEventListener("keyup", () => {
    passwordField.value === confirmPasswordField.value
        ? confirmPasswordField.setCustomValidity("")
        : confirmPasswordField.setCustomValidity("Passwords do not match.");
});