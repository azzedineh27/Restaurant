import { useEffect, useState } from 'react';
import '../styles/favoris.css';

const plats = [
  {
    nom: "Lasagnes végétariennes",
    prix: "12 €",
    description: "Fausse. gramaï. noure",
    image: "/public/lasagnes.jpg",
  },
  {
    nom: "Poulet rôti aux herbes",
    prix: "15 €",
    description: "Salu aux jultae de soice",
    image: "/public/poulet.jpg",
  },
  {
    nom: "Tarte aux pommes",
    prix: "8 €",
    description: "Paye aux pommes",
    image: "/public/tarte.jpg",
  },
  {
    nom: "Curry de lentilles",
    prix: "13 €",
    description: "Coriandre, lait de coco",
    image: "/public/curry.jpg",
  },
  {
    nom: "Burger maison",
    prix: "14 €",
    description: "Pain brioché, sauce du chef",
    image: "/public/burger.jpg",
  },
  {
    nom: "Pâtes à la truffe",
    prix: "16 €",
    description: "Tagliatelles, crème de truffe",
    image: "/public/truffe.jpg",
  },
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
              <p>{plat.prix}</p>
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
