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
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 4
        }
    }
});