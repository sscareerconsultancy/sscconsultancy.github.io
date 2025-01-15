function validateNumberInput(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}

document.getElementById('sendOtpBtn').addEventListener('click', function() {
    const phone = document.getElementById('Phone').value
    if (phone == null || phone.trim() === "" || phone.length < 10) {
        alert('Please Enter a valid phone number:');
    }
    else{
        document.getElementById('otpSection').style.display = 'block';
        this.style.display = 'none';
    }
    
});

document.getElementById('verifyOtpBtn').addEventListener('click', function() {
    const password = document.getElementById('password').value;
    if (password === 'R@ula007') { // Example OTP for demonstration
        // showPopup('OTP Verified');
        window.location.href = 'Main.html'; // Redirect to login page
    } else {
        alert('Invalid Password');
    }
    
});

function redirectToPage() {
    // Method 1: Using location.href
    window.location.href = "Main.html";

    // Method 2: Using location.assign
    // window.location.assign("https://www.example.com");

    // Method 3: Using location.replace
    // window.location.replace("https://www.example.com");
}
document.getElementById('password').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
    var passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

    if (!passwordPattern.test(password)) {
        errorMessage.style.display = 'block';
        event.preventDefault();
    } else {
        errorMessage.style.display = 'none';
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

document.getElementById('password').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

    if (!passwordPattern.test(password)) {
        event.preventDefault();
    }
});