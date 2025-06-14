const ProductView = ({source, description, className })=>{
    return(
        <img
            className={`rounded-xl ${className ? className : ""}`}
            loading="lazy" 
            src={source} 
            alt={description} 
        />
    )
}

export default ProductView;