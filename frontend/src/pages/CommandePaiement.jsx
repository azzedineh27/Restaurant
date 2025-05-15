import { useState } from "react";
import "../styles/commandePaiement.css";
import { loadStripe } from "@stripe/stripe-js";

const platsDispo = [
  { nom: "Poulet rôti aux herbes", prix: 15 },
  { nom: "Lasagnes végétariennes", prix: 13 },
  { nom: "Curry de lentilles", prix: 12 },
  { nom: "Tarte aux pommes", prix: 6 },
  { nom: "Fondant chocolat", prix: 7 },
  { nom: "Thé glacé maison", prix: 3.5 },
];

const formules = [
  { nom: "Aucune formule", prix: 0 },
  { nom: "Formule Déjeuner (Entrée + Plat)", prix: 18 },
  { nom: "Formule Gourmande (Entrée + Plat + Dessert)", prix: 23 },
  { nom: "Formule Végétarienne", prix: 21 },
];

export default function CommandePaiement() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    adresse: "",
    ville: "",
    telephone: "",
    contenuFormule: "",
  });
  const [commande, setCommande] = useState([]);
  const [formule, setFormule] = useState(formules[0]);

  const addPlat = (plat) => setCommande((prev) => [...prev, plat]);

  const removePlat = (index) => {
    const newCmd = [...commande];
    newCmd.splice(index, 1);
    setCommande(newCmd);
  };

  const total = commande.reduce((acc, plat) => acc + plat.prix, 0) + formule.prix;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormule = (e) => {
    const selected = formules.find((f) => f.nom === e.target.value);
    setFormule(selected);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();  // Empêche le rechargement de la page par défaut

  const stripePromise = loadStripe("YOUR_PUBLIC_STRIPE_KEY");  // Assure-toi de mettre la bonne clé publique Stripe ici

  // Envoie une requête au backend pour créer la session Stripe
  const response = await fetch("http://localhost:3001/api/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      total,  // Total calculé côté frontend
      email: formData.email,
      nom: formData.nom,
    }),
  });

  const session = await response.json();  // Récupère l'ID de la session depuis le backend

  const stripe = await stripePromise;  // Charge Stripe

  const { error } = await stripe.redirectToCheckout({
    sessionId: session.id,  // ID de la session renvoyée par le backend
  });

  if (error) {
    console.error("Erreur lors de la redirection vers Stripe:", error);
  }
};


  return (
    <section className="commande-paiement-section">
      <h2>Finalisez votre commande</h2>
      <form className="commande-form" onSubmit={handleSubmit}>
        <label>Nom complet
          <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
        </label>

        <label>Email
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>Téléphone
          <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} required />
        </label>

        <label>Adresse
          <input type="text" name="adresse" value={formData.adresse} onChange={handleChange} required />
        </label>

        <label>Ville
          <input type="text" name="ville" value={formData.ville} onChange={handleChange} required />
        </label>

        <label>Choisissez une formule
          <select value={formule.nom} onChange={handleFormule}>
            {formules.map((f, i) => (
              <option key={i}>{f.nom}</option>
            ))}
          </select>
        </label>

        {formule.prix > 0 && (
          <label>Contenu de votre formule
            <textarea
              name="contenuFormule"
              value={formData.contenuFormule}
              onChange={handleChange}
              placeholder="Ex : Velouté + Poulet rôti + Tarte fine"
              rows={3}
            />
          </label>
        )}

        <div className="section-plats">
          <h3>Plats à la carte</h3>
          <div className="plats-liste">
            {platsDispo.map((plat, i) => (
              <button key={i} type="button" onClick={() => addPlat(plat)} className="plat-btn">
                ➕ {plat.nom} — {plat.prix} €
              </button>
            ))}
          </div>
        </div>

        <div className="panier">
          <h3>Votre commande</h3>
          <ul>
            {formule.prix > 0 && (
              <li className="formule-line">
                <strong>{formule.nom}</strong> — {formule.prix} €
                {formData.contenuFormule && <div className="formule-details">{formData.contenuFormule}</div>}
              </li>
            )}
            {commande.map((plat, i) => (
              <li key={i}>
                {plat.nom} — {plat.prix} €
                <button type="button" onClick={() => removePlat(i)}>❌</button>
              </li>
            ))}
          </ul>
          <div className="total">
            Total : <strong>{total.toFixed(2)} €</strong>
          </div>
        </div>

        <button type="submit" className="stripe-button">Payer avec Stripe</button>
      </form>
    </section>
  );
}
