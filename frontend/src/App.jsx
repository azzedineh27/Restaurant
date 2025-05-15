import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CommandePaiement from './pages/CommandePaiement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/commande-paiement" element={<CommandePaiement />} />
      </Routes>
    </Router>
  );
}

export default App;