const ProductView = ({source, description})=>{
    return(
        <img
            loading="lazy" 
            src={source} 
            alt={description} 
        />
    )
}

export default ProductView;