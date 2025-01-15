// AWS SDK Configuration
AWS.config.update({
  region: 'eu-north-1', // Replace with your region
  accessKeyId: 'AKIATNVEVOXMTCYECZWU',
  secretAccessKey: 'ntTnkbBJmXTav+5mkzPOk7nXolNQHQ0r9kvB6Zlx'
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

// Handle Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const phone = document.querySelector('input[name="Phone"]').value;
  const qualificationLevel = document.querySelector('input[name="Qualification"]').value;
  const degree = document.querySelector('input[name="Qualification"]').value;
  const applyingFor = document.querySelector('input[name="phone"]').value;
  const experience = document.querySelector('input[name="experience"]').value;
  const message = document.querySelector('input[name="message"]').value;

  // Save data to DynamoDB
  const params = {
    TableName: 'Customer_data',
    Item: {
      id: new Date().toISOString(),
      name: name,
      email: email,
      phone: phone,
      qualificationLevel: qualificationLevel,
      degree: degree,
      applyingFor: applyingFor,
      experience: experience,
      message: message
    }
  };

  dynamoDB.put(params, (err, data) => {
    if (err) {
      console.error('Unable to add item. Error JSON:', JSON.stringify(err, null, 2));
    } else {
      alert('Your message has been sent! We will be in touch soon.');
    }
  });
});

// Fetch Data from DynamoDB
function fetchData() {
  const params = {
    TableName: 'MyTable'
  };

  dynamoDB.scan(params, (err, data) => {
    if (err) {
      console.error('Unable to read item. Error JSON:', JSON.stringify(err, null, 2));
    } else {
      console.log('GetItem succeeded:', JSON.stringify(data, null, 2));
      // Display data on your page
    }
  });
}

// Call fetchData function to retrieve data
fetchData();
