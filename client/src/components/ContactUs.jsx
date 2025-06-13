import ContactInput from "./Contact__Input";
import SubmitBtn from "./SubmitBtn";

const ContactUs = () => {
    return (
        <section className="space-y-6 px-4">   
            <form className="space-y-4">
                <div className=" flex gap-4">
                    <ContactInput 
                        
                        type="email"
                        placeholder="Email"
                        onChange={() => {}}
                    />
                    <ContactInput 
                        
                        type="tel"
                        placeholder="Numero"
                        
                        onChange={() => {}}
                    />
                </div>
                
                <ContactInput 
                    type="text"
                    placeholder="Nom complet"
                    
                    onChange={() => {}}
                />

                <ContactInput 
                    type="textarea"
                    placeholder="Message"
                    className="h-24 !appearance-none"
                    onChange={() => {}}
                />

                <SubmitBtn 
                    isSubmitting={false}
                    text="Envoyer"

                />
            </form>
            <form>

            </form>
        </section>
    )
}

export default ContactUs;