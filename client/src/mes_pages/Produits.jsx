// resources/js/Pages/Produits.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProduitCard from '../Shared/ProduitCard';

const Produits = () => {
    const [produits, setProduits] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categorieId } = useParams();

    useEffect(() => {
        const url = categorieId 
            ? `/api/categories/${categorieId}/produits` 
            : '/api/produits';
            
        axios.get(url)
            .then(response => {
                setProduits(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Erreur:", error);
                setLoading(false);
            });
    }, [categorieId]);

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-semibold mb-6">
                {categorieId ? 'Produits de la catégorie' : 'Tous nos produits'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {produits.map(produit => (
                    <ProduitCard key={produit.id} produit={produit} />
                ))}
            </div>
        </div>
    );
};