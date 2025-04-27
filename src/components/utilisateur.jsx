import React from "react";
import "/src/styles/utilisateur.css"; // Assurez-vous d’avoir le fichier CSS correspondant
import groupe from "/src/assets/images/groupe_image.png"; // Assurez-vous d’avoir l’image correspondante
const UtilisateurView = () => {
  return (
    <><div className="experience-section">
          <div className="top-button">
              <button>Réserver une démo</button>
          </div>

          <div className="stats">
              <div className="stat">
                  <h2>+25%</h2>
                  <p>De chiffre d'affaires moyen sur 6 mois</p>
              </div>
              <div className="stat">
                  <h2>0 FCFA</h2>
                  <p>Perdus dans les négociations informelles</p>
              </div>
              <div className="stat">
                  <h2>1 min</h2>
                  <p>En moyenne pour embarquer un passager</p>
              </div>
          </div>

          <div className="title">
              <h1>Une expérience <br />
                 fluide pour 
                  <span>chaque passager</span></h1>
          </div>

          <div className="phone-images">
              <img src={groupe} alt="Phone" />

          </div>
      </div><div className="travel-step-section">
              <div className="header">
                  <p className="small-text">
                      Offrez à vos clients un nouveau standard de confort, <br />
                       de transparence et de simplicité pour leurs trajets en bus.
                  </p>

                  <div className="title-button">
                      <div className="title">
                          <h1>📦 
                          Pensée pour simplifie <br />
                          <span>chaque étape du voyage</span></h1>
                          <a href="#" className="subtitle-link">Fonctionnalité clé de l'app</a>
                      </div>

                      <button className="demo-button">Réserver une démo</button>
                  </div>
              </div>

              
          </div></>
  );
}
export default UtilisateurView;