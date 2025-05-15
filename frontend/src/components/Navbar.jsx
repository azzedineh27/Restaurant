import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="navbar-modern">
      {/* Logo */}
      <div className="navbar-left">
        <div className="logo">RESTO</div>
      </div>

      {/* Liens scroll au centre */}
      <nav className="navbar-center">
        <ScrollLink to="home" smooth={true} duration={500}>Accueil</ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500}>À propos</ScrollLink>
        <ScrollLink to="menu" smooth={true} duration={500}>Menu</ScrollLink>
        <ScrollLink to="commande" smooth={true} duration={500}>Commander</ScrollLink>
        <div className="lang-toggle" onClick={() => setLangOpen(!langOpen)}>FR</div>
      </nav>

      {/* Bouton à droite vers nouvelle page */}
      <div className="navbar-right">
        <RouterLink to="/commande-paiement">
          <button className="order-button">
            Commander <span className="arrow">↘</span>
          </button>
        </RouterLink>
      </div>
    </header>
  );
}
