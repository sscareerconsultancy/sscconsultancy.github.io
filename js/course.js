const titleBoxes = document.querySelectorAll('.title-box');
        const descriptionBox = document.querySelector('.description');

        titleBoxes.forEach(titleBox => {
            titleBox.addEventListener('click', () => {
                // Remove 'active' class from any previously active title
                titleBoxes.forEach(tb => tb.classList.remove('active'));

                // Add 'active' class to the clicked title
                titleBox.classList.add('active');

                // Update description based on the clicked title's data-description attribute
                const description = titleBox.dataset.description;
                descriptionBox.textContent = description;
            });
        });
