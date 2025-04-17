import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Colonne 1 - Logo & slogan */}
        <div className="footer-column">
          <h2 className="footer-logo">RESTO</h2>
          <p className="footer-slogan">Cuisine maison, généreuse et sincère.</p>
        </div>

        {/* Colonne 2 - Réseaux */}
        <div className="footer-column">
          <h3>Suivez-nous</h3>
          <a href="#" className="social-button">Instagram</a>
          <a href="#" className="social-button">Snapchat</a>
        </div>

        {/* Colonne 3 - Navigation */}
        <div className="footer-column">
          <h3>Navigation</h3>
          <ul>
            <li><a href="#about">À propos</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#commande">Commander</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Colonne 4 - Contact */}
        <div className="footer-column">
          <h3>Contact</h3>
          <p>123 Rue du Goût</p>
          <p>75000 Paris</p>
          <p>+33 6 12 34 56 78</p>
          <p>contact@resto.fr</p>
        </div>
      </div>

      {/* Bas de page */}
      <div className="footer-bottom">
        <p>© RESTO {new Date().getFullYear()} – Tous droits réservés</p>
        <p className="signature">
          Fait avec 💛 par <a href="https://redinweb.fr" target="_blank">RedinWeb</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
