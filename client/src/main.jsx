import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


import '@fontsource/montserrat/300.css'; 
import '@fontsource/montserrat/400.css'; 
import '@fontsource/montserrat/600.css'; 
import '@fontsource/montserrat/700.css'; 
import '@fontsource/inter'; // Importe tous les poids

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
