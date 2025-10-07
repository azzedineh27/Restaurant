import '../styles/infos.css';

export default function Infos() {
  const horaires = [
    { jour: "Dimanche", heures: "11h – 23h30" },
    { jour: "Lundi", heures: "11h – 23h30" },
    { jour: "Mardi", heures: "11h – 23h30" },
    { jour: "Mercredi", heures: "11h – 23h30" },
    { jour: "Jeudi", heures: "11h – 23h30" },
    { jour: "Vendredi", heures: "11h – 23h30" },
    { jour: "Samedi", heures: "11h – 23h30" },
  ];

  return (
    <section id="infos" className="infos-section">
      <h2 className="infos-title">Infos pratiques</h2>

      <div className="infos-container">
        {/* Bloc gauche - Contact */}
        <div className="infos-contact">
          <h3>Contact</h3>
          <p><strong>Adresse :</strong> 21 Rue Cujas, 94400 Vitry-sur-Seine</p>
          <p><strong>Téléphone :</strong> <a href="tel:+33782767633">+33 7 82 76 76 33</a></p>
          <p><strong>Email :</strong> <a href="mailto:contact@resto.fr">rayan_dylan@yahoo.fr</a></p>
        </div>

        {/* Bloc droite - Horaires */}
        <div className="infos-horaires">
          <h3>Horaires d’ouverture</h3>
          <ul>
            {horaires.map((item, i) => (
              <li key={i}>
                <span className="jour">{item.jour}</span>
                <span className="heures">{item.heures}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
