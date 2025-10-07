import '../styles/header.css';
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <section id="header" className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>La cuisine maison<br />qui réconforte.</h1>
          <Link to="menu" smooth={true} duration={500} offset={-60}>
            <button className="cta-button">Voir le menu</button>
          </Link>
        </div>
        <div className="scroll-down">
          <Link to="about" smooth={true} duration={500} offset={-60}>
            <span>&#x25BC;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
