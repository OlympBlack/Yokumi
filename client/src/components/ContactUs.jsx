import Input from "./Input";
import SubmitBtn from "./SubmitBtn";
import Newletter from "./Newsletter";


const ContactUs = () => {
    return (
        <section className="space-y-6 px-4">   
            <form className="space-y-4">
                <div className="flex flex-col gap-4 md:flex-row">
                    <Input                   
                        type="email"
                        placeholder="Email"
                        onChange={() => {}}
                    />
                    <Input 
                        type="tel"
                        placeholder="Numero"
                        onChange={() => {}}
                    />
                </div>
                
                <Input 
                    type="text"
                    placeholder="Nom complet"
                    onChange={() => {}}
                />

                <Input 
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

            <Newletter />
        </section>
    )
}

export default ContactUs;