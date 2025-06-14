import { useState } from "react";
import Input from "./Input";
import Links from "./Links";
const ProductCommand = ({nomProduit, totalAvis, prix, details, profileCommentateur, nomCommentateur, commentaire}) =>{
    const [quantity, setQuantity] = useState(1);
    
    const increase = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrease = () => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity - 1))
    }
    
    return(

        <div className="">
            <h3 className="font-bold">{nomProduit}</h3>
            <div className="star">
                <img src="/" alt="" />
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
                <div className="flex">
                    <button className="border-2 border-black px-3"
                    onClick={()=>decrease()}
                    >{"<"}</button>
                    <Input 
                        type="text"
                        className="w-11 h-4 indent-0 border-black rounded-none"
                        value= {quantity}
                        contentEditable = "false"
                        onChange={()=>{}}
                    />
                    <button onClick={()=>increase()} className="border-2 border-black px-3">{">"}</button>
                </div>
            </div>
            <div className="bg-[D9D9D9]">
                <img src={profileCommentateur} alt="" />
                <div className="">
                    <h4>{nomCommentateur}</h4>
                    <p>{commentaire} </p>
                </div>
            </div>
            <div className="">
                <Links 
                    link="/cart"
                    content= "Ajouter au panier"
                    target="_self"
                    className= "bg-[#D9D9D9] font-bold"
                />
                <Links 
                    link="/cart"
                    content= "Acheter maintenant"
                    target="_self"
                    className= "bg-jaune font-bold"
                />
            </div>
        </div>
    )
}

export default ProductCommand;