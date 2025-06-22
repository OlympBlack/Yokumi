const TemoignagesCard = ({ profile, temoignage, userName, userLocation }) => {
  return (
    <div className="relative">
      {/* Carré rotaté en arrière-plan */}
      <div 
        className="absolute -z-1 w-full h-full bg-marron rounded-2xl"
        style={{
          transform: 'rotate(45deg)',
          top: '0',
          left: '0',
          width: 'calc(100% - 20px)', // Ajustez selon besoin
          height: 'calc(100% - 20px)', // Ajustez selon besoin
        }}
      />
      
      {/* Votre carte existante */}
      <div className="relative rounded-xl z-10 p-6 lg:max-w-80 bg-white flex flex-col justify-center items-center gap-4">
        <img 
          className="absolute top-0 -translate-y-1/2 rounded-full w-24 h-24 object-cover" 
          src={profile} 
          alt="Photo de Profil" 
        />
        <h3 className="font-bold mt-12 italic text-xl">
          <span>{userName}</span> – <span>{userLocation}</span>
        </h3>
        <p className="text-xs text-center">
          {temoignage}
        </p>
        <div className="text-right w-full">
          {[...Array(4)].map((_, i) => (
            <img 
              key={i}
              src="/assets/icon-starfull.svg" 
              alt="Etoile" 
              className="w-6 h-6 inline-block" 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemoignagesCard;