import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Connexion from './mes_pages/Auth/Connexion.jsx'; // Pas besoin de .jsx
import Inscription from './mes_pages/Auth/Inscription'; // Corriger le nom
import { AuthProvider } from './mes_pages/Auth/AuthContext'; // Ajouter
import ARoutes from './mes_pages/RoutesProtection/routes.jsx'

function App() {
  return (
    <AuthProvider>
      <Router>
        <ARoutes />
      </Router>
    </AuthProvider>
  )
}

export default App
