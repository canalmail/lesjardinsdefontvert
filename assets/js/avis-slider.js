const AVIS_LIST = [
  {
    auteur: "Laurence Hélène",
    note: 5,
    texte: "Les Jardins de Font Vert s'occupent de l'entretien régulier de mon jardin depuis deux ans. Je recommande vivement cette entreprise pour son sérieux et la qualité de ses interventions.",
    date: "septembre 2024"
  },
  {
    auteur: "bernard huguet",
    note: 5,
    texte: "Les jardins de Font Vert sont une entreprise très professionnelle.\nApres avoir fait intervenir dans le cadre d' une résidence et d' une propriété personnelle de nombreuses société de paysagistes, Font Vert  est au dessus de tous. Qualité du travail, paysagé magnifique, rapidité du travail et prix très correct.\nJe les recommande à 100%.",
    date: "octobre 2023"
  },
  {
    auteur: "Bruno Menigoz",
    note: 5,
    texte: "Jardiniers très sérieux à l'heure à l'écoute du client. Un travail nickel et très soigné à recommander sans hésitation",
    date: "septembre 2024"
  },
  {
    auteur: "Florence Le Gallo",
    note: 5,
    texte: "J'ai fait appel à cette entreprise il y a 2 ans pour la conception et la réalisation de notre jardin que l'on souhaitait de type « provençal ».<br>Une pure merveille !🤩 … ",
    date: "juin 2020"
  },
  {
    auteur: "Eric Adrian",
    note: 5,
    texte: "Équipe très sympa et très pros. Taille des arbres très bien effectuée et travail très propre.<br><b>Positif</b> : Réactivité, Ponctualité, Qualité, Professionnalisme, Prix",
    date: "octobre 2023"
  },
  {
    auteur: "Chantal",
    note: 5,
    texte: "Travail soigné, impeccable. Première expérience très positive et certainement pas la dernière.",
    date: "novembre 2023"
  },
  {
    auteur: "Thierry Manao tiki",
    note: 5,
    texte: "Excellent  paysagiste, je conseille vivement, plein de bon conseils et prestations de qualitées",
    date: "mai 2022"
  },
  {
    auteur: "Raphael COHEN",
    note: 5,
    texte: "Grande efficacité alliée à un sérieux et une courtoisie exemplaires",
    date: "novembre 2023"
  },
  {
    auteur: "Julien Simon",
    note: 5,
    texte: "Super boulot, Merci encore pour ton serieux...💪👍",
    date: "octobre 2022"
  },
  {
    auteur: "NGUYEN BATHIEN Jonathan OSTEOPATHE D.O",
    note: 5,
    texte: "Un Artisan performant et honnête,à recommander",
    date: "août 2022"
  }
];

function getAvisHTML(avis) {
  return `<div class=\"avis-card p-4 h-100 d-flex flex-column justify-content-between\">\n    <div class=\"fw-bold mb-2\">${avis.auteur}</div>\n    <div class=\"mb-2 text-warning\" style=\"font-size:1.3rem;\">${'★'.repeat(avis.note)}</div>\n    <div class=\"mb-2\" style=\"white-space:pre-line;\">${avis.texte}</div>\n    <div class=\"text-muted mt-auto\" style=\"font-size:0.9em;\">${avis.date}</div>\n  </div>`;
}

class AvisSlider {
  constructor() {
    this.slider = document.getElementById('avis-slider');
    this.pagination = document.getElementById('avis-pagination');
    this.currentIndex = 0;
    this.visibleCount = this.getVisibleCount();
    this.init();
  }

  getVisibleCount() {
    return window.innerWidth < 768 ? 1 : 3;
  }

  getPageCount() {
    return Math.ceil(AVIS_LIST.length / this.visibleCount);
  }

  render() {
    this.visibleCount = this.getVisibleCount();
    const pageCount = this.getPageCount();
    if (this.currentIndex >= pageCount) this.currentIndex = 0;
    let html = '';
    for (let i = 0; i < this.visibleCount; i++) {
      const avisIndex = (this.currentIndex * this.visibleCount + i) % AVIS_LIST.length;
      if (avisIndex < AVIS_LIST.length) {
        html += getAvisHTML(AVIS_LIST[avisIndex]);
      }
    }
    this.slider.innerHTML = html;
    this.renderPagination();
  }

  renderPagination() {
    const pageCount = this.getPageCount();
    let pagHtml = '';
    for (let i = 0; i < pageCount; i++) {
      pagHtml += `<button class="avis-dot${i === this.currentIndex ? ' active' : ''}" data-index="${i}" aria-label="Aller à la page ${i+1}"></button>`;
    }
    this.pagination.innerHTML = pagHtml;
    Array.from(this.pagination.querySelectorAll('.avis-dot')).forEach(dot => {
      dot.addEventListener('click', (e) => {
        this.currentIndex = parseInt(dot.getAttribute('data-index'));
        this.render();
      });
    });
  }

  onResize() {
    this.render();
  }

  init() {
    this.render();
    window.addEventListener('resize', () => this.onResize());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new AvisSlider();
}); 