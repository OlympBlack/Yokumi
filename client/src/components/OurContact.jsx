import ContactCard from "./Contact__Card";

const OurContact = () => {
    const contactInfo = [
        {
            id: 1,
            contenue: "Pour parler avec nous en cas d’urgence",
            icon: <img src="/assets/Telephone.svg" alt="" />,
            value: "+229 01 02 03 04 05"
        },
        {
            id: 2,
            contenue: "Pour parler avec nous en cas d’urgence",
            icon: <img src="/assets/Circled-Envelope.svg" alt="" />,
            value: "+229 01 02 03 04 05"
        },
        {
            id: 3,
            contenue: "Venez vers nous quand vous voulez pour vos besoins",
            icon: <img src="/assets/Location.svg" alt="" />,
            value: "emailde@yokumi.id"
        }
    ]
    return(
        <section className="space-y-6 px-4">
            {
                contactInfo.map((contact) => (
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
                ))
            }
        </section>
    )
}

export default OurContact;