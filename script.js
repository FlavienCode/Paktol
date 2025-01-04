// Accordéon
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const parent = header.parentElement;
        parent.classList.toggle('active');
    });
});

// Formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Merci pour votre message ! Nous reviendrons vers vous rapidement.');
    this.reset();
});

// Accordéons interactifs
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
    });
});
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        const fullText = button.previousElementSibling;
        if (fullText.style.display === 'block') {
            fullText.style.display = 'none';
            button.textContent = 'Lire plus';
        } else {
            fullText.style.display = 'block';
            button.textContent = 'Lire moins';
        }
    });
});

