// Apropos__Buy.js
import Links from "./Links";

const AboutBuy = () => {
    return (
        <div className="w-full h-80 sm:h-96 lg:h-[500px] xl:h-[600px] bg-cover bg-center"
        style={{
            backgroundImage: 'linear-gradient(85.13deg, rgba(210, 180, 140, 0.6) 34.6%, rgba(115, 115, 115, 0) 49.69%), url(/assets/aboutsection1.png)'
            }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-start gap-4 md:gap-6 leading-tight">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-[900]">YOKUMI</h2>
                <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-md">
                    Le marché de référence pour du <br className="hidden sm:block"/> <span className="text-marron">Beurre de Karité</span> <br className="hidden sm:block"/>De Qualité
                </p>
                <Links 
                    link="/"
                    content="Acheter maintenant"
                    className="bg-[#FFBF00] hover:bg-[#E5AC00] text-white font-semibold text-lg sm:text-xl px-6 py-4 sm:px-8 sm:py-5 rounded-xl transition-colors duration-300"
                />
            </div>
        </div>
    )
}

export default AboutBuy;