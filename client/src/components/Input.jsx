const Input = ({ type, placeholder, value, onChange, className, contentEditable}) => {
    return (
        <input 
            type={type} 
            className={`border-2 border-marron indent-2 w-full p-4 rounded-md ${className ? className : ""}`}
            placeholder={placeholder}
            autoComplete="off"
            value={value}
            onChange={onChange}
            contentEditable= {`${contentEditable ? contentEditable : "true"}`}
        />
    )
    
}

export default Input;