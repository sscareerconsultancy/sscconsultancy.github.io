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

// document.getElementById('verifyOtpBtn').addEventListener('click', function() {
//     const otp = document.getElementById('otp').value;
//     if (otp === '1234') { // Example OTP for demonstration
//         showPopup('OTP Verified');
//         window.location.href = 'maintemp.html'; // Redirect to login page
//     } else {
//         showPopup('Invalid OTP');
//     }
// });

// document.getElementById('verifyOtpBtn').addEventListener('click', function() {
//     var otp = '';
//     for (var i = 1; i <= 6; i++) {
//         otp += document.getElementById('otp' + i).value;
//     }
//     if (otp.length === 6) {
//         // Simulate OTP verification
//         alert('OTP verified: ' + otp);
//     } else {
//         alert('Please enter the complete OTP.');
//     }
// });

function showPopup(message) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = message;
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 3000);
}

function moveToNext(current, nextFieldID) {
    if (current.value.length === 1) {
        document.getElementById(nextFieldID).focus();
    }
}
document.getElementById('sendOtpBtn').addEventListener('click', function() {
    var phone = document.getElementById('Phone').value;
    if (phone == null || phone.trim() === "" || phone.length < 10) {
        alert('Please Enter a valid phone number:');
    } else {
        // Simulate sending OTP
        alert('OTP sent to ' + phone);
        document.getElementById('otpSection').style.display = 'block';
    }
});

function moveToNext(current, nextFieldID) {
    if (current.value.length === 1) {
        document.getElementById(nextFieldID).focus();
    }
}

document.getElementById('verifyOtpBtn').addEventListener('click', function() {
    var otp = '';
    for (var i = 1; i <= 6; i++) {
        otp += document.getElementById('otp' + i).value;
    }
    if (otp.length === 6) {
        // Simulate OTP verification
        alert('OTP verified: ' + otp);
    } else {
        alert('Please enter the complete OTP.');
    }
});

function startTimer(duration) {
    var timer = duration, minutes, seconds;
    var timerElement = document.getElementById('timer');
    var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerElement.textContent = "Time remaining: " + seconds + "s";

        if (--timer < 0) {
            clearInterval(interval);
            timerElement.textContent = "OTP expired. Please request a new one.";
        }
    }, 1000);
}