import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Colonne 1 - Logo & slogan */}
        <div className="footer-column">
          <img src="/msemen94_logo2.png" alt="Logo du restaurant" className="footer-logo-img" />
          <p className="footer-slogan">Cuisine maison, généreuse et sincère.</p>
        </div>

        {/* Colonne 2 - Réseaux */}
        <div className="footer-column">
          <h3>Suivez-nous</h3>
          <a href="https://www.instagram.com/meceddedamrane.com/" className="social-button">Instagram</a>
          <a href="https://www.snapchat.com/meceddedamrane.com/" className="social-button">Snapchat</a>
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
          <p>21 Rue Cujas</p>
          <p>94400 Vitry-sur-Seine</p>
          <p>+33 7 82 76 76 33</p>
          <p>rayan_dylan@yahoo.fr</p>
        </div>
      </div>

      {/* Bas de page */}
      <div className="footer-bottom">
        <p>© L'atelier de msemen94 {new Date().getFullYear()} – Tous droits réservés</p>
        <p className="signature">
          Fait avec 💛 par <a href="https://redinweb.fr" target="_blank" rel="noopener noreferrer">RedinWeb</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
