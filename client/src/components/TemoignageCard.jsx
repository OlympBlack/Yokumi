const TemoignagesCard = ({ profile, temoignage, userName, userLocation }) => {
    return(
                <div className="relative rounded-xl z-10 p-6 bg-white flex flex-col justify-center items-center gap-4">
                    <img className="absolute top-0 -translate-y-1/2 rounded-full w-24 h-24 object-cover" src={profile} alt="Photo de Profil" />
                    <h3 className="font-bold mt-12 italic text-xl"><span>{userName}</span> – <span>{userLocation}</span></h3>
                    <p className="text-xs text-center">
                        {temoignage}
                    </p>
                    <div className="text-right w-full">
                        <img src="/assets/icon-starfull.svg" alt="Etoile" className="w-6 h-6 inline-block" />
                        <img src="/assets/icon-starfull.svg" alt="Etoile" className="w-6 h-6 inline-block" />
                        <img src="/assets/icon-starfull.svg" alt="Etoile" className="w-6 h-6 inline-block" />
                        <img src="/assets/icon-starfull.svg" alt="Etoile" className="w-6 h-6 inline-block" />
                        <img src="/assets/icon-starfull.svg" alt="Etoile" className="w-6 h-6 inline-block" />
                    </div>
                </div>
    )
}

export default TemoignagesCard;