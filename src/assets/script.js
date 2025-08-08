document.addEventListener('DOMContentLoaded', () => {

    // --- Active Navigation Link on Scroll ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 75) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });


    // --- Modal Logic ---
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalDetailsBtn = document.getElementById('modal-details-btn');
    const closeButton = document.querySelector('.close-button');

    // Portfolio Modals
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', () => {
            const title = item.getAttribute('data-title');
            const description = item.getAttribute('data-description');
            const detailUrl = item.getAttribute('data-detail-url');
            const imageSrc = item.getAttribute('data-image');

            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalImage.src = imageSrc;

            modalDetailsBtn.href = detailUrl;
            modalDetailsBtn.textContent = 'View Full Project';

            modalTitle.style.display = 'block';
            modalDescription.style.display = 'block';
            modalDetailsBtn.style.display = 'inline-block';
            modal.style.display = 'block';
        });
    });

    // Gallery Modals
    document.querySelectorAll('.gallery-item img').forEach(item => {
        item.addEventListener('click', () => {
            const description = item.getAttribute('data-description');
            const detailUrl = item.getAttribute('data-detail-url');
            const imageSrc = item.src;

            modalDescription.textContent = description;
            modalImage.src = imageSrc;

            modalDetailsBtn.href = 'gallery.html';
            modalDetailsBtn.textContent = 'Explore All Albums';

            modalTitle.style.display = 'none';
            modalDescription.style.display = 'block';
            modalDetailsBtn.style.display = 'inline-block';
            modal.style.display = 'block';
        });
    });

    // Close Modal Logic
    const closeModal = () => {
        modal.style.display = 'none';
        modalImage.src = ""; // Clear image src
    };

    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

    // Close with Escape key
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

});