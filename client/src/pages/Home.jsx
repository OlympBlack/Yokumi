import { motion } from 'framer-motion';
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import BestProducts from "../components/BestProducts";
import Temoignages from "../components/Temoignages";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    return (
        <div className="overflow-hidden">
            <Navbar />
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col gap-16 lg:gap-24 lg:px-24"
            >
                <Header />
                <Presentation />
                <BestProducts />
                <Temoignages />
                <FAQ />
            </motion.div>
            <Footer />
        </div>
    )
}

export default Home;