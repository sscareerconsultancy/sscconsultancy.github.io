
document.addEventListener('DOMContentLoaded', function() {
    const courseId = localStorage.getItem('selectedCourse');
    console.log('Loaded course ID:', courseId); // Debugging log
    if (courseId) {
        const courseElement = document.getElementById(courseId);
        if (courseElement) {
            courseElement.style.display = 'block';
        } else {
            alert('Course element not found for ID:', courseId); // Debugging log
        }
        localStorage.removeItem('selectedCourse');
    } else {
        alert('No course ID found in local storage'); // Debugging log
    }
});
    
