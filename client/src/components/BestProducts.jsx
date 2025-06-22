import { motion } from 'framer-motion';
import BestProductsCard from "./BestProductsCard";
import Links from "./Links";

const BestProducts = () => {
    const products = [
        {
            id: 1,
            image: '/assets/image-karite.png',
            alt: 'Savon karité',
            title: 'Savon extra doux',
            description: 'Un savon à base de Karité qui rendra votre peau très douce',
        },
        {
            id: 2,
            image: '/assets/image-karite.png',
            alt: 'Crème karité',
            title: 'Crème hydratante',
            description: 'Une crème nourrissante pour une peau rayonnante',
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="px-4 lg:px-24 space-y-8"
        >
            <h2 className="text-2xl md:text-3xl font-bold">
                Nos <span className="text-marron">Meilleurs</span> Produits
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.6 }}
                        whileHover={{ y: -5 }}
                    >
                        <BestProductsCard 
                            products={product.image}
                            alt={product.alt}
                            title={product.title}
                            description={product.description}
                        />
                    </motion.div>
                ))}
            </div>

            <motion.div 
                className="flex flex-wrap gap-4 font-bold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                <Links 
                    link="#"
                    target="_self"
                    className="border-2 hover:border-marron-dark rounded-[24px] border-marron px-5 py-3 transition-colors"
                    content="Voir plus"
                />
                <Links 
                    link="/products"
                    target="_self"
                    className="bg-marron hover:bg-marron-dark rounded-[20px] px-5 py-3 text-white transition-colors"
                    content="Découvrir"
                />
            </motion.div>
        </motion.section>
    )
}

export default BestProducts;