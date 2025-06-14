

import ProductCommand from '../components/ProductCommand'
import ProductView from '../components/ProductView'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const FicheProduit = ()=>{
    const produits = [
        {
            id: 1,
            nom: "Crème hydratante",
            image: "/assets/",
            prix: "5000 F",
            nbAvis: "",
            moyenneNote: "",
            details: "",
            commentaire: [
                {
                    profile: "/assets/",
                    nomCommentateur: "Adjotor voleur",
                    message: "<<Je vous le trecommande fortement car c’est vraiment le meilleur>>"
                }
            ]
        }
    ]

    return(
        <>
            <Navbar />
                <section className="">
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