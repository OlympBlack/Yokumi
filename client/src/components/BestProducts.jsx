import BestProductsCard from "./BestProductsCard";
import Links from "./Links";
const BestProducts = () => {
    const products = [
        {
            id: 1,
            image: '/assets/image-karite.png',
            alt: 'Product 1',
            title: 'Savon extra doux',
            description: 'Un savon à base de Karité qui rendra votre peau très douce',
        },
        {
            id: 1,
            image: '/assets/image-karite.png',
            alt: 'Product 1',
            title: 'Savon extra doux',
            description: 'Un savon à base de Karité qui rendra votre peau très douce',
        }
        
    ];
    return(
        <section className="px-4 space-y-8">
            <h2 className="text-2xl font-bold">Nos <span className="text-marron">Meilleurs</span> Produits</h2>

            <div className="space-y-8">
                {
                    products.map((product) => (
                        <BestProductsCard 
                            key={product.id}
                            products={product.image}
                            alt={product.alt}
                            title={product.title}
                            description={product.description}
                        />
                    ))
                }
            </div>

            <div className="font-bold">
                <Links 
                    link="#"
                    target="_self"
                    className="border-[3px] rounded-[24px] border-marron px-5 py-4 mr-4"
                    content="Voir plus"
                />
                <Links 
                    link="/products"
                    target="_self"
                    className="bg-marron rounded-[20px] px-5 py-4 text-white"
                    content="Decouvrir"
                />
            </div>
        </section>
    )
}

export default BestProducts;