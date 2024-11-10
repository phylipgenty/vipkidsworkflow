document.querySelector('.submit').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission

    // Reset error messages
    document.getElementById('surnameError').innerHTML = '';
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('phoneError').innerHTML = '';

    // Get form inputs
    var surname = document.querySelector('.surname').value;
    var name = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;
    var phone = document.querySelector('.number').value;

    // Validate inputs
    var isValid = true;
    if (!surname) {
        isValid = false;
        document.getElementById('surnameError').innerHTML = 'Surname is required';
    }
    if (!name) {
        isValid = false;
        document.getElementById('nameError').innerHTML = 'Name is required';
    }
    if (!email) {
        isValid = false;
        document.getElementById('emailError').innerHTML = 'Email is required';
    } else if (!isValidEmail(email)) {
        isValid = false;
        document.getElementById('emailError').innerHTML = 'Invalid email format';
    } else {
        document.getElementById('emailError').classList.add('valid');
    }
    if (!phone) {
        isValid = false;
        document.getElementById('phoneError').innerHTML = 'Phone number is required';
    } else if (!isValidPhoneNumber(phone)) {
        isValid = false;
        document.getElementById('phoneError').innerHTML = 'Invalid phone number';
    } else {
        document.getElementById('phoneError').classList.add('valid');
    }

    // If form is valid, submit it
    if (isValid) {
        document.querySelector('fieldset').submit();
    }
});

function isValidEmail(email) {
    // Email validation regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
    // Phone number validation regular expression
    var phoneRegex = /^\d{11}$/;
    return phoneRegex.test(phone);
}