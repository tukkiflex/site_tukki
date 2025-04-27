import React from 'react';
import '/src/styles/header.css';
import headerLogo from '/src/assets/images/tukki_logo.png';
import profilperso from '/src/assets/images/malick.jpg';
import fleche from '/src/assets/images/Arrow_down.png';
const HeaderView = () => {
    return (
        <header >
            <div className="header_top">
                <img src={headerLogo} alt="Logo" className="header_logo" />
                <div className="menu">
                    <ul className="menu_list">
                        <li className="menu_item">Fonctionnalités</li>
                        <li className="menu_item">Utilisateurs</li>
                        <li className="menu_item">Compagny</li>
                        <li className="menu_item">Investisseurs</li>
                        <li className="menu_item">Contact</li>
                    </ul>
                </div>
                <button className="header_button">Obtenir une démo gratuitement</button>
            </div>
            <div className="header_middle">
                <div className='profil'>
                <img src={profilperso} alt="Profil" className="header_profil" />
                </div>
                <h1 className="header_title">
                Propulsez votre <br />
                compagnie de <br />
                transport dans<br />
                l'ère digitale.
                </h1>
                <p className="header_description">
                Notre solution complète vous offre une vue en<br/>
                temps réel sur vos trajets, chauffeurs, recettes<br/>
                 et passagers.
                 </p>
                <button className="header_button">Planifier une démonstation gratuite</button>
                <div className='View_all'>
                <p className="text_bottom">Découvrez nos solutions</p>
                <img src={fleche} alt="Logo" className="fleche" />
                </div>
           </div>
    
        </header>
    );
    }
export default HeaderView;  