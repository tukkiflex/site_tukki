import React, { useState } from 'react';
import '/src/styles/header.css';
import headerLogo from '/src/assets/images/tukki_logo.png';

import fleche from '/src/assets/images/Arrow_down.png';

const HeaderView = () => {
  // State pour gérer l'ouverture/fermeture du menu hamburger
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id ="header" >
      {/* Section Header Top: Logo et Menu */}
      <div className="header_top">
        {/* Logo du site */}
        <img src={headerLogo} alt="Logo" className="header_logo" />

        {/* Menu hamburger */}
        <div className="menu">
          {/* Hamburger icon pour basculer le menu */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
          </div>

          {/* Liste du menu, ouverte si 'menuOpen' est vrai */}
          <ul className={`menu_list ${menuOpen ? 'open' : ''}`}>
            <li className="menu_item">
              <a href="#fonctionnalite">Fonctionnalités</a>
            </li>
            <li className="menu_item">
              <a href="#utilisateur">Utilisateurs</a>
            </li>
            <li className="menu_item">
              <a href="#compagnie">Compagnies</a>
            </li>
            <li className="menu_item">
              <a href="#footer">A propos</a>
            </li>
          </ul>
        </div>

        {/* Bouton pour obtenir une démo gratuite */}
        <a
          href="https://calendly.com/blackseck0706/demo-gratuite"
          className="header_button"
        >
          Obtenir une démo gratuitement
        </a>
      </div>

      {/* Section Header Middle: Profil et message principal */}
      <div className="header_middle">
        {/* Image de profil */}
  

        {/* Titre principal */}
        <h1 className="header_title">
          Propulsez votre compagnie <br />
         de transport dans <br />
         l'ère digitale.
         
        </h1>

        {/* Description de la solution */}
        <p className="header_description">
          Notre solution complète vous offre une vue en<br />
          temps réel sur vos trajets, chauffeurs, recettes et passagers.
        </p>

        {/* Bouton pour planifier une démonstration gratuite */}
        <a
          href="https://calendly.com/blackseck0706/demo-gratuite"
          className="header_middle_button"
        >
          Planifier une démonstration gratuite
        </a>

        {/* Section pour découvrir toutes les solutions */}
        <div className="View_all">
          <p className="text_haut">Découvrez nos solutions</p>
          {/* Icône de flèche */}
          <img href="#fonctionnalite"src={fleche} alt="Fleche bas" className="fle" />
        </div>
      </div>
    </header>
  );
};

export default HeaderView;
