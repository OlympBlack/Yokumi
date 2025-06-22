import { motion } from 'framer-motion';
import PresentationCards from "./PresentationCards";

const Presentation = () => {
    const naturashea = [
        { imgSrc: "/assets/home__dish.png", altText: "Produit karité", text: "Pur beurre de Karité" },
        { imgSrc: "/assets/home__blackwoman1.png", altText: "Application karité", text: "Pur beurre de Karité" },
        { imgSrc: "/assets/home__blackwoman2.png", altText: "Soin capillaire", text: "Pur beurre de Karité" },
        { imgSrc: "/assets/home__backwomen3.png", altText: "Gamme produits", text: "Pur beurre de Karité" },
        { imgSrc: "/assets/home__pocket.png", altText: "Emballage", text: "Pur beurre de Karité" },
        { imgSrc: "/assets/home__handup.png", altText: "Texture karité", text: "Pur beurre de Karité" },
    ];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="px-4 lg:px-24"
        >
            <div className="grid  md:grid-cols-3 gap-3 lg:gap-6">
                {naturashea.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <PresentationCards 
                            img={item.imgSrc}
                            alt={item.altText}
                            textContent={item.text}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}

export default Presentation;