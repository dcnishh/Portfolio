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
    project.innerHTML = "<h3>project one</h3><p></p>";
    projectList.appendChild(project);
});
