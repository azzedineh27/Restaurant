import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

// === Route test ===
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// === Route pour créer une session de paiement Stripe ===
app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { items, customer } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item) => ({
        price_data: {
          currency: "eur",
          product_data: { name: item.name },
          unit_amount: item.price * 100, // Stripe attend les prix en centimes
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      customer_email: customer.email,
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// === Lancer le serveur ===
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
