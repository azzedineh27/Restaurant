import { useEffect, useState } from 'react';
import '../styles/favoris.css';

const plats = [
  {
    nom: "Couscous au poulet",
    prix: "14 €",
    description: "Semoule fine, légumes, poulet fermier",
    image: "/couscous_poulet.jpg",
  },
  {
    nom: "Couscous aux merguez",
    prix: "14 €",
    description: "Semoule, légumes, merguez grillées",
    image: "/couscous_merguez.jpg",
  },
  {
    nom: "Tajine marocain",
    prix: "13 €",
    description: "Poulet, légumes, olives et citron confit",
    image: "/tajine.jpg",
  },
  {
    nom: "Salade méchouia",
    prix: "7 €",
    description: "Poivrons grillés, tomates, épices",
    image: "/salade_mechouia.jpg",
  },
  {
    nom: "Batbout au poulet",
    prix: "8 €",
    description: "Petit pain farci au poulet mariné",
    image: "/batbout_poulet.jpg",
  }
];

export default function Favoris() {
  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    setStartIndex((prev) => (prev + 1) % plats.length);
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + plats.length) % plats.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getVisiblePlats = () => {
    const visibles = [];
    for (let i = 0; i < 3; i++) {
      visibles.push(plats[(startIndex + i) % plats.length]);
    }
    return visibles;
  };

  return (
    <section id="favoris" className="favoris-section">
      <h2>Nos plats du moment</h2>

      <div className="favoris-slider-container">
        <button className="slider-btn left" onClick={prev}>←</button>

        <div className="favoris-slider">
          {getVisiblePlats().map((plat, index) => (
            <div className="favoris-card" key={index}>
              <img src={plat.image} alt={plat.nom} />
              <h3>{plat.nom}</h3>
              <span className="favoris-price">{plat.prix}</span>
              <p><em>{plat.description}</em></p>
              <button className="favoris-button">Commander</button>
            </div>
          ))}
        </div>

        <button className="slider-btn right" onClick={next}>→</button>
      </div>
    </section>
  );
}
