const  AllContacts = ({ svg, value }) => {
    return(
        <div className="flex items-center gap-2">
            <span>{svg}</span>
            <span className="text-lg text-white font-bold">{value}</span>
        </div>
    )
}

export default AllContacts;