const BestProductsCard = ({ products, alt, title, description }) => {
    return(
        <div className="flex flex-col gap-10">
            <img className="rounded-xl object-cover w-full h-96 " src={products} alt={alt} />
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <p className="text-marron font-semibold text-2xl">{title}</p>
                    <div className="flex items-center">
                        <span className="font-semibold">4.5</span>
                        <img src="/assets/icon-starfull.svg" alt="Star Rate" />
                    </div>
                </div>

                <div className="flex justify-between">
                    <p className="text-sm w-48">{description}</p>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#40150D"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BestProductsCard;