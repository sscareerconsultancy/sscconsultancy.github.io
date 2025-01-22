
const courses = {
    'course-detail1': {
        title: 'SQL (Oracle, Snowflake, SSMS, MySQL)',
        modules: [
            {
                title: 'Module 1: Introduction to SQL',
                topics: [
                    'Overview of SQL and Its Importance: Understanding the role of SQL in data management and analysis.',
                    'Basic Concepts and Terminology: Key terms like databases, tables, rows, columns, and primary keys.',
                    'Setting Up SQL Environments: Installation and configuration for Oracle, Snowflake, SSMS, and MySQL'
                ]
            },
            {
                title: 'Module 2: Basic SQL Commands',
                topics: [
                    'SELECT Statements: Retrieving data from databases',
                    'Filtering Data with WHERE: Applying conditions to filter results',
                    'Sorting Data with ORDER BY: Organizing data in a specific order',
                    'Basic Commands in Oracle, Snowflake, SSMS, and MySQL: Platform-specific syntax and usage'
                ]
            },
            {
                title: 'Module 3: Advanced SQL Queries',
                topics: [
                    'JOIN Operations: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN',
                    'Subqueries and Nested Queries: Writing queries within queries',
                    'Aggregate Functions: SUM, COUNT, AVG, MIN, MAX',
                    'Advanced Querying Techniques: Platform-specific advanced queries'
                ]
            },
            {
                title: 'Module 4: Data Manipulation',
                topics: [
                    'INSERT, UPDATE, DELETE Statements: Modifying data in databases',
                    'Transactions and Rollback: Ensuring data integrity',
                    'Handling NULL Values: Managing missing data',
                    'Data Manipulation Specifics for Each Platform: Unique features and syntax'
                ]
            },
            {
                title: 'Module 5: Advanced Topics',
                topics: [
                    'Indexing and Performance Optimization: Improving query performance',
                    'Stored Procedures and Functions: Writing reusable SQL code',
                    'Triggers and Views: Automating tasks and creating virtual tables',
                    'Platform-Specific Advanced Topics: Unique features of Oracle, Snowflake, SSMS, and MySQL'
                ]
            },
            {
                title: 'Module 6: Practical Applications',
                topics: [
                    'Real-World Case Studies: Applying SQL to solve real problems',
                    'SQL in Data Analysis and Reporting: Using SQL for business intelligence',
                    'Practical Applications for Oracle, Snowflake, SSMS, and MySQL: Specific use cases and examples'
                ]
            },
            {
                title: 'Module 7: Capstone Project',
                topics: [
                    'Comprehensive Project Integrating All Learned Concepts: A final project to demonstrate mastery',
                    'Real-World Data Analysis and Reporting: Analyzing and reporting on real datasets',
                    'Platform-Specific Implementations and Optimizations: Tailoring solutions to each SQL platform'
                ]
            }
            // Add other modules here
        ],
        features: [
            'Hands-on Practice: Includes practical exercises and real-world projects.',
            'Expert Instructors: Learn from experienced professionals.',
            'Flexible Learning: Available in both live online and self-paced formats.',
            '24/7 Lab Access: Remote access to databases for practice.'
        ],
        pricing: {
            price: '₹3000',
            duration: '10 weeks',
            startDate: 'Starts Soon',
            schedule: 'Mondays to  Friday, 7:00 AM - 7:45 AM',
            location: 'Online',
            description: 'This course covers the fundamentals of SQL (Oracle, Snowflake, SSMS, MySQL).'
        }
    },
    'course-detail2': {
        title: 'Advanced SQL/PLSQL',
        modules: [
            {
                title: 'Module 1: Advanced SQL Queries',
                topics: [
                    'Subqueries and joins',
                    'Window functions',
                    'Common table expressions (CTEs)',
                    'Query optimization'
                ]
            },
            // Add other modules here
        ],
        features: [
            'Hands-on Practice: Includes practical exercises and real-world projects.',
            'Certification: Earn a certification upon completion.',
            'Expert Instructors: Learn from experienced professionals.',
            'Flexible Learning: Available in both live online and self-paced formats.',
            '24/7 Lab Access: Remote access to databases for practice.'
        ],
        pricing: {
            price: '₹4000',
            duration: '10 weeks',
            startDate: 'Starts Soon',
            schedule: 'Mondays to  Friday, 7:00 AM - 7:45 AM',
            location: 'Online',
            description: 'This course covers advanced SQL and PLSQL topics.'
        }
    }
};

function loadCourseDetails(courseId) {
    const course = courses[courseId];
    const courseElement = document.getElementById(courseId);
    if (course && courseElement) {
        let content = `<div class="full-width-container block-1">
                        <div class="custom-container">
                            <h4>${course.title}</h4>`;

        course.modules.forEach(module => {
            content += `<div class="course-module new-list">
                            <h3>${module.title}</h3>
                            <ul>`;
            module.topics.forEach(topic => {
                content += `<li>${topic}</li>`;
            });
            content += `</ul></div>`;
        });

        content += `<div class="course-module new-list">
                        <h3>Course Features</h3>
                        <ul>`;
        course.features.forEach(feature => {
            content += `<li>${feature}</li>`;
        });
        content += `</ul></div>`;

        content += `<div class="course-module new-header">
                        <h3>Course Pricing</h3>
                        <p><strong>Price:</strong>${course.pricing.price}</p>
                        <p><strong>Duration:</strong>${course.pricing.duration}</p>
                        <p><strong>Start Date:</strong>${course.pricing.startDate}</p>
                        <p><strong>Schedule:</strong>${course.pricing.schedule}</p>
                        <p><strong>Location:</strong>${course.pricing.location}</p>
                        <p><strong>Description:</strong>${course.pricing.description}</p>
                    </div>
                    <div class="apply-container">
                        <a href="form.html"><button type="button" class="btn">Apply</button></a>
                    </div>`;

        content += `</div></div>`;
        courseElement.innerHTML = content;
        courseElement.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const courseId = localStorage.getItem('selectedCourse');
    if (courseId) {
        loadCourseDetails(courseId);
        localStorage.removeItem('selectedCourse');
    }
    else 
    { 
        window.location.href = 'index-2.html'; // Redirect to the course selection page if no course is selected 
    }
});



// document.addEventListener('DOMContentLoaded', function() {
//     const courseId = localStorage.getItem('selectedCourse');
//     console.log('Loaded course ID:', courseId); // Debugging log
//     if (courseId) {
//         const courseElement = document.getElementById(courseId);
//         if (courseElement) {
//             courseElement.style.display = 'block';
//         } else {
//             alert('Course element not found for ID:', courseId); // Debugging log
//         }
//         localStorage.removeItem('selectedCourse');
//     } else {
//         alert('No course ID found in local storage'); // Debugging log
//     }
// });
