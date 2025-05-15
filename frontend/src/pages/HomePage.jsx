// src/pages/HomePage.jsx

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Menu from '../components/Menu';
import Favoris from '../components/Favoris';
import Commande from '../components/Commande';
import Avis from '../components/Avis';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home"><Header /></section>
        <About />
        <Menu />
        <Favoris />
        <Commande />
        <Avis />
      </main>
      <Footer />
    </div>
  );
}
