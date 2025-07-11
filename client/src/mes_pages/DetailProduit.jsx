// resources/js/Pages/DetailProduit.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailProduit = () => {
    const [produit, setProduit] = useState(null);
    const [quantite, setQuantite] = useState(1);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/api/produits/${id}`)
            .then(response => setProduit(response.data))
            .catch(error => console.error("Erreur:", error));
    }, [id]);

    const ajouterAuPanier = () => {
        // Logique pour ajouter au panier
    };

    if (!produit) return <div>Chargement...</div>;

    return (
        <div className="container mx-auto py-8">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <img 
                        src={produit.image || '/images/placeholder.jpg'} 
                        alt={produit.nom}
                        className="rounded-lg"
                    />
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-3xl font-bold mb-4">{produit.nom}</h1>
                    <p className="text-xl text-shea-600 font-semibold mb-4">
                        {produit.prix.toLocaleString()} FCFA
                    </p>
                    <p className="mb-6">{produit.description}</p>
                    
                    <div className="flex items-center mb-6">
                        <input
                            type="number"
                            min="1"
                            value={quantite}
                            onChange={(e) => setQuantite(e.target.value)}
                            className="border p-2 w-20 mr-4"
                        />
                        <button 
                            onClick={ajouterAuPanier}
                            className="bg-shea-500 text-white px-6 py-2 rounded"
                        >
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};