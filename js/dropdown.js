document.addEventListener('click', function(event) {
    // Check if the clicked element is a dropdown input
    if (event.target.matches('.dropdown-input')) {
        var dropdown = event.target.nextElementSibling;
        if (dropdown && dropdown.classList.contains('dropdown-content')) {
            dropdown.classList.add('show');
        }
    } else {
        // Close all dropdowns if the click is outside any dropdown input
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});

function selectOption(value, inputId) {
    event.preventDefault();
    document.getElementById(inputId).value = value;
    var dropdown = document.getElementById(inputId).nextElementSibling;
    if (dropdown && dropdown.classList.contains('dropdown-content')) {
        dropdown.classList.remove('show');
    }
    if (inputId === 'phoneInput1') {
        updateQualifications();
    }
}
function updateQualifications() {
    var level = document.getElementById('phoneInput1').value;
    var degreeDropdown = document.getElementById('degreeDropdown');
    degreeDropdown.innerHTML = ''; // Clear previous options

    var options = [];

    if (level === 'School Level Qualifications') {
        options = [
            { value: 'ssc', text: 'Secondary School Certificate (SSC)' },
            { value: 'hsc', text: 'Higher Secondary Certificate (HSC)' }
        ];
    } else if (level === 'Undergraduate Degrees') {
        options = [
            { value: 'ba', text: 'Bachelor of Arts (B.A.)' },
            { value: 'bsc', text: 'Bachelor of Science (B.Sc.)' },
            { value: 'bcom', text: 'Bachelor of Commerce (B.Com.)' },
            { value: 'btech', text: 'Bachelor of Technology (B.Tech.)' },
            { value: 'mbbs', text: 'Bachelor of Medicine, Bachelor of Surgery (MBBS)' }
        ];
    } else if (level === 'Postgraduate Degrees') {
        options = [
            { value: 'ma', text: 'Master of Arts (M.A.)' },
            { value: 'msc', text: 'Master of Science (M.Sc.)' },
            { value: 'mcom', text: 'Master of Commerce (M.Com.)' },
            { value: 'mtech', text: 'Master of Technology (M.Tech.)' },
            { value: 'mba', text: 'Master of Business Administration (MBA)' }
        ];
    } else if (level === 'Doctorate Degrees') {
        options = [
            { value: 'phd', text: 'Doctor of Philosophy (Ph.D.)' },
            { value: 'md', text: 'Doctor of Medicine (MD)' }
        ];
    } else if (level === 'Diplomas and Certificates') {
        options = [
            { value: 'diplomaEng', text: 'Diploma in Engineering' },
            { value: 'pgdm', text: 'Post Graduate Diploma in Management (PGDM)' },
            { value: 'certificate', text: 'Certificate courses in various fields' }
        ];
    }

    // Add new options to the dropdown
    options.forEach(function(option) {
        var opt = document.createElement('a');
        opt.href = '#';
        opt.onclick = function() { selectOption(option.text, 'phoneInput2'); };
        opt.textContent = option.text;
        degreeDropdown.appendChild(opt);
    });
}