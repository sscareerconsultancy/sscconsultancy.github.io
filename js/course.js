function showPopup(title, content) {
            document.getElementById('popup-title').textContent = title;
            document.getElementById('popup-content').textContent = content;
            document.getElementById('blur-background').style.display = 'block';
            document.getElementById('popup').style.display = 'block';
        }
        
        function closePopup() {
            document.getElementById('blur-background').style.display = 'none';
            document.getElementById('popup').style.display = 'none';
        } updateDescription(description) {
            document.getElementById('course-description').innerText = description;
}
