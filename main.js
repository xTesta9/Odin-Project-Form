function validateFirstName() {
    const firstName = document.querySelector('#firstName')
    const errorMessage = document.querySelector('#error1')
    const errorMessageText = errorMessage.querySelector('.error-message span')
    const regex = /^[a-zA-Z]+$/

    if (!firstName.value) {
        errorMessage.style.display = 'block'
        firstName.classList.add('invalid')
        errorMessageText.textContent = 'Please enter a value'
        return false
    }

    if (firstName.value.includes(' ')) {
        errorMessage.style.display = 'block'
        firstName.classList.add('invalid')
        errorMessageText.textContent = 'No Space Included'
        return false
    }

    if (!regex.test(firstName.value)) {
        errorMessage.style.display = 'block'
        firstName.classList.add('invalid')
        errorMessageText.textContent = 'Must be in letters'
        return false
    } else {
        errorMessage.style.display = 'none'
        firstName.classList.remove('invalid')
        firstName.classList.add('valid')
        return true
    }
}

function validateLastName() {
    const lastName = document.querySelector('#lastName')
    const errorMessage = document.querySelector('#error2')
    const errorMessageText = errorMessage.querySelector('.error-message span')
    const regex = /^[a-zA-Z]+$/


    if (lastName.value.includes(' ')) {
        errorMessage.style.display = 'block'
        lastName.classList.add('invalid')
        errorMessageText.textContent = 'No Space Included'
        return false
    }

    if (lastName.value && !regex.test(lastName.value)) {
        errorMessage.style.display = 'block'
        lastName.classList.add('invalid')
        errorMessageText.textContent = 'Must be in letters'
        return false
    } else if (lastName.value && regex.test(lastName.value)) {
        errorMessage.style.display = 'none'
        lastName.classList.remove('invalid')
        lastName.classList.add('valid')
        return true
    }

    lastName.classList.remove('valid')
    return true
}

function validateEmail() {
    const email = document.querySelector('#email');
    const errorMessage = document.querySelector('#error3');
    const regex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (!email.value) {
        errorMessage.style.display = 'block'
        email.classList.add('invalid')
        return false
    } 
    
    if (email.value && !regex.test(email.value)) {
        errorMessage.style.display = 'block'
        email.classList.add('invalid')
        return false
    } else {
        errorMessage.style.display = 'none'
        email.classList.remove('invalid')
        email.classList.add('valid')
        return true
    }
}

function validatePhoneNumber() {
    const phoneNumber = document.querySelector('#phoneNumber')
    const errorMessage = document.querySelector('#error4')
    const regex = /^\(\d{3}\)-\d{3}-\d{3}$/

    if (!phoneNumber.value || !regex.test(phoneNumber.value)) {
        errorMessage.style.display = 'block'
        phoneNumber.classList.add('invalid')
        return false
    } else {
        errorMessage.style.display = 'none'
        phoneNumber.classList.remove('invalid')
        phoneNumber.classList.add('valid')
        return true
    }
}

function validatePassword() {
    const password = document.querySelector('#password')
    const errorMessage = document.querySelector('#error5')
    const errorMessageText = errorMessage.querySelector('.error-message span')
    const regex = /^[A-Za-z\d@$!%*?&]{4,}$/

    if (!password.value) {
        errorMessage.style.display = 'block'
        password.classList.add('invalid')
        errorMessageText.textContent = 'Please enter a value'
        return false
    }

    if (password.value.includes(' ')) {
        errorMessage.style.display = 'block'
        password.classList.add('invalid')
        errorMessageText.textContent = 'No Space included'
        return false
    }

    if (!regex.test(password.value)) {
        errorMessage.style.display = 'block'
        password.classList.add('invalid')
        errorMessageText.textContent = 'Must be at least 4 characters'
        return false
    } else {
        errorMessage.style.display = 'none'
        password.classList.remove('invalid')
        password.classList.add('valid')
        return true
    }
}

function validateConfirmPassword() {
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirmPassword');
    const errorMessage = document.querySelector('#error6');
    const errorMessageText = errorMessage.querySelector('.error-message span');

    if (!confirmPassword.value) {
        errorMessage.style.display = 'block';
        confirmPassword.classList.add('invalid')
        errorMessageText.textContent = 'Please enter a value';
        return false;
    }

    if (confirmPassword.value.includes(' ')) {
        errorMessage.style.display = 'block';
        confirmPassword.classList.add('invalid')
        errorMessageText.textContent = 'No Space included';
        return false;
    }

    if (password.value !== confirmPassword.value) {
        errorMessage.style.display = 'block';
        confirmPassword.classList.add('invalid')
        errorMessageText.textContent = 'Passwords must match';
        return false;
    } else {
        errorMessage.style.display = 'none';
        confirmPassword.classList.remove('invalid')
        confirmPassword.classList.add('valid')
        return true;
    }
}

document.querySelector('#form').addEventListener('submit', function(event) {
    const firstNameValid = validateFirstName()
    const lastNameValid = validateLastName()
    const emailValid = validateEmail()
    const phoneNumberValid = validatePhoneNumber()
    const passwordValid = validatePassword()
    const confirmPasswordValid = validateConfirmPassword()

    if (!firstNameValid || !lastNameValid || !emailValid || !phoneNumberValid || !passwordValid || !confirmPasswordValid) {
        event.preventDefault()
    }
})