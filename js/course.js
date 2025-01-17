 const courseTitles = document.querySelectorAll('.course-title');
        const detailBox = document.getElementById('courseDetailBox');

        courseTitles.forEach(title => {
            title.addEventListener('mouseover', updateDetailBox);
            title.addEventListener('click', updateDetailBox);
        });

        function updateDetailBox(event) {
            const detail = event.target.getAttribute('data-detail');
            detailBox.innerHTML = detail;
            detailBox.style.display = 'block'; // Show the detail box
        }
