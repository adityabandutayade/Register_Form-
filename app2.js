const loginForm = document.getElementById('form');
const loginUsername = document.getElementById('username');
const loginPassword = document.getElementById('password');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!validateLoginInputs()) {
        return;
    }

    // Assuming you have a function named loginUser for handling login logic
    // You need to implement this function on the server-side
    // For now, let's assume it returns true for a successful login
    const loginSuccessful = loginUser();

    if (loginSuccessful) {
        // Redirect to the dashboard or any other page after successful login
        window.location.href = '#'; // Replace with your actual dashboard page URL
    } else {
        displayError('Invalid username or password');
    }
});

function validateLoginInputs() {
    const loginUsernameVal = loginUsername.value.trim();
    const loginPasswordVal = loginPassword.value.trim();

    if (loginUsernameVal === '') {
        displayError('Username is required');
        return false;
    }

    if (loginPasswordVal === '') {
        displayError('Password is required');
        return false;
    }

    return true;
}

function displayError(message) {
    // Create an error message element
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.innerText = message;

    // Append the error message within the form, after the login button
    const loginButton = loginForm.querySelector('button');
    loginForm.insertBefore(errorMessage, loginButton.nextSibling);

    // Remove the error message after a few seconds
    setTimeout(() => {
        errorMessage.remove();
    }, 3000);
}


function loginUser() {
    // Implement your server-side login logic here
    // Return true if login is successful, otherwise return false
    // This is a placeholder, and you should replace it with your actual login logic on the server-side
    return false;
}
