// OurContact.js (composant cartes de contact)
import ContactCard from "./Contact__Card";

const OurContact = () => {
    const contactInfo = [
        {
            id: 1,
            contenue: "Pour parler avec nous en cas d'urgence",
            icon: <img src="/assets/Telephone.svg" alt="Icône téléphone" className="w-8 h-8" />,
            value: "+229 01 02 03 04 05"
        },
        {
            id: 2,
            contenue: "Pour nous contacter par email",
            icon: <img src="/assets/Circled-Envelope.svg" alt="Icône email" className="w-8 h-8" />,
            value: "contact@yokumi.id"
        },
        {
            id: 3,
            contenue: "Venez vers nous quand vous voulez pour vos besoins",
            icon: <img src="/assets/Location.svg" alt="Icône localisation" className="w-8 h-8" />,
            value: "123 Rue du Commerce, Cotonou"
        }
    ];
    
    return(
        <section className="px-4 py-8 md:py-12 lg:px-8 lg:py-16 max-w-7xl mx-auto">
            <div className="grid gap-6 md:gap-8 lg:grid-cols-3 lg:gap-6 xl:gap-8">
                {contactInfo.map((contact) => (
                    <ContactCard 
                        key={contact.id}
                        content={contact.contenue}
                        svg={contact.icon}
                        value={contact.value}
                        className={`${contact.id === 1 ? "bg-marron" : ""}
                                    ${contact.id === 2 ? "bg-[#40150DD4]" : ""}
                                    ${contact.id === 3 ? "bg-[#40150D61]" : ""}`
                        }
                    />
                ))}
            </div>
        </section>
    )
}

export default OurContact;