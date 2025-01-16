function validateNumberInput(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}

document.getElementById('SignUpSection').addEventListener('click', function() {
    window.location.href = 'SignUp.html';
});

document.getElementById('sendOtpBtn').addEventListener('click', function() {
    const input = document.getElementById('Phone').value;

    if (input == null || input.trim() === "" || input.length < 10) {
        alert('Please enter a valid phone number or username.');
    } else {
        // Retrieve user data from LocalStorage
        const storedPhone = localStorage.getItem('phone');
        const storedUsername = localStorage.getItem('username');

        // Check if the input is a phone number (assuming phone numbers are 10 digits)
        const isPhoneNumber = /^\d{10}$/.test(input);

        if ((isPhoneNumber && input === storedPhone) || (!isPhoneNumber && input === storedUsername)) {
            document.getElementById('otpSection').style.display = 'block';
            // document.getElementById('SignUpSection').style.display = 'block';
            this.style.display = 'none';
        } else {
            alert('User not found. Please sign up first.');
            document.getElementById('SignUpSection').style.display = 'block';
            this.style.display = 'none';
        }
    }
});

document.getElementById('verifyOtpBtn').addEventListener('click', function() {
    const input = document.getElementById('Phone').value;
    const password = document.getElementById('password').value;

    // Retrieve user data from LocalStorage
    const storedPhone = localStorage.getItem('phone');
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check if the input is a phone number (assuming phone numbers are 10 digits)
    const isPhoneNumber = /^\d{10}$/.test(input);

    if (isPhoneNumber) {
        if (input === storedPhone && password === storedPassword) {
            alert('Login successful!');
            window.location.href = 'Main.html'; // Redirect to welcome page
        } else {
            alert('Invalid Phone Number or Password');
        }
    } else {
        if (input === storedUsername && password === storedPassword) {
            alert('Login successful!');
            window.location.href = 'Main.html'; // Redirect to welcome page
        } else {
            alert('Invalid Username or Password');
        }
    }
});

document.getElementById('password').addEventListener('input', function() {
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
    var validMessage = document.getElementById('valid-message');
    var passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

    if (!passwordPattern.test(password)) {
        errorMessage.style.display = 'block';
        validMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'none';
        validMessage.style.display = 'block';
    }
});