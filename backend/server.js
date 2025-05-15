// backend/server.js
const express = require('express');
const stripe = require('stripe')('YOUR_SECRET_KEY');  // Remplace par ta clé secrète Stripe
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Route pour créer une session de paiement Stripe
app.post('/api/create-checkout-session', async (req, res) => {
  const { total, email, nom } = req.body;  // Reçoit le total, email, nom

  // Validation côté serveur (calcul du montant en fonction des produits et formules)
  let calculatedTotal = 0;
  const plats = req.body.plats || []; // Si tu envoies aussi la liste des plats côté backend
  calculatedTotal = plats.reduce((acc, plat) => acc + plat.prix, 0) + req.body.formule.prix;

  if (calculatedTotal !== total) {
    return res.status(400).json({ error: 'Montant invalide' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Commande Restaurant',
            },
            unit_amount: calculatedTotal * 100,  // Stripe attend un montant en centimes
          },
          quantity: 1,
        },
      ],
      customer_email: email,
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Erreur lors de la création de la session:', error);
    res.status(500).send('Erreur lors de la création de la session de paiement');
  }
});


// Démarre le serveur
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
