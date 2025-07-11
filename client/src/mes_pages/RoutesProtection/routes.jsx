// resources/js/routes.jsx
import RouteGuard from './RouteGuard';
//import Profile from './Pages/Profile';
//import Commandes from './Commandes';
import Connexion from '../Auth/Connexion.jsx';
import Inscription from '../Auth/Inscription';
//import Layout from './Layout';
/*import Accueil from './Pages/Accueil';
import Produits from './Pages/Produits';
import DetailProduit from './Pages/DetailProduit';
import Panier from './Pages/Panier';
import Checkout from './Pages/Checkout';*/

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Accueil /> },
            { path: 'produits', element: <Produits /> },
            { path: 'produits/:id', element: <DetailProduit /> },
            { path: 'panier', element: <Panier /> },
            
            // Routes protégées
            {
                element: <RouteGuard authRequired />,
                children: [
                    { path: 'profile', element: <Profile /> },
                    { path: 'commandes', element: <Commandes /> },
                    { path: 'checkout', element: <Checkout /> },
                ]
            },
            
            // Routes pour invités seulement
            {
                element: <RouteGuard guestOnly />,
                children: [
                    { path: 'connexion', element: <Connexion /> },
                    { path: 'inscription', element: <Inscription /> },
                ]
            }
        ]
    }
];

export default ARoutes;