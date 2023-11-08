function formValidation() {

    // For username form
    var username_Input = document.getElementById("usernameText");
    var username_Error = document.getElementById("usernameError");
    var username_Value = username_Input.value;
    var username_Regex = /^[A-Za-z]+$/;

    // For password form
    var password_Input = document.getElementById("passwordText");
    var password_Error = document.getElementById("passwordError");
    var password_Value = password_Input.value;
    var password_Regex = /^[A-Za-z0-9]+$/;

    // For confirm password form
    var confirmPassword_Input = document.getElementById("confirmPasswordText");
    var confirmPassword_Error = document.getElementById("confirmPasswordError");
    var confirmPassword_Value = confirmPassword_Input.value;

    // For email form
    var email_Input = document.getElementById("emailText");
    var email_Error = document.getElementById("emailError");
    var email_Value = email_Input.value;
    var email_Regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    isValid = true;

    // For username validation
    if (username_Value == "") {
        username_Error.innerHTML = "You must enter a username";
        username_Input.classList.add("is-invalid");
        isValid = false;
    } else if (!username_Value.match(username_Regex)) {
        username_Error.innerHTML = "Your username must contain letters only";
        username_Input.classList.add("is-invalid");
        isValid = false;
    } else if (username_Value.length < 8 || username_Value.length > 20) {
        username_Error.innerHTML = "Your username must be 8-20 characters long";
        username_Input.classList.add("is-invalid");
        isValid = false;
    } else {
        username_Error.innerHTML = "";
        username_Input.classList.remove("is-invalid");
        username_Input.classList.add("is-valid");
    }

    // For password validation
    if (password_Value == "") {
        password_Error.innerHTML = "You must enter a password";
        password_Input.classList.add("is-invalid");
        isValid = false;
    } else if (!password_Value.match(password_Regex)) {
        password_Error.innerHTML = "Your password must contain letters or numbers only";
        password_Input.classList.add("is-invalid");
        isValid = false;
    } else if (password_Value.length < 8 || password_Value.length > 20) {
        password_Error.innerHTML = "Your password must be 8-20 characters long";
        password_Input.classList.add("is-invalid");
        isValid = false;
    } else {
        password_Error.innerHTML = "";
        password_Input.classList.remove("is-invalid");
        password_Input.classList.add("is-valid");
    }

    // For confirm password validation
    if (confirmPassword_Value == "") {
        confirmPassword_Error.innerHTML = "You must confirm your password";
        confirmPassword_Input.classList.add("is-invalid");
        isValid = false;
    } else if (!confirmPassword_Value.match(password_Value)) {
        confirmPassword_Error.innerHTML = "Passwords do not match";
        confirmPassword_Input.classList.add("is-invalid");
        isValid = false;
    } else {
        confirmPassword_Error.innerHTML = "";
        confirmPassword_Input.classList.remove("is-invalid");
        confirmPassword_Input.classList.add("is-valid");
    }

    // For email validation
    if (email_Value == "") {
        email_Error.innerHTML = "You must enter an email";
        email_Input.classList.add("is-invalid");
        isValid = false;
    } else if (!email_Value.match(email_Regex)) {
        email_Error.innerHTML = "Your email must be in valid format";
        email_Input.classList.add("is-invalid");
        isValid = false;
    } else {
        email_Error.innerHTML = "";
        email_Input.classList.remove("is-invalid");
        email_Input.classList.add("is-valid");
    }

    return isValid;
}