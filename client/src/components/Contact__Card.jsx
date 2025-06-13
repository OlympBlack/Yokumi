import AllContacts from "./AllContacts";

const ContactCard = ({content, svg, value }) => {
    return (
        <div className="bg-marron text-white py-6 px-4">
            <AllContacts 
                svg={svg}
                value={value}
            />
            <p>
                {content}
            </p>
        </div>
    )
}

export default ContactCard;