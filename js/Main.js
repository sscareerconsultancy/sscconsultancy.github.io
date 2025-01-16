document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve form data
    const name = document.getElementsByName('name')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const phone = document.getElementsByName('phone')[0].value;
    const qualificationLevel = document.getElementById('phoneInput1').value;
    const qualificationDegree = document.getElementById('phoneInput2').value;
    const applyingFor = document.getElementById('phoneInput3').value;
    const experience = document.getElementById('phoneInput4').value;
    const message = document.getElementsByName('message')[0].value;

    // Create an object to store the contact information
    const contactInfo = {
        name: name,
        email: email,
        phone: phone,
        qualificationLevel: qualificationLevel,
        qualificationDegree: qualificationDegree,
        applyingFor: applyingFor,
        experience: experience,
        message: message
    };

    // Convert the object to a JSON string
    const contactInfoString = JSON.stringify(contactInfo);

    // Save the JSON string to localStorage
    localStorage.setItem('contactInfo', contactInfoString);

    // Check if the data was saved successfully
    if (localStorage.getItem('contactInfo') === contactInfoString) {
        alert('Contact information saved successfully!');
    } else {
        alert('Contact information not saved successfully!');
    }
    
});