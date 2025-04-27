import React from "react";
import "/src/styles/fonctionnalite.css"; // Assurez-vous d’avoir le fichier CSS correspondant
import curve from "/src/assets/images/arrow_curve_right.png";
import store from "/src/assets/images/logo_dow.png"; // Assurez-vous d’avoir l’image correspondante

const FonctionnaliteView = () => {
  return (
    <main className="container">
      <section className="intro">
        <p className="subtitle">Nos solutions</p>
        <h1>
          <span style={{ color: "blue" }}>Trois solutions</span> connectées< br /> pour digitaliser votre < br/> de transport
        </h1>
        <div className="secondary-text">
          <span>Digitalisation du transport de A à Z</span>
          <img
            src={curve}
            alt="arrow"
            className="arrow"
          />
          <p>slider à droite</p>
        </div>
      </section>
      <section className="slideur">
      <div className="bus-app-section">
      <h4 className="top-left">— Application Passager</h4>
      <h1 className="middle-left">L’app mobile pour réserver et acheter des tickets de bus en ligne</h1>
      <a href="#" className="bottom-left-link">Demander une démo</a>
      <div className="bottom-left-text">
        <div className="store-icons">
          <img src={store} alt="Play Store" />
        
        </div>
        <p>Recherchez, comparez et <br/>
          achetez des tickets <br/>
          de bus en quelques clics, <br/>
          selon les compagnies disponibles.</p>
        
      </div>
    </div>
    <div className="chauffeur-app-section">
      <h4 className="top-left">— Application chauffeur</h4>
      <h1 className="middle-left">L’outil connecté<br/>
         pour suivre les <br />
         trajets et gérer <br />
         les passagers</h1>
      <a href="#" className="bottom-left-link">Demander une démo</a>
      <div className="bottom-left-text">
        <div className="store-icons">
          <img src={store} alt="Play Store" />
        
        </div>
        <p>Une seconde application, dédiée<br/>
          aux chauffeurs. Ils gèrent<br/>
           leur planning, scannent <br/>
           les billets et démarrent<br/>
            leurs trajets directement <br />
            depuis l’interface, sans passer <br />
            par l’application client.</p>
        
      </div>
    </div>
    <div className="compagnie-app-section">
      <h4 className="top-left">— Dashboard compagnie</h4>
      <h1 className="middle-left">Le tableau de bord <br />
         pour superviser vos <br />
         opérations en temps réel</h1>
      <a href="#" className="bottom-left-link">Demander une démo</a>
      <div className="bottom-left-text">
      Suivez vos recettes, <br />
      gérez vos trajets, <br />
      vos chauffeurs et vos bus <br />
      depuis une interface intuitive.
        
      </div>
    </div>
    </section>

    
     
    </main>
  );
};

export default FonctionnaliteView;
