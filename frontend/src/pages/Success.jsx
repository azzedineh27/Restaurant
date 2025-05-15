// frontend/src/pages/Success.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const sessionId = new URLSearchParams(location.search).get('session_id');

  useEffect(() => {
    if (sessionId) {
      // Tu peux faire une requête ici pour vérifier l'état du paiement avec le `sessionId`
    }
  }, [sessionId]);

  return (
    <div>
      <h1>Merci pour votre commande ! Votre paiement a été effectué avec succès.</h1>
      <p>Session ID : {sessionId}</p>
    </div>
  );
};

export default Success;
