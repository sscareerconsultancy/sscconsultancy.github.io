document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll('h4 a[data-content]');
    const contentDiv = document.getElementById('content');

    headers.forEach(header => {
        header.addEventListener('click', function(event) {
            event.preventDefault();
            const contentId = event.target.getAttribute('data-content');
            loadContent(contentId);
        });
    });

    function loadContent(contentId) {
        let content = '';

        switch(contentId) {
            case 'content1':
                content = `
                    <h2>SQL (Oracle, Snowflake, SSMS, MySQL)</h2>
                    <p>Master the art of database management and query optimization. Learn to write efficient SQL queries and handle various database platforms like Oracle, Snowflake, MySQL, and SQL Server Management Studio (SSMS).</p>
                `;
                break;
            case 'content2':
                content = `
                    <h2>Advanced SQL/PLSQL</h2>
                    <p>Dive deeper into SQL and PLSQL for complex queries, stored procedures, and performance optimization. Learn to work with triggers, functions, and views to enhance your database programming skills.</p>
                `;
                break;
            case 'content3':
                content = `
                    <h2>CNC (Computer Numerical Control)</h2>
                    <p>Learn to operate and program CNC machines for precision manufacturing. Topics include CAD/CAM, CNC programming languages, and machine setup.</p>
                `;
                break;
            // Add more cases for additional content
            default:
                content = '<p>Content not found.</p>';
                break;
        }

        contentDiv.innerHTML = content;
    }
});
