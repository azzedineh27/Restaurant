import '../styles/Avis.css';

export default function Avis() {
  const reviews = [
    {
      name: "Camille D.",
      quote: "Un vrai coup de cœur ! Plats savoureux, accueil chaleureux, on sent l’amour dans chaque bouchée.",
    },
    {
      name: "Lucas T.",
      quote: "Une adresse authentique. Produits frais, cuisine maison, et service au top. Je recommande les yeux fermés.",
    },
    {
      name: "Sophie R.",
      quote: "Chaque repas est un moment de bonheur. Les saveurs, l’ambiance… Tout est parfait.",
    },
  ];

  return (
    <section id="avis" className="avis-section">
      <h2 className="avis-title">Ce que disent nos clients</h2>

      <div className="avis-container">
        {reviews.map((avis, index) => (
          <div className="avis-card" key={index}>
            <div className="avis-icon">“</div>
            <p className="avis-quote">"{avis.quote}"</p>
            <p className="avis-name">— {avis.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
