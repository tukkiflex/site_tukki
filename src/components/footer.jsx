import React from 'react';
import '/src/styles/footer.css';

import malick from '/src/assets/images/malick.jpg';
import khadim from '/src/assets/images/khadim.jpg';
import boubacar from '/src/assets/images/boubacar.jpg';
import lamotte from '/src/assets/images/lamotte.jpg';
import mamadou from '/src/assets/images/mamadou.jpg';
import kamal from '/src/assets/images/kamal.jpg';
import logo from '/src/assets/images/Tukki_logo-black.png';
import smallLogo from '/src/assets/images/Tukki_logo-black.png';


const FooterView = () => {
  return (
   
    <div className="footer-wrapper">

    {/* === Section Header avec lien et équipe === */}
    <section className="footer-header" id="equipe">
      <div className="view-solutions">
        <a href="#fonctionnalite">Découvrez toutes nos solutions</a>
      </div>

      <div className="team-intro">
        <h2>Notre équipe d'expert</h2>
        <p>
          Nous sommes une équipe dédiée à transformer le secteur des transports grâce à des solutions innovantes et adaptées à vos besoins.
        </p>
      </div>

      <div className="team-section">
        {[
          { name: "Malick GUEYE", img: malick },
          { name: "Mamadou SECK", img: mamadou },
          { name: "Kamal Moussa MOUSTOIFA BEN", img: kamal },
          { name: "Khadim Gnigue", img: khadim },
          { name: "Mouhamed LAMOTTE", img: lamotte },
          { name: "Boubacar NIANG", img: boubacar },
         
        ].map((member, i) => (
          <div className="team-member" key={i}>
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
          </div>
        ))}
      </div>
    </section>
      <h1 className="faq-title">FAQ</h1>

      <section className="faq-section" id ="faq">
        {[
          {
            question: "🔸 Comment fonctionne le système de billetterie ?",
            answer: "Chaque compagnie peut mettre en ligne ses trajets sur la plateforme. Les passagers réservent et paient leurs billets en ligne. Ces billets sont ensuite visibles et scannables par les chauffeurs via leur application."
          },
          {
            question: "🔸 Est-ce que les paiements sont sécurisés ?",
            answer: "Oui, tous les paiements sont traités via une infrastructure sécurisée. Chaque transaction est enregistrée et immédiatement traçable dans le dashboard de la compagnie."
          },
          {
            question: "🔸 Est-ce que je peux suivre mes performances en temps réel ?",
            answer: "Absolument. Le dashboard vous permet de suivre les ventes, les trajets en cours, les retards éventuels, et bien plus encore, en temps réel."
          },
          {
            question: "🔸 L’application fonctionne-t-elle sans connexion internet ?",
            answer: "Certaines fonctionnalités comme le scan de billets ou la consultation des trajets déjà téléchargés peuvent fonctionner en mode hors-ligne. Une synchronisation se fait automatiquement dès que l’appareil est reconnecté."
          },
          {
            question: "🔸 Peut-on intégrer ce système à notre fonctionnement actuel ?",
            answer: "Oui. La solution a été pensée pour s’adapter à différents types d’organisations. Notre équipe vous accompagne dans la transition et l’onboarding de vos équipes."
          }
        ].map((item, i) => (
          <div className="faq-item" key={i}>
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>

     { /* === Section Footer principale === */}
        <section className="footer-main">
          <div className="footer-col">
            <div className="footer-logo">
          <img src={logo} alt="Logo" />
            </div>
            <p className="description">
          Nous sommes une équipe de passionnés, déterminés à moderniser
          la gestion des transports au Sénégal...
            </p>
            <div className="contact-info">
          <div className="section-title">Contact & Infos</div>
          <p><strong>+221 776445172</strong></p>
          <p><a> issaseck@orange-sonatel.com</a></p>
          <p>DAKAR, Sénégal</p>
            </div>
          </div>

          <div className="footer-col">
            <div className="section-title">Pages</div>
            <div className="link-list">
          <a href="#fonctionnalite">Fonctionnalités</a>
          <a href="#utilisateur">Passager</a>
          <a href="#compagnie">Chauffeurs</a>
          <a href="#compagnie">Compagnie</a>
            </div>
          </div>

          <div className="footer-col">
            <div className="section-title">&nbsp;</div>
            <div className="link-list">
          <a href="#equipe">Équipe</a>
          <a href="#faq">FAQ</a>
            </div>
          </div>

          <div className="footer-col">
            <div className="section-title">Social</div>
            <div className="link-list row">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">X</a>
            </div>
          </div>
        </section>

        {/* === Logo + flèche bas de page === */}
      <div className="footer-bottom">
        <img src={smallLogo} alt="Small-Logo" className="bottom-logo" />
       
        
      </div>
      <span className="copyright">
          Copyright © 2025 ID—C&nbsp;&nbsp;|&nbsp;&nbsp;Hugo
        
        </span>
    </div>
  
  );
};

export default FooterView;
