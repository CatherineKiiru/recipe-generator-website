const name = document.getElementById('username');
const password = document.getElementById('password');
const passwordconfirm = document.getElementById('passwordconfirm');
const signupForm = document.getElementById('signupform');
const loginForm = document.getElementById('loginform');
const errorDisplay = document.getElementById('error');

signupform.addEventListener('submit', (e) => {

    let messages = []
    if ( name.value === '' || name.value === null ) {
        messages.push('A username is required')
    }

    if (password.value.length <= 6) {
        messages.push('Password should be longer than 6 characters')
    }

    if (password.value === "password") {
        messages.push('password cannnot be password')
    }

    if (password.value.length >= 16) {
        messages.push('Password should not be more than 15 characters')
    }

    if (password.value != passwordconfirm.value) {
        messages.push('Passwords do not match')
    }

    if (messages.length > 0) {
    e.preventDefault();
    errorDisplay.innerText = messages.join(', ')
    }

});