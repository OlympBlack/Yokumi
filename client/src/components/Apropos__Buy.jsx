import Links from "./Links";

const AboutBuy = ()=>{
    return(
        <div className="w-full h-80 lg:h-[500px] bg-cover bg-center"
        style={{
            backgroundImage: 'linear-gradient(85.13deg, rgba(210, 180, 140, 0.6) 34.6%, rgba(115, 115, 115, 0) 49.69%), url(/assets/aboutsection1.png)'
            }}
        >
            <div className=" pl-4 pr-12 flex flex-col justify-center items-start gap-4 h-full leading-tight">
                <h2 className=" text-4xl font-[900]">YOKUMI</h2>
                <p className="font-semibold text-[18px]">
                    Le marché de référence pour du <br /> <span className="text-marron">Beurre de Karité</span> <br />De Qualité
                </p>
                <Links 
                    link="/"
                    content="Acheter maintenant "
                    className="bg-[#FFBF00] text-white font-semibold text-xl px-8 py-6 rounded-xl"
                />
            </div>
            
        </div>
    )
}

export default  AboutBuy;