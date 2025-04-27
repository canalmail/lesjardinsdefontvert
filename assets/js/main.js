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
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    async handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        try {
            // Ici, vous pouvez ajouter votre logique d'envoi de formulaire
            console.log('Données du formulaire:', data);
            this.showMessage('Message envoyé avec succès!', 'success');
            this.form.reset();
        } catch (error) {
            this.showMessage('Une erreur est survenue. Veuillez réessayer.', 'error');
        }
    }
    showMessage(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type === 'success' ? 'success' : 'danger'} mt-3`;
        alertDiv.textContent = message;
        this.form.appendChild(alertDiv);
        setTimeout(() => alertDiv.remove(), 5000);
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