import { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/navbar.css';

export default function Navbar() {
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="navbar-modern">
      {/* Logo gauche */}
      <div className="navbar-left">
        <img src="/msemen94_logo2.png" alt="Logo du restaurant" className="logo-img" />
      </div>

      {/* Liens centrés */}
      <nav className="navbar-center">
        <Link to="header" smooth={true} duration={500}>Accueil</Link>
        <Link to="about" smooth={true} duration={500}>À propos</Link>
        <Link to="menu" smooth={true} duration={500}>Menu</Link>
        <Link to="infos" smooth={true} duration={500}>Infos</Link>
        <Link to="commande" smooth={true} duration={500}>Commander</Link>
        <div className="lang-toggle" onClick={() => setLangOpen(!langOpen)}>FR</div>
      </nav>

      {/* Bouton droite */}
      <div className="navbar-right">
        <button className="order-button">
          Commander <span className="arrow">↘</span>
        </button>
      </div>
    </header>
  );
}
