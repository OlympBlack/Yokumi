import OurGoalCard from './OurGoalCard'

const OurGoals = ()=>{

    const cards = [
        {
            id:1,
            imgName:"/assets/impact-money.png",
            illustrate: "diamant.png",
            color: "#21B6A2A6",
            alt: 'Illutre l"impact economique', 
            details: "Impact Socio-Economique sur le marché béninois et international"
        }, 
        {
            id:2,
            imgName:"/assets/impact-health.png",
            illustrate: "salute.png",
            color: "#E5B724A6",
            alt: "Illutre l'impact sur la santé", 
            details: "Impact sur la santé en optant pour un produit 100% naturel"
        },
        {
            id:3,
            imgName:"/assets/impact-health.png",
            illustrate: "salute.png",
            color: "#E5B724A6",
            alt: "Illutre l'impact sur la santé", 
            details: "Impact sur la santé en optant pour un produit 100% naturel"
        },
        {/*
            id:3,
            imgName:"/assets/mamadou.png",
            illustrate: "balls.png",
            color: "#CE584AA6",
            alt: 'Illutre l\'impact sur la c', 
            details: "Impact culturel et traditionnel"*/
        }
    ]
    return(
        <div className="space-y-8">
            <h2 className="text-5xl text-center">Nos Objectifs</h2>
            <div>
                
                {
                    cards.map((card) => (
                        <OurGoalCard 
                            key={card.id}
                            ImageName={card.imgName}
                            illustration={card.illustrate}
                            details={card.details}
                            color={card.color}
                            alt={card.alt}
                        />
                    ))
                }
                

            </div>
        </div>
    )
}

export default OurGoals;