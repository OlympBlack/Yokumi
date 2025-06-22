// ContactUs.js (composant formulaire)
import Input from "./Input";
import SubmitBtn from "./SubmitBtn";
import Newletter from "./Newsletter";

const ContactUs = () => {
    return (
        <section className="px-4 lg:px-36 py-8 md:py-12 lg:py-16 max-w-7xl mx-auto">   
            <div className="lg:flex lg:gap-12 xl:gap-16">
                {/* Formulaire de contact (partie gauche) */}
                <form className="space-y-6 md:space-y-8 lg:w-[55%]">
                    <div className="flex flex-col gap-6 md:flex-row md:gap-4">
                        <div className="md:w-1/2">
                            <Input                   
                                type="email"
                                placeholder="Email"
                                onChange={() => {}}
                            />
                        </div>
                        <div className="md:w-1/2">
                            <Input 
                                type="tel"
                                placeholder="Numero"
                                onChange={() => {}}
                            />
                        </div>
                    </div>
                    
                    <Input 
                        type="text"
                        placeholder="Nom complet"
                        onChange={() => {}}
                    />

                    <Input 
                        type="textarea"
                        placeholder="Message"
                        className="h-32 md:h-40 !appearance-none"
                        onChange={() => {}}
                    />

                    <SubmitBtn 
                        isSubmitting={false}
                        text="Envoyer"
                        className="w-full md:w-auto"
                    />
                </form>

                {/* Newsletter (partie droite) */}
                <div className="mt-10 lg:mt-0 lg:w-[45%]">
                    <Newletter />
                </div>
            </div>
        </section>
    )
}

export default ContactUs;