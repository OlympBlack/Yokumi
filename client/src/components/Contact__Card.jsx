import AllContacts from "./AllContacts";

const ContactCard = ({content, svg, value, className }) => {
    return (
        <div className={` space-y-4 rounded-xl border-marron text-white py-12 px-8 ${className ? className : ""}`}>
            <AllContacts 
                svg={svg}
                value={value}
            />
            <p className="text-lg">
                {content}
            </p>
        </div>
    )
}

export default ContactCard;