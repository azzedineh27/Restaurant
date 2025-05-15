import { useState } from 'react';
import '../styles/menu.css';

export default function Menu() {
  const [isCarteVisible, setIsCarteVisible] = useState(true);

  return (
    <section id="menu" className="menu-section">
      <h2 className="menu-title">Menu à la carte</h2>

      <div className="menu-toggle-container">
        <button
          className="menu-toggle-btn"
          onClick={() => setIsCarteVisible(!isCarteVisible)}
        >
          {isCarteVisible ? "Voir nos formules" : "Revenir à la carte"}
        </button>
      </div>

      {isCarteVisible ? (
        <div className="menu-columns">

        {/* Colonne gauche */}
        <div className="menu-left">
          {/* Entrées */}
          <div className="menu-category">
            <h3>Entrées</h3>
            <ul>
              <li>
                <span className="dish-name">Velouté de potimarron</span>
                <span className="dish-desc">Crème d’amande, croûtons maison</span>
                <span className="dish-price">8 €</span>
              </li>
              <li>
                <span className="dish-name">Carpaccio de légumes</span>
                <span className="dish-desc">Courgette, betterave, feta, vinaigrette miel</span>
                <span className="dish-price">9 €</span>
              </li>
            </ul>
          </div>

          {/* Desserts */}
          <div className="menu-category">
            <h3>Desserts</h3>
            <ul>
              <li>
                <span className="dish-name">Tarte fine aux pommes</span>
                <span className="dish-desc">Boule de vanille artisanale</span>
                <span className="dish-price">7 €</span>
              </li>
              <li>
                <span className="dish-name">Fondant chocolat</span>
                <span className="dish-desc">Cœur coulant & crème anglaise</span>
                <span className="dish-price">8 €</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Colonne droite */}
        <div className="menu-right">
          {/* Plats */}
          <div className="menu-category">
            <h3>Plats</h3>
            <ul>
              <li>
                <span className="dish-name">Poulet rôti aux herbes</span>
                <span className="dish-desc">Pommes grenailles, jus au thym</span>
                <span className="dish-price">16 €</span>
              </li>
              <li>
                <span className="dish-name">Lasagnes végétariennes</span>
                <span className="dish-desc">Légumes grillés & mozzarella fondue</span>
                <span className="dish-price">14 €</span>
              </li>
              <li>
                <span className="dish-name">Curry de lentilles corail</span>
                <span className="dish-desc">Lait de coco, coriandre fraîche</span>
                <span className="dish-price">13 €</span>
              </li>
            </ul>
          </div>

          {/* Boissons */}
          <div className="menu-category">
            <h3>Boissons</h3>
            <ul>
              <li>
                <span className="dish-name">Eau plate / gazeuse</span>
                <span className="dish-price">2 €</span>
              </li>
              <li>
                <span className="dish-name">Thé glacé maison</span>
                <span className="dish-price">3.5 €</span>
              </li>
              <li>
                <span className="dish-name">Verre de vin bio</span>
                <span className="dish-price">5 €</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
      ) : (
        <div className="menu-formules">
          <div className="formule-card">
            <h3>Formule Déjeuner</h3>
            <p className="formule-desc">Entrée + Plat ou Plat + Dessert</p>
            <ul>
              <li>Velouté du jour</li>
              <li>Plat du marché</li>
              <li>Dessert maison</li>
            </ul>
            <div className="formule-price">18 €</div>
          </div>

          <div className="formule-card">
            <h3>Formule Gourmande</h3>
            <p className="formule-desc">Entrée + Plat + Dessert</p>
            <ul>
              <li>Salade de chèvre chaud</li>
              <li>Poulet rôti ou Lasagnes végé</li>
              <li>Tarte fine ou Fondant</li>
            </ul>
            <div className="formule-price">23 €</div>
          </div>

          <div className="formule-card">
            <h3>Formule Végétarienne</h3>
            <p className="formule-desc">Entrée + Plat + Dessert</p>
            <ul>
              <li>Carpaccio de légumes</li>
              <li>Curry de lentilles</li>
              <li>Fondant chocolat</li>
            </ul>
            <div className="formule-price">21 €</div>
          </div>
        </div>
      )}
    </section>
  );
}
