
  // Fetch data from the JSON file
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      // Get the container where the cards will be inserted
      const cardList = document.querySelector('.card-list');

      // Loop through the data and create each card dynamically
      data.forEach(item => {
        // Create the card structure
        const cardItem = document.createElement('li');
        cardItem.classList.add('card-item', 'swiper-slide');
        
        // Create the card content
        cardItem.innerHTML = `
          <a href="${item.link}" class="card-link">
            <img src="${item.image}" alt="Card Image" class="card-image">
            <p class="badge badge-${item.badge.toLowerCase()}">${item.badge}</p>
            <h2 class="card-title">${item.title}</h2>
            <button class="card-button material-symbols-rounded">arrow_forward</button>
          </a>
        `;
        
        // Append the card item to the card list
        cardList.appendChild(cardItem);
      });
      // Initialize Swiper after the content is added
      const swiper = new Swiper('.card-wrapper', {
        loop: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true

        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    })})
    .catch(error => console.error('Error loading data:', error));

