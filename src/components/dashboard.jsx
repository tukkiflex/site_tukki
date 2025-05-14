import React, { useState } from "react";
import "/src/styles/dashboard.css"; // Fichier CSS spécifique à ce composant

// Liste des fonctionnalités à afficher dans le carrousel
const slo = [
  {
    title: "📍 1. Suivi des opérations en temps réel",
    image: "/src/assets/images/dash1.png",
    description:
      "Voyages en cours, retards, passagers embarqués, recettes du jour… tout est visible en un coup d’œil. Plus besoin d’appels ou de rapports papier : tout est digitalisé.",
  },
  {
    title: "🚍 2. Gestion centralisée des ressources",
    image: "/src/assets/images/dash2.png",
    description:
      "Depuis le dashboard, la compagnie peut attribuer les bus aux trajets, organiser les plannings des chauffeurs, et suivre l’état du matériel. Fini les erreurs de coordination.",
  },
  {
    title: "📊 3. Suivi des performances & de la rentabilité",
    image: "/src/assets/images/dash3.png",
    description:
      "Chaque ticket vendu est enregistré automatiquement. Vous pouvez consulter vos chiffres d’affaires, voir quels trajets sont les plus rentables et ajuster votre stratégie.",
  },
];

const DashboardView = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Passe à la fonctionnalité suivante
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slo.length);
  };

  // Revient à la fonctionnalité précédente
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slo.length) % slo.length);
  };

  // Récupération de l’élément actif
  const { title, image, description } = slo[currentSlide];

  return (
    <div className="dashboard-container">
      {/* Bandeau supérieur avec appel à l'action */}
      <div className="haut">
        <div className="demo-button-top">
          <img
            src="/src/assets/images/airplay.png"
            alt="demo icon"
            className="button-icon"
          />
          <p className="demo-text">Réserver une démo avec notre équipe</p>
          <a
            href="https://calendly.com/blackseck0706/demo-gratuite"
            className="demo"
          >
            ›
          </a>
        </div>

        {/* Titre principal de la section */}
        <h1 className="main-title">
          Une interface complète pour <br />
          piloter toute votre <span className="highlighted">compagnie 📊</span>
        </h1>

        {/* Paragraphe de présentation */}
        <p className="subtext">
          Depuis un seul espace, suivez vos trajets en temps réel, gérez vos
          chauffeurs, vos bus, vos revenus — et prenez les meilleures décisions
          avec des données concrètes.
        </p>
      </div>

      {/* Section cockpit avec titre et carrousel de fonctionnalités */}
      <section className="cockpit-section">
        <div className="cockpit-header">
          <h2>
           📦 <br />
            Le cockpit de <br />
            votre compagnie <br />
            <span style={{ color: "white", fontSize: 14 }}>Fonctionnalité clé du dashboard</span>
          </h2>
          <a
            href="https://calendly.com/blackseck0706/demo-gratuite"
            className="demo-button"
          >
            Réserver une démo →
          </a>
        </div>

        {/* Carrousel avec titre, image, description */}
        <div className="feature">
          <h3>{title}</h3>
          <div className="feature-content">
            <button className="nav-arrow" onClick={prevSlide}>
              ‹
            </button>
            <img src={image} alt="feature" className="dashboard-img" />
            <button className="nav-arrow" onClick={nextSlide}>
              ›
            </button>
          </div>
          <p className="feature-description">{description}</p>
        </div>
      </section>
    </div>
  );
};

export default DashboardView;
