import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Menu from './components/Menu'
import Favoris from './components/Favoris'
import Commande from './components/Commande'
import Avis from './components/Avis'
import Header from './components/Header'
import './index.css';
import './styles/Navbar.css';
import './styles/About.css';
import './styles/Menu.css';
import './styles/Commande.css';
import './styles/Avis.css';
import './styles/Footer.css';
import './styles/Favoris.css';
import './styles/Header.css';



function App() {
  return (
    <div className="pt-20">
      <Navbar />
      <section id="header"><Header /></section>
      <section id="about"><About /></section>
      <section id="menu"><Menu /></section>
      <section id="favoris"><Favoris /></section>
      <section id="avis"><Avis /></section>
      <section id="commande"><Commande /></section>
      <Footer />
    </div>
  )
}

export default App