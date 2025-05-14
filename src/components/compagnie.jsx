import React, { useState } from "react";
import "/src/styles/compagnie.css"; // Feuille de style principale

// Liste des fonctionnalités présentées dans le carrousel
const pousse = [
  {
    title: "📅 1. Suivi des trajets en temps réel",
    image: "/src/assets/images/conduc1.png",
    description:
      "Chaque chauffeur peut consulter son planning de la journée, avec ses prochains départs, horaires, points de départ et d’arrivée. Il sait exactement où il doit être, et à quel moment.",
  },
  {
    title: "📲 2. Scan rapide des billets",
    image: "/src/assets/images/conduc2.png",
    description:
      "Fini les listes papiers ou les appels à répétition. Dès qu’un passager monte, le chauffeur scanne son billet via l’application. C’est rapide, sécurisé, et ça évite les fraudes.",
  },
  {
    title: "🔔 3. Notifications & coordination avec la compagnie",
    image: "/src/assets/images/conduc3.png",
    description:
      "Chaque chauffeur reçoit des alertes importantes : retards, modifications de trajet ou consignes spéciales. Il reste connecté à la compagnie et peut gérer les imprévus plus sereinement.",
  },
];

const CompagnieView = () => {
  const [current, setCurrent] = useState(0);

  // Navigation dans les fonctionnalités
  const next = () => setCurrent((i) => (i + 1) % pousse.length);
  const prev = () => setCurrent((i) => (i - 1 + pousse.length) % pousse.length);

  // Données courantes affichées
  const { title, image, description } = pousse[current];

  return (
    <div className="driver-app-wrapper">
      {/* Bouton de réservation de démo en haut */}
      <div className="demo-button-top-compagnie">
        <img
          src="/src/assets/images/airplay.png"
          alt="icône démo"
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

      {/* Titre principal */}
      <h1 className="driver-hero-title">
        <span className="highlight-yellow">Une application conçue</span> pour <br />
        faciliter le travail de vos <br />
        conducteurs <span role="img" aria-label="bus">🚌</span>
      </h1>

      {/* Bandeau illustratif */}
      <div className="driver-phone-strip">
        <img
          src="/src/assets/images/bande_conducteur.png"
          alt="bande conducteur"
        />
      </div>

      {/* Texte d'introduction */}
      <p className="driver-intro">
        📱 Tout est centralisé pour que chaque conducteur ait une vision claire
        de ses trajets, puisse embarquer les passagers facilement, et rester
        connecté à la compagnie en temps réel.
      </p>

      {/* Section cockpit : slogan + carrousel de fonctionnalités */}
      <section className="cockpit-section-compagnie">

        {/* Slogan de la solution compagnie */}
        <div className="cockpit-header-compagnie">
          
          <h2>
            📦 <br />
            Piloter. Scanner. <br />
            Avancer.<br />
                       <span style={{ color: "#0071E3", fontSize: 14 }}>Fonctionnalité clé de l’app </span>
          </h2>
          <a
            href="https://calendly.com/blackseck0706/demo-gratuite"
            className="demo-button"
          >
            Réserver une démo →
          </a>
        </div>

        {/* Carrousel de fonctionnalités */}
        <div className="feature-compagnie">
          <h3>{title}</h3>
          <div className="feature-content-compagnie">
            <button className="nav-arrow-compagnie" onClick={prev}>‹</button>
            <img src={image} alt="feature" className="dashboard-img-compagnie" />
            <button className="nav-arrow-compagnie" onClick={next}>›</button>
          </div>
          <p className="feature-description-compagnie" style={{ color: "white" }}>
            {description}
          </p>
        </div>

      </section>
    </div>
  );
};

export default CompagnieView;
