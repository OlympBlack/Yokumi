

import ProductCommand from '../components/ProductCommand'
import ProductView from '../components/ProductView'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const FicheProduit = ()=>{
    const produits = [
        {
            id: 1,
            nom: "Crème hydratante",
            image: "/assets/la-crèmee-de-yocumi.jpg",
            prix: "5000 F",
            nbAvis: "24",
            moyenneNote: 4.5,
            details: "Cette crème hydratante pour le corps est fabriqué à base de beurre de karité du commerce de YOKUMI provenant  de Tanguiéta, réputé pour ces propriétés ultra-hydratantes.",
            commentaire: [
                {
                    profile: "/assets/profile-avis.jpg",
                    nomCommentateur: "Adjotor voleur",
                    message: "<<Je vous le trecommande fortement car c’est vraiment le meilleur>>"
                }
            ]
        }
    ]

    return(
        <>
            <Navbar />
                <section className="px-4 space-y-6">
                    <div className="">
                        {
                            produits.map((produit)=>(
                                <ProductView 
                                    key={produit.id}
                                    source={produit.image}
                                    description={produit.details}
                                />
                            ))
                        }
                    </div>
                    <div className="">
                        { 
                            produits.map((product)=>(
                                <ProductCommand
                                    key={product.id}
                                    nomProduit = {product.nom}
                                    noteMoyenne={product.moyenneNote}
                                    totalAvis = {product.nbAvis}
                                    prix={product.prix}
                                    details={product.details}
                                    profileCommentateur={product.commentaire[0].profile}
                                    nomCommentateur={product.commentaire[0].nomCommentateur}
                                    commentaire={product.commentaire[0].message}
                                />
                            ))
                        }
                    </div>
                </section>
            <Footer />
        </>
    )
}

export default FicheProduit;