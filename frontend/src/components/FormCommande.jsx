import { useState } from "react";
import "../styles/FormCommande.css";
import { platsData, formulesData } from "../data/platsData";

export default function FormCommande() {
  const [formData, setFormData] = useState({
    entree: "",
    plat: "",
    dessert: "",
    boisson: "",
    formule: "",
    accompagnement: "",
    name: "",
    email: "",
  });

  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  // --- Ajouter un item ---
  const addItem = (category, choice) => {
    if (!choice) return;
    const selected =
      category === "formule"
        ? formulesData.find((f) => f.id === choice)
        : platsData[category].find((p) => p.id === choice);

    if (selected) {
      const newItem = {
        id: selected.id,
        name: selected.nom,
        price: selected.prix,
        quantity: 1,
      };
      const updated = [...items, newItem];
      setItems(updated);
      calcTotal(updated);
    }
  };

  // --- Supprimer un item ---
  const removeItem = (id) => {
    const updated = items.filter((i) => i.id !== id);
    setItems(updated);
    calcTotal(updated);
  };

  // --- Calculer total ---
  const calcTotal = (list) => {
    const sum = list.reduce((acc, i) => acc + i.price * i.quantity, 0);
    setTotal(sum);
  };

  // --- Soumission commande ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (items.length === 0) {
      alert("Veuillez choisir au moins un plat !");
      return;
    }

    const res = await fetch("http://localhost:5000/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items,
        customer: { name: formData.name, email: formData.email },
      }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url; // Redirection Stripe Checkout
    }
  };

  return (
    <section id="commande-form" className="commande-form-section">
      <h2 className="commande-form-title">Passer votre commande</h2>

      <form className="commande-form" onSubmit={handleSubmit}>
        {/* Infos client */}
        <div className="form-group">
          <label>Nom complet</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        {/* Sélecteurs */}
        <div className="form-selects">
          <div className="form-group">
            <label>Entrée</label>
            <select
              value={formData.entree}
              onChange={(e) => {
                setFormData({ ...formData, entree: e.target.value });
                addItem("entrees", e.target.value);
              }}
            >
              <option value="">-- Choisir --</option>
              {platsData.entrees.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nom} (+{p.prix} €)
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Plat</label>
            <select
              value={formData.plat}
              onChange={(e) => {
                setFormData({ ...formData, plat: e.target.value });
                addItem("plats", e.target.value);
              }}
            >
              <option value="">-- Choisir --</option>
              {platsData.plats.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nom} (+{p.prix} €)
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Dessert</label>
            <select
              value={formData.dessert}
              onChange={(e) => {
                setFormData({ ...formData, dessert: e.target.value });
                addItem("desserts", e.target.value);
              }}
            >
              <option value="">-- Choisir --</option>
              {platsData.desserts.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nom} (+{p.prix} €)
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Boisson</label>
            <select
              value={formData.boisson}
              onChange={(e) => {
                setFormData({ ...formData, boisson: e.target.value });
                addItem("boissons", e.target.value);
              }}
            >
              <option value="">-- Choisir --</option>
              {platsData.boissons.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nom} (+{p.prix} €)
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Formule</label>
            <select
              value={formData.formule}
              onChange={(e) => {
                setFormData({ ...formData, formule: e.target.value });
                addItem("formule", e.target.value);
              }}
            >
              <option value="">-- Choisir --</option>
              {formulesData.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.nom} (+{f.prix} €)
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Résumé commande */}
        <div className="order-summary">
          <h3>Votre commande</h3>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name} — {item.price} € 
                <button type="button" onClick={() => removeItem(item.id)}>❌</button>
              </li>
            ))}
          </ul>
          <div className="order-total">Total : {total} €</div>
        </div>

        <button type="submit" className="pay-button">Payer avec Stripe</button>
      </form>
    </section>
  );
}
