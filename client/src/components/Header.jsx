import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto w-[96%] h-[300px] md:h-[500px] lg:h-[600px] relative bg-[url('/assets/Accueil-Image.png')] bg-cover bg-no-repeat bg-center rounded-xl overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/30"></div>
            
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative lg:left-36 xl:left-64 2xl:left-[500px] h-full flex items-center px-5 md:px-12 lg:pr-[26rem]"
            >
                <p className="text-white text-2xl md:text-3xl lg:text-4xl font-bold max-w-md drop-shadow-lg">
                    Du karité pur, une richesse naturelle aux multiples bienfaits.
                </p>
            </motion.div>
        </motion.header>
    )
}

export default Header;