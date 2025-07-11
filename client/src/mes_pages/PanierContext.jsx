// resources/js/contexts/PanierContext.jsx
import React, { createContext, useState, useContext } from 'react';

const PanierContext = createContext();

export const PanierProvider = ({ children }) => {
    const [panier, setPanier] = useState([]);

    const ajouterAuPanier = (produit, quantite) => {
        setPanier(prev => {
            const existe = prev.find(item => item.produit.id === produit.id);
            if (existe) {
                return prev.map(item =>
                    item.produit.id === produit.id
                        ? { ...item, quantite: item.quantite + quantite }
                        : item
                );
            }
            return [...prev, { produit, quantite }];
        });
    };

    const total = panier.reduce(
        (sum, item) => sum + (item.produit.prix * item.quantite), 0
    );

    return (
        <PanierContext.Provider value={{ panier, ajouterAuPanier, total }}>
            {children}
        </PanierContext.Provider>
    );
};

export const usePanier = () => useContext(PanierContext);