
document.getElementById('verifyOtpBtn').addEventListener('click', function() {
    const otp = document.getElementById('otp').value;
    if (otp === '1234') { // Simulate OTP verification
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const phone = document.getElementById('phone').value;

        // Store user data in LocalStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('phone', phone);

        // localStorage.setItem('phone', phone);
        alert('Sign up successful!');
    } else {
        alert('Invalid OTP.');
    }
});

function validateNumberInput(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}

function redirectToPage() {
    // Redirect to another page after successful sign-up
    window.location.href = 'welcome.html';
}