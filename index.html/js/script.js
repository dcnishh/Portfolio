// This script shows an alert when the page loads
// git add .
// git commit -m "Add custom modal instead of alert"
// git push 

// Purpose: Show the custom modal instead of using alert() to avoid highlighting the address bar and to provide a better user experience.
window.onload = function() {
    // alert('Good day!'); // Purpose: This line is now commented out to prevent the default alert.
    // Purpose: Display the custom modal by setting its display style to 'flex'.
    document.getElementById('custom-modal').style.display = 'flex';
};

// Example: Dynamically add a project
document.addEventListener('DOMContentLoaded', function() {
    let projectList = document.getElementById('project-list');
    let project = document.createElement('div');
    projectList.appendChild(project);
    projectList.appendChild(project);
});

// ...existing code...

// Purpose: Data for each project card and modal.
// Why: Centralizes project info for easy updates and dynamic modal content.
const projectData = [
    {
        img: 'image/test.jpg',
        title: 'Project One',
        desc: ''
    },
    {
        img: 'image/test2.jpg',
        title: 'Project Two',
        desc: ''
    },
    {
        img: 'image/test3.jpg',
        title: 'Project Three',
        desc: ''
    },
    {
        img: 'image/test4.jpg',
        title: 'Project Four',
        desc: ''
    },
    {
        img: 'image/test7.jpg',
        title: 'Project Five',
        desc: ''
    },
    {
        img: 'image/test6.jpg',
        title: 'Project Six',
        desc: ''
    }
];

// Purpose: Show modal with project details when a card is clicked.
// Why: Provides a pop-out experience for each project.
document.addEventListener('DOMContentLoaded', function() {
    // ...existing code...

    // Select all project cards
    const cards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const closeModal = document.getElementById('close-project-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');

    // Add click event to each card
    cards.forEach((card, idx) => {
        card.addEventListener('click', function() {
            // Purpose: Fill modal with the correct project data.
            modalImg.src = projectData[idx].img;
            modalTitle.textContent = projectData[idx].title;
            modalDesc.textContent = projectData[idx].desc;
            modal.style.display = 'flex';
        });
    });

    // Purpose: Close modal when close button is clicked.
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Purpose: Close modal when clicking outside modal content.
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
