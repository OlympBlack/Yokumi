const ProductCommand = ({title, totalAvis, prix, details }) =>{
    return(
        <div className="">
            <h3 className="font-bold">{title}</h3>
            <div className="star">
                <img src="" alt="" />
                <span className="font-bold">{totalAvis}</span>
            </div>
            <p className="text-xl font-bold">{prix}</p>
            <div className="">
                <h4 className="font-bold">Details</h4>
                <p> 
                    {details}
                </p>
            </div>
            <div className="">
                <h4>Quantité</h4>
                <div className="">
                    <button>{"<"}</button>
                    <Input 
                        type="text"
                        value= "1"
                        contentEditable = "false"
                        onChange={()=>{}}
                    />
                    <button>{">"}</button>
                </div>
            </div>
            <div className="bg-[D9D9D9]">
                <img src="" alt="" />
                <div className="">
                    <h4>{profileCommentateur}</h4>
                </div>
            </div>
        </div>
    )
}

export default ProductCommand;