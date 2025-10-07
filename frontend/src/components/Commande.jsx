import '../styles/Commande.css';

export default function Commande() {
  return (
    <section id="commande" className="commande-section">
      <h2 className="commande-title">Comment commander ?</h2>
      <p className="commande-subtitle">Un processus simple, fluide et sécurisé.</p>

      <div className="commande-steps">

        <div className="commande-step">
          <span className="commande-number">1</span>
          <div className="commande-icon">📋</div>
          <h3>Remplissez le formulaire</h3>
          <p>Indiquez les plats souhaités, vos coordonnées et l’heure de retrait.</p>
        </div>

        <div className="commande-step">
          <span className="commande-number">2</span>
          <div className="commande-icon">📩</div>
          <h3>Confirmation rapide</h3>
          <p>Vous recevez une réponse sous peu avec le lien de paiement.</p>
        </div>

        <div className="commande-step">
          <span className="commande-number">3</span>
          <div className="commande-icon">💳</div>
          <h3>Paiement sécurisé</h3>
          <p>Réglez votre commande en ligne via Stripe.</p>
        </div>
      </div>

      <a
        href="https://forms.gle/TON_LIEN_FORMULAIRE"
        target="_blank"
        rel="noopener noreferrer"
        className="commande-button"
      >
        Passer commande
      </a>
    </section>
  );
}
