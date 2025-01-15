document.getElementById('phoneInput').addEventListener('click', function() {
    document.getElementById('myDropdown').classList.add('show');
});

function selectOption(value) {
    document.getElementById('phoneInput').value = value;
    document.getElementById('myDropdown').classList.remove('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#phoneInput')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


