// Configuration
const CONFIG = {
    sliderInterval: 5000
};

// Gestionnaire de formulaire de contact
class ContactForm {
    constructor() {
        this.form = document.querySelector('#contact form');
        if (!this.form) return;
        this.init();
    }
    init() {
        this.form.addEventListener('submit', (e) => {
            // On laisse le formulaire s'envoyer naturellement à Formspree
            console.log('Formulaire soumis à:', this.form.action);
            
            // On ajoute un message de chargement
            const loadingDiv = document.createElement('div');
            loadingDiv.className = 'alert alert-info mt-3';
            loadingDiv.textContent = 'Envoi en cours...';
            this.form.appendChild(loadingDiv);
            
            // On désactive le bouton d'envoi
            const submitButton = this.form.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.innerHTML = 'Envoi en cours...';
            }
        });
    }
}

// Gestionnaire de navigation
class Navigation {
    constructor() {
        this.header = document.querySelector('.header-custom');
        this.init();
    }
    init() {
        if (!this.header) return;
        window.addEventListener('scroll', () => this.handleScroll());
        this.handleScroll(); // Initial state
    }
    handleScroll() {
        if (window.scrollY > 50) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ContactForm();
    new Navigation();
    // Animation au défilement
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
}); 