import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Connexion from './auth/Connexion';
import Apropos from './pages/Apropos';
import './index.css';
import Inscription from './auth/Inscription';
import FicheProduit from './pages/Produit';
import Loader from './components/Loader'; // Importe ton composant Loader

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule le chargement initial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* Affiche le loader pendant le chargement */}
      {isLoading && <Loader />}
      
      {/* Le reste de l'application */}
      <div className={`${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/ficheproduit" element={<FicheProduit />} />
          <Route path="/apropos" element={<Apropos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;