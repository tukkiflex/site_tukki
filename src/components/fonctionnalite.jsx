import React from "react";
import "/src/styles/fonctionnalite.css";

// Import des images
import curve from "/src/assets/images/arrow_curve_right.png";
import store from "/src/assets/images/logo_dow.png";
import slide1 from "/src/assets/images/slide11.png";
import slide2 from "/src/assets/images/slide12.png";
import slide3 from "/src/assets/images/slide13.png";

const FonctionnaliteView = () => {
  return (
    <main className="container">
      {/* Introduction */}
      <section className="intro">
        <p className="subtitle">Nos solutions</p>
        <h1>
          <span style={{ color: "#0071E3" }}>Trois solutions</span> connectées<br />
          pour digitaliser votre<br /> compagnie de transport
        </h1>

        <div className="secondary-text">
          <span>Digitalisation du transport de A à Z</span>
          <img src={curve} alt="arrow" className="arrow" />
          <p>slider à droite</p>
        </div>
      </section>

      {/* Section principale des slides */}
      <section className="slideur">
        
        {/* Slide 1 — Application Passager */}
        <div className="bus-app-section">
          <div className="content-left">
            <div className="high">
              <h2 className="top-left">— Application Passager</h2>
              <h3 className="middle-left">
                L’app mobile pour réserver et acheter<br /> des tickets de bus en ligne
              </h3>
            </div>
            <a
              href="https://calendly.com/blackseck0706/demo-gratuite"
              className="demo-link"
            >
              Demander une démo
            </a>
          </div>

          <div className="content-center">
            <img src={slide1} alt="Application mobile" className="slide-image-app" />
          </div>

          <div className="bottom-left-text">
            <div className="store-icon">
              <img src={store} alt="Play Store" />
            </div>
            <p>
              Recherchez, comparez et achetez<br />
              des tickets de bus en quelques clics,<br />
              selon les compagnies disponibles.
            </p>
          </div>
        </div>

        {/* Slide 2 — Application Chauffeur */}
        <div className="chauffeur-app-section">
          <div className="content-left">
            <div className="high">
              <h4 className="top-left">— Application chauffeur</h4>
              <h5 className="middle-left">
                L’outil connecté<br />
                pour suivre les trajets<br />
                et gérer les passagers.
              </h5>
            </div>
            <a
              href="https://calendly.com/blackseck0706/demo-gratuite"
              className="bottom-left-link"
            >
              Demander une démo
            </a>
          </div>

          <div className="content-center">
            <img src={slide2} alt="Application chauffeur" className="slide-image-chauffeur" />
          </div>

          <div className="bottom-left-text">
            <div className="store-icons">
              <img src={store} alt="Play Store" />
            </div>
            <p>
              Une seconde application dédiée aux chauffeurs.<br />
              Ils gèrent leur planning, scannent les billets<br />
              et démarrent leurs trajets depuis leur interface,<br />
              sans passer par l’app client.
            </p>
          </div>
        </div>

        {/* Slide 3 — Dashboard Compagnie */}
        <div className="compagnie-app-section">
          <div className="content-left">
            <div className="high">
              <h6 className="top-left">— Dashboard compagnie</h6>
              <h7 className="middle-left">
                Le tableau de <br />
                bord pour<br />
                superviser vos opérations<br />
                en temps réel.
              </h7>
            </div>
            <a
              href="https://calendly.com/blackseck0706/demo-gratuite"
              className="bottom-left-link"
            >
              Demander une démo
            </a>
          </div>

          <div className="content-center">
            <img src={slide3} alt="Dashboard compagnie" className="slide-image-compagnie" />
          </div>

          <div className="bottom-left-text">
            <p>
              Suivez vos recettes, gérez vos trajets,<br />
              vos chauffeurs et vos bus depuis<br />
              une interface intuitive.
            </p>
          </div>
        </div>

      </section>
    </main>
  );
};

export default FonctionnaliteView;
