import { useState } from 'react';
import '../styles/menu.css';
import { platsData, formulesData } from '../data/platsData';

export default function Menu() {
  const [isCarteVisible, setIsCarteVisible] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  // Combiner tous les plats
  const allPlats = [
    ...platsData.entrees.map(plat => ({ ...plat, category: 'entrees' })),
    ...platsData.plats.map(plat => ({ ...plat, category: 'plats' })),
    ...platsData.desserts.map(plat => ({ ...plat, category: 'desserts' })),
    ...platsData.boissons.map(plat => ({ ...plat, category: 'boissons' }))
  ];

  // Filtrer les plats selon la catégorie active
  const filteredPlats = activeCategory === 'all' ? allPlats : allPlats.filter(plat => plat.category === activeCategory);

  const categories = [
    { id: 'all', name: 'Tout', icon: '🍽️' },
    { id: 'entrees', name: 'Entrées', icon: '🥗' },
    { id: 'plats', name: 'Plats', icon: '🍖' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'boissons', name: 'Boissons', icon: '🥤' }
  ];

  const renderPlat = (plat) => (
    <li key={plat.id} className="dish-card">
      <div className="dish-image">
        <img src={plat.image} alt={plat.nom} />
        <div className="dish-overlay">
          <span className="dish-price-badge">{plat.prix} €</span>
        </div>
      </div>
      <div className="dish-content">
        <h4 className="dish-name">{plat.nom}</h4>
        <p className="dish-desc">{plat.description}</p>
        <div className="dish-tags">
          {plat.vegetarien && <span className="tag vegetarien">Végétarien</span>}
        </div>
      </div>
    </li>
  );

  const renderFormule = (formule) => (
  <div key={formule.id} className="formule-card">
    <div className="formule-image">
      <img src={formule.image} alt={formule.nom} />
    </div>
    <div className="formule-content">
      <h3>{formule.nom}</h3>
      <p className="formule-desc">{formule.description}</p>
      <ul>
        {formule.plats.map((plat, index) => (
          <li key={index}>{plat}</li>
        ))}
      </ul>
      <div className="formule-price">{formule.prix} €</div>
      {formule.economie && (
        <div className="formule-economie">Économie: {formule.economie} €</div>
      )}
    </div>
  </div>
);


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
        <>
          {/* Navigation interactive par catégories */}
          <div className="menu-categories-nav">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Affichage des plats filtrés */}
          <div className="menu-plats-container">
            <div className="menu-category">
              <h3>
                {activeCategory === 'all' ? 'Tous nos plats' : 
                 activeCategory === 'entrees' ? 'Entrées' :
                 activeCategory === 'plats' ? 'Plats' :
                 activeCategory === 'desserts' ? 'Desserts' :
                 activeCategory === 'boissons' ? 'Boissons' : 'Plats'}
              </h3>
              <div className="dishes-grid">
                {filteredPlats.map(renderPlat)}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="menu-formules">
          {formulesData.map(renderFormule)}
        </div>
      )}
    </section>
  );
}
