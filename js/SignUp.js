function validateNumberInput(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}

document.getElementById('sendOtpBtn').addEventListener('click', function() {
    const phone = document.getElementById('Phone').value;
    localStorage.setItem('phone', phone);
    if (phone == null || phone.trim() === "" || phone.length < 10) {
        alert('Please enter a valid phone number.');
    } else {
        document.getElementById('otpSection').style.display = 'block';
        this.style.display = 'none';
    }
});

document.getElementById('verifyOtpBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    // Store user data in LocalStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    

    alert('Sign up successful!');
    window.location.href = 'Login.html'; // Redirect to login page
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