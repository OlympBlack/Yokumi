import { motion } from 'framer-motion';
import Links from "./Links";

const Footer = () => {
    return (
        <footer className="bg-black text-white mt-12 px-4 lg:px-12 py-8">
            {/* Conteneur principal */}
            <div className="max-w-7xl mx-auto">
                {/* Logo et contacts */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6"
                >
                    {/* Logo */}
                    <img 
                        src="/assets/main-logo.png" 
                        alt="logo de Yocumi" 
                        className="h-14 lg:h-16 w-auto"
                    />

                    {/* Contacts - Version strictement conforme à ta maquette */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full lg:w-auto">
                        {/* Adresse */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="flex items-center gap-2"
                        >
                            <img 
                                src="/assets/Location.svg" 
                                alt="Icône localisation" 
                                className="w-5 h-5"
                            />
                            <span className="text-white font-bold text-sm lg:text-base">
                                Bénin, Cotonou....
                            </span>
                        </motion.div>

                        {/* Téléphone */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="flex items-center gap-2"
                        >
                            <img 
                                src="/assets/Telephone.svg" 
                                alt="Icône téléphone" 
                                className="w-5 h-5"
                            />
                            <span className="text-white font-bold text-sm lg:text-base">
                                +229 01 02 03 04 05
                            </span>
                        </motion.div>

                        {/* Email */}
                        <motion.a
                            whileHover={{ scale: 1.03 }}
                            href="mailto:emailde@yokumi.id"
                            className="flex items-center gap-2"
                        >
                            <img 
                                src="/assets/Circled-Envelope.svg" 
                                alt="Icône email" 
                                className="w-5 h-5"
                            />
                            <span className="text-white font-bold text-sm lg:text-base">
                                emailde@yokumi.id
                            </span>
                        </motion.a>
                    </div>

                    {/* Réseaux sociaux - Strictement comme dans ta maquette */}
                    <div className="flex gap-3 lg:gap-4">
                        {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                            <motion.a
                                key={social}
                                href="#"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-1"
                            >
                                <img 
                                    src={`/assets/${social}.svg`} 
                                    alt={`Lien ${social}`}
                                    className="w-6 h-6 lg:w-7 lg:h-7"
                                />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Séparateur - Exactement comme dans ta maquette */}
                <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                    className="h-px bg-white my-4 lg:my-6 w-full"
                />

                {/* Copyright - Texte identique */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center text-xs lg:text-sm font-medium"
                >
                    ©2025 YOKUMI. TOUT DROIT RESERVER
                </motion.p>
            </div>
        </footer>
    )
}

export default Footer;