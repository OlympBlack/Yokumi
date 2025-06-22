import { motion } from 'framer-motion';
import ProductCommand from '../components/ProductCommand';
import ProductView from '../components/ProductView';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FicheProduit = () => {
    const produits = [
        {
            id: 1,
            nom: "Crème hydratante",
            image: "/assets/la-crèmee-de-yocumi.jpg",
            prix: "5000 F",
            nbAvis: "24",
            moyenneNote: 4.5,
            details: "Cette crème hydratante pour le corps est fabriqué à base de beurre de karité du commerce de YOKUMI provenant de Tanguiéta, réputé pour ces propriétés ultra-hydratantes.",
            commentaire: [
                {
                    profile: "/assets/profile-avis.jpg",
                    nomCommentateur: "Adjotor voleur",
                    message: "<<Je vous le recommande fortement car c'est vraiment le meilleur>>"
                }
            ]
        }
    ];

    return (
        <>
            <Navbar />
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="min-h-screen"
            >
                <section className="container mx-auto px-4 py-8 lg:px-8 lg:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 place-items-center">
                        {produits.map((produit) => (
                            <motion.div
                                key={produit.id}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <ProductView 
                                    source={produit.image}
                                    description={produit.details}
                                />
                            </motion.div>
                        ))}
                        
                        {produits.map((product) => (
                            <motion.div
                                key={`cmd-${product.id}`}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                <ProductCommand
                                    nomProduit={product.nom}
                                    noteMoyenne={product.moyenneNote}
                                    totalAvis={product.nbAvis}
                                    prix={product.prix}
                                    details={product.details}
                                    profileCommentateur={product.commentaire[0].profile}
                                    nomCommentateur={product.commentaire[0].nomCommentateur}
                                    commentaire={product.commentaire[0].message}
                                />
                            </motion.div>
                        ))}
                    </div>
                </section>
            </motion.main>
            <Footer />
        </>
    )
}

export default FicheProduit;