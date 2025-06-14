import SubmitBtn from './SubmitBtn';
import Input from './Input';

const Newsletter = () => {
    return (
        <div className="rounded-lg relative w-full overflow-hidden min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px]">
            {/* Fond avec dégradé */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(64,21,13,0.8) 100%), url(/assets/newsletter-image-cta.png)'
                }}
            />
            
            {/* Contenu */}
            <form className="relative z-10 p-6 md:p-8 lg:p-10 h-full flex flex-col justify-center">
                <div className="max-w-md mx-auto w-full space-y-4 md:space-y-6"> {/* Conteneur pour limiter la largeur */}
                    <h3 className="text-marron text-center text-2xl sm:text-3xl font-bold">
                        Notre Newsletter
                    </h3>
                    
                    <p className="text-white text-sm sm:text-base md:text-lg text-center">
                        On vous envoie les nouveaux produits par mail une fois qu'ils sont disponibles sur la boutique pour que vous soyez les premiers à les avoir
                    </p>
                    
                    <div className="space-y-4">
                        <Input 
                            type="email"
                            placeholder="Votre email"
                            className="border-none h-12 md:h-14 rounded-xl w-full px-4 text-sm md:text-base"
                        />
                        
                        <SubmitBtn
                            text="Envoyer"
                            className="w-full bg-marron hover:bg-marron-dark text-white py-3 rounded-xl transition-colors duration-300"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Newsletter;