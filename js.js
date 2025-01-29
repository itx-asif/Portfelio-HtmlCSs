function showSection(evt,sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden')
        
    });

    // Show the selected section
    document.getElementById(sectionId).classList.remove('hidden');
    document.querySelectorAll('.tabs').forEach(tab=>{
        tab.classList.remove("active")
    })
    evt.currentTarget.className += " active";
}
// Get the side nav and hamburger icon
// Get the side nav, hamburger, and close button
const sidenav = document.getElementById('sidenav');
const hamburger = document.getElementById('hamburger');
const closebtn = document.getElementById('closebtn');

// Toggle the sidenav on/off when clicking the hamburger icon
hamburger.addEventListener('click', () => {
    sidenav.style.width = '250px';
});

// Close the sidenav when clicking the close button
closebtn.addEventListener('click', () => {
    sidenav.style.width = '0';
});
