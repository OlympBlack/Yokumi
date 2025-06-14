import { useState } from "react";
import StarRating from "./StarRating";
import Input from "./Input";
import Links from "./Links";
const ProductCommand = ({nomProduit, totalAvis, moyenneNote, prix, details, profileCommentateur, nomCommentateur, commentaire}) =>{
    const [quantity, setQuantity] = useState(1);
    
    const increase = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrease = () => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity - 1))
    }
    
    return(

        <div className="bg-white p-4 space-y-4">
            <h3 className="font-bold text-xl">{nomProduit}</h3>
            <div className="flex gap-4 items-center">   
                <StarRating rating={moyenneNote} />
                <span className="font-bold">{totalAvis}</span>
            </div>
            <p className="text-xl font-bold">{prix}</p>
            <div className="">
                <h4 className="font-bold text-lg">Details</h4>
                <p className="text-sm"> 
                    {details}
                </p>
            </div>
            <div className="flex items-center gap-3">
                <h4 className="font-bold">Quantité</h4>
                <div className="flex grow-0">
                    <button className="border border-black px-3"
                    onClick={()=>decrease()}
                    >{"<"}</button>
                    <span className="border border-black px-3">
                        {quantity}
                    </span>
                    <button onClick={()=>increase()} className="border border-black px-3">{">"}</button>
                </div>
            </div>
            <div className="bg-[#D9D9D9] p-4 gap-3 rounded-xl">

                <div className="flex items-center gap-3">
                    <img className="rounded-full h-10 w-10 object-cover" src={profileCommentateur} alt="" />
                    <h4 className="font-bold text-lg">{nomCommentateur}</h4>
                </div>
                <div>
                    <h4 className="hidden font-bold text-lg">{nomCommentateur}</h4>
                    <p className="text-sm">{commentaire} </p>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <Links 
                    link="/cart"
                    content= "Ajouter au panier"
                    target="_self"
                    className= "bg-[#D9D9D9] font-bold p-4 rounded-full flex justify-center"
                />
                <Links 
                    link="/buy"
                    content= "Acheter maintenant"
                    target="_self"
                    className= "bg-jaune font-bold p-4 rounded-full flex justify-center"
                />
            </div>
        </div>
    )
}

export default ProductCommand;