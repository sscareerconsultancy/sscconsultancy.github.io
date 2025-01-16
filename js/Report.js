function saveToExcel() {
    // Retrieve the JSON string from localStorage
    const storedContactInfoString = localStorage.getItem('contactInfo');
    alert('Started.');
    // Check if the data exists
    if (storedContactInfoString) {
        // Convert the JSON string back to an object
        const storedContactInfo = JSON.parse(storedContactInfoString);

        // Create a worksheet from the contact information
        const worksheet = XLSX.utils.json_to_sheet([storedContactInfo]);

        // Create a new workbook
        const workbook = XLSX.utils.book_new();

        // Append the worksheet to the workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Contact Info');

        // Generate a binary string representation of the workbook
        const workbookBinary = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });

        // Convert the binary string to a Blob
        const blob = new Blob([s2ab(workbookBinary)], { type: 'application/octet-stream' });

        // Create a link element
        const link = document.createElement('a');

        // Set the download attribute with a filename
        link.href = URL.createObjectURL(blob);
        link.download = 'contact_info.xlsx';

        // Append the link to the document body
        document.body.appendChild(link);

        // Programmatically click the link to trigger the download
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);

        alert('File Downloaded.');
    } else {
        alert('No contact information found.');
    }
    document.querySelector('.contact-form-loader').style.display = 'none';
}

// Helper function to convert a binary string to an ArrayBuffer
function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) {
        view[i] = s.charCodeAt(i) & 0xFF;
    }
    return buf;
}

function displayContactInfo() {
    const storedContactInfoString = localStorage.getItem('contactInfo');
    if (storedContactInfoString) {
        const storedContactInfo = JSON.parse(storedContactInfoString);

        // Clear any existing rows
        const tableBody = document.querySelector('#contactInfoTable tbody');
        tableBody.innerHTML = '';

        // Create a new row with the contact information
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${storedContactInfo.name}</td>
            <td>${storedContactInfo.email}</td>
            <td>${storedContactInfo.phone}</td>
            <td>${storedContactInfo.qualificationLevel}</td>
            <td>${storedContactInfo.qualificationDegree}</td>
            <td>${storedContactInfo.applyingFor}</td>
            <td>${storedContactInfo.experience}</td>
            <td>${storedContactInfo.message}</td>
        `;
        tableBody.appendChild(row);
    } else {
        alert('No contact information found.');
    }
}