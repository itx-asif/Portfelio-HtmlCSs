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
