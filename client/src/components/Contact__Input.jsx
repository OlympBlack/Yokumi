const ContactInput = ({ type, placeholder, value, onChange, className}) => {
    return (
        <input 
            type={type} 
            className={`border-2 border-marron indent-2 w-full p-4 rounded-md ${className ? className : ""}`}
            placeholder={placeholder}
            required
            autoComplete="off"
            value={value}
            onChange={onChange}
        />
    )
    
}

export default ContactInput;