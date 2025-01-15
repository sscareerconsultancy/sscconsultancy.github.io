document.getElementById('phoneInput').addEventListener('click', function() {
    document.getElementById('myDropdown').classList.add('show');
});

function selectOption(value, amount) {
    document.getElementById('phoneInput').value = value;
    document.getElementById('amount').textContent = amount;
    document.getElementById('myDropdown').classList.remove('show');
    document.getElementById('amount').classList.add('show');
    
    var commissionInput = document.getElementById('amount').textContent = amount;
    
    if (commissionInput) {
        var commission = parseFloat(commissionInput);
        var commissionAmount = commission * 0.30;
        document.getElementById('commissionAmount').textContent = commissionAmount;
        
        var commissionInput3months = commissionInput3month * 3;
        document.getElementById('commissionInput3month').textContent = commissionInput3months;
    } else {
        document.getElementById('commissionAmount').textContent = '';
    }

    var commissionInput3month = document.getElementById('commissionAmount').textContent = commissionAmount;
    
    if (commissionInput3month) {
        var commission3month = parseFloat(commissionInput3month);
        var commissionInput3months = commission3month * 3 ;
        document.getElementById('commissionInput3month').textContent = commissionInput3months;
    } else {
        document.getElementById('commissionInput3month').textContent = '';
    }

    var Total = document.getElementById('commissionInput3month').textContent = commissionInput3months;
    
    if (Total) {
        var Totalnew = parseFloat(Total);
        var Totalall = Totalnew + 5999 ;
        document.getElementById('Total').textContent = Totalall;
    } else {
        document.getElementById('Total').textContent = '';
    }
    
}

function calculateCommission() {
    var amount = parseFloat(document.getElementById('amount').textContent);
    var commission = parseFloat(document.getElementById('commissionInput').value);
    var commissionAmount = commission * 0.30;
    document.getElementById('commissionAmount').textContent = commissionAmount;
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