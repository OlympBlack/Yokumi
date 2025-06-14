const OurGoals = ()=>{
    
    return(
        <div className="space-y-8">
            <h2 className="text-5xl text-center">Nos Objectifs</h2>
            <div>
                <div
                    className="h-[350px] w-full relative bg-[url('/assets/impact-money.png')] bg-cover bg-center"
                >
                    <div className="absolute inset-0 bg-[#21B6A2A6] mix-blend-multiply"></div>
                    <div className="relative z-10 p-16 space-y-5">
                        <img src="/assets/diamant.png" alt="" width="60px" />
                        <p className="font-semibold text-white">Impact Socio-Economique sur le marché béninois et international </p>
                    </div>
                </div>
                <div
                    className="h-[350px] w-full relative bg-[url('/assets/impact-health.png')] bg-cover bg-center"
                >
                    <div className="absolute inset-0 bg-[#E5B724A6] mix-blend-multiply"></div>
                    <div className="relative z-10 p-16 space-y-5">
                        <img src="/assets/salute.png" alt="" width="60px" />
                        <p className="font-semibold text-white">Impact sur la santé en optant pour un produit 100% naturel  </p>
                    </div>
                </div>
                <div
                    className="h-[350px] w-full relative bg-[url('/assets/culture-impact.png')] bg-cover bg-center"
                >
                    <div className="absolute inset-0 bg-[#CE584AA6] mix-blend-multiply"></div>
                    <div className="relative z-10 p-16 space-y-5">
                        <img src="/assets/balls.png" alt="" width="60px" />
                        <p className="font-semibold text-white">Impact sur la santé en optant pour un produit 100% naturel  </p>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default OurGoals;