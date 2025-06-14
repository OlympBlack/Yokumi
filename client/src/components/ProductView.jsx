import { motion } from 'framer-motion';

const ProductView = ({ source, description, className }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="overflow-hidden rounded-xl shadow-lg"
        >
            <img
                className={`w-full h-auto object-cover ${className || ""}`}
                loading="lazy" 
                src={source} 
                alt={description}
            />
        </motion.div>
    )
}

export default ProductView;