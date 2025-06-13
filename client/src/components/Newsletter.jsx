import SubmitBtn from './SubmitBtn';
import Input from './Input';

const Newsletter = () => {
    return(
        <div className="rounded-lg relative  w-full overflow-hidden">
        
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
            backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(64,21,13,0.8) 100%), url(/assets/newsletter-image-cta.png)'
            }}
        ></div>
  
  
        <form className='newsletter space-y-4 p-6 w-full relative z-10'>
            <h3 className="text-marron text-center text-3xl font-bold">Notre Newsletter</h3>
            <p className="text-white">
            On vous envoie les nouveaux produits par mail une fois qu'ils sont disponibles sur la boutique pour que vous soyez les premiers à les avoir
            </p>
            <Input 
            type="email"
            placeholder="Votre email"
            className="border-none h-12 rounded-xl w-full px-4"  // Taille augmentée pour meilleure UX
            />
            <SubmitBtn
            text="Envoyer"
            className="w-full bg-marron hover:bg-marron-dark text-white py-3 rounded-xl"
            />
        </form>
        </div>
    )
}

export default Newsletter;