import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Connexion from './auth/Connexion'
import './index.css'
import Inscription from './auth/Inscription';
import FicheProduit from './pages/Produit';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/ficheproduit" element={<FicheProduit />} />
      </Routes>
    </Router>
  )
}

export default App
