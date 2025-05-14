import React, { useState } from 'react';
import '/src/styles/utilisateur.css';
import bande from '/src/assets/images/groupe_image.png';

// Slides pour les fonctionnalités passagers
const passengerSlides = [
  {
    title: "🧭 Recherche intelligente de trajets",
    image: "/src/assets/images/user1.png",
    description:
      "Les utilisateurs peuvent consulter en quelques secondes l’ensemble des trajets disponibles, selon leur ville de départ, leur destination et la date souhaitée. Fini les allers-retours à la gare, tout est accessible en ligne.",
  },
  {
    title: "💳 Réservation rapide et paiement sécurisé",
    image: "/src/assets/images/user2.png",
    description:
      "Une fois le trajet sélectionné, le ticket peut être réservé et payé directement depuis l’application. Toutes les transactions sont sécurisées, et les billets sont disponibles instantanément, prêts à être scannés.",
  },
  {
    title: "🧾 Billets dématérialisés & suivi du voyage",
    image: "/src/assets/images/user3.png",
    description:
      "Chaque ticket est stocké dans l’app, et peut être présenté au chauffeur à l’aide d’un simple QR code. Les passagers peuvent également suivre l’état de leur trajet en temps réel, pour plus de tranquillité.",
  },
];

const UtilisateurView = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () =>
    setSlideIndex((prevIndex) => (prevIndex + 1) % passengerSlides.length);
  const prevSlide = () =>
    setSlideIndex((prevIndex) => (prevIndex - 1 + passengerSlides.length) % passengerSlides.length);

  const { title, image, description } = passengerSlides[slideIndex];

  return (
    <section className="passenger-container">
      
      {/* Bandeau top : stats + bouton démo */}
      <div className="topp">
        <a
          href="https://calendly.com/blackseck0706/demo-gratuite"
          className="demo-user"
        >
          Réserver une démo →
        </a>

        <div className="passenger-metrics">
          <div>+25%<p>De taux d’utilisation <br /> moyen par mois</p></div>
          <div>0FCFA<p>Portefeuille numérique <br />intégré pour les passagers</p></div>
          <div>1min<p>En moyenne pour <br /> acheter son ticket</p></div>
        </div>
      </div>

      {/* Appel à action avec icône et lien */}
      <div className="demo-button-top-user">
        <img
          src="/src/assets/images/airplay_noir.png"
          alt="demo icon"
          className="button-icon"
        />
        <p className="demo-text">Réserver une démo avec notre équipe</p>
        <a
          href="https://calendly.com/blackseck0706/demo-gratuite"
          className="demos"
        >
          ›
        </a>
      </div>

      {/* Titre principal */}
      <h2 className="passenger-title">
        Une expérience <br />
        fluide pour <span className="highlight">chaque <br />passager.</span>
      </h2>

      {/* Image galerie */}
      <div className="phone-gallery">
        <img src={bande} alt="Galerie téléphones" />
      </div>

      {/* Sous-texte d’accroche */}
      <p className="passenger-subtext">
        Offrez à vos clients un nouveau standard de confort, de <br />
        transparence et de gain de temps pour chaque étape du voyage.

      </p>

      {/* Section cockpit/diaporama des fonctionnalités */}
      <section className="cockpit-section-app">
        <div className="cockpit-header-app">

          <h2>
           📦 <br />
            Pensée pour <br />
            simplifier <span className="highlight">chaque <br /> étape du voyage</span> <br />
           <span style={{ color: "#0071E3", fontSize: 14 }}>Fonctionnalité clé de l’app </span>

          </h2>
          <a
              href="https://calendly.com/blackseck0706/demo-gratuite"
              className="demo-button-app">Réserver une démo →
          </a>
      
        </div>

        <div className="feature-app">
          <h3>{title}</h3>

          <div className="feature-content-app">
            <button className="nav-arrow-app" onClick={prevSlide}>‹</button>
            <img src={image} alt="Fonctionnalité" className="dashboard-img-app" />
            <button className="nav-arrow-app" onClick={nextSlide}>›</button>
          </div>

          <p className="feature-description-app">{description}</p>
        </div>
      </section>
    </section>
  );
};

export default UtilisateurView;
