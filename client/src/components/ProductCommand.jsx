import { motion } from "framer-motion";
import { useState } from "react";
import StarRating from "./StarRating";
import Links from "./Links";

const ProductCommand = ({
    nomProduit, 
    totalAvis, 
    moyenneNote, 
    prix, 
    details,
    profileCommentateur, 
    nomCommentateur, 
    commentaire
}) => {
    const [quantity, setQuantity] = useState(1);
    
    const increase = () => {
        setQuantity(prev => prev + 1);
    };

    const decrease = () => {
        setQuantity(prev => Math.max(1, prev - 1));
    };
    
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 lg:p-8 rounded-xl shadow-lg space-y-6"
        >
            {/* En-tête */}
            <div className="space-y-3">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{nomProduit}</h3>
                
                <div className="flex items-center gap-4">
                    <StarRating rating={moyenneNote} />
                    <span className="font-medium text-gray-600">{totalAvis} avis</span>
                </div>
                
                <p className="text-2xl font-bold text-marron">{prix}</p>
            </div>

            {/* Détails */}
            <div className="space-y-2">
                <h4 className="font-bold text-lg text-gray-900">Détails</h4>
                <p className="text-gray-600">{details}</p>
            </div>

            {/* Quantité */}
            <div className="flex items-center gap-4">
                <h4 className="font-bold text-gray-900">Quantité</h4>
                <div className="flex items-center border border-gray-200 rounded-lg">
                    <button 
                        onClick={decrease}
                        className="px-3 py-1 lg:px-4 lg:py-2 text-lg hover:bg-gray-50 transition-colors"
                    >
                        -
                    </button>
                    <span className="px-4 py-1 border-x border-gray-200 text-center min-w-[40px]">
                        {quantity}
                    </span>
                    <button 
                        onClick={increase}
                        className="px-3 py-1 lg:px-4 lg:py-2 text-lg hover:bg-gray-50 transition-colors"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Avis */}
            <motion.div 
                whileHover={{ y: -2 }}
                className="bg-gray-50 p-4 rounded-xl space-y-3"
            >
                <div className="flex items-center gap-3">
                    <img 
                        className="rounded-full h-10 w-10 object-cover" 
                        src={profileCommentateur} 
                        alt={`Avatar de ${nomCommentateur}`} 
                    />
                    <h4 className="font-bold text-gray-900">{nomCommentateur}</h4>
                </div>
                <p className="text-gray-600 italic">"{commentaire}"</p>
            </motion.div>

            {/* Boutons */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Links 
                    link="/cart"
                    target="_self"
                    className="bg-gray-100 hover:bg-gray-200 font-bold p-3 rounded-full flex justify-center transition-colors"
                    content="Ajouter au panier"
                />
                <Links 
                    link="/buy"
                    target="_self"
                    className="bg-jaune hover:bg-amber-500 font-bold p-3 rounded-full flex justify-center transition-colors"
                    content="Acheter maintenant"
                />
            </div>
        </motion.div>
    )
}

export default ProductCommand;