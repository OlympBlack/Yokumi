// OurGoals.js
const OurGoals = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold">Nos Objectifs</h2>
            
            <div className="grid gap-6 md:gap-8 lg:grid-cols-3 lg:gap-6 xl:gap-8">
                {/* Carte Economique */}
                <div className="h-[300px] sm:h-[350px] md:h-[400px] relative bg-[url('/assets/impact-money.png')] bg-cover bg-center rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-[#21B6A2A6] mix-blend-multiply"></div>
                    <div className="relative z-10 p-6 sm:p-8 md:p-10 space-y-4 h-full flex flex-col justify-end">
                        <img src="/assets/diamant.png" alt="Impact économique" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"/>
                        <p className="font-semibold text-white text-lg sm:text-xl md:text-2xl">
                            Impact Socio-Economique sur le marché béninois et international
                        </p>
                    </div>
                </div>

                {/* Carte Santé */}
                <div className="h-[300px] sm:h-[350px] md:h-[400px] relative bg-[url('/assets/impact-health.png')] bg-cover bg-center rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-[#E5B724A6] mix-blend-multiply"></div>
                    <div className="relative z-10 p-6 sm:p-8 md:p-10 space-y-4 h-full flex flex-col justify-end">
                        <img src="/assets/salute.png" alt="Impact santé" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"/>
                        <p className="font-semibold text-white text-lg sm:text-xl md:text-2xl">
                            Impact sur la santé en optant pour un produit 100% naturel
                        </p>
                    </div>
                </div>

                {/* Carte Culture */}
                <div className="h-[300px] sm:h-[350px] md:h-[400px] relative bg-[url('/assets/culture-impact.png')] bg-cover bg-center rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-[#CE584AA6] mix-blend-multiply"></div>
                    <div className="relative z-10 p-6 sm:p-8 md:p-10 space-y-4 h-full flex flex-col justify-end">
                        <img src="/assets/balls.png" alt="Impact culturel" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"/>
                        <p className="font-semibold text-white text-lg sm:text-xl md:text-2xl">
                            Impact culturel en valorisant les savoir-faire locaux
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurGoals;