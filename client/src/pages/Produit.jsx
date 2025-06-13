const FicheProduit = ()=>{
    const produits = [
        {
            id: 1,
            image: "/assets/",
            prix: "5000 F",
            nbAvis: "",
            moyenneNote: "",
            details: "",
            commentaire: [
                {
                    id: 1,
                    profile: "/assets/",
                    nomCommentateur: "Adjotor voleur",
                    commentaire: "<<Je vous le trecommande fortement car c’est vraiment le meilleur>>"
                }
            ]
        }
    ]

    return(
        <>
            <Navbar />
                <div className="">
                    <div className="">
                        {
                            produits.map((produit)=>{
                                <ProductView 
                                    key={produit.id}
                                    source={produit.image}
                                    description={produit.details}
                                />
                            })
                        }
                    </div>
                    <div className="">
                        
                    </div>
                </div>
        </>
    )
}

export default FicheProduit;