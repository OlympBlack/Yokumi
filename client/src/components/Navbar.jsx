import { useEffect, useState } from "react";
import Links from "./Links";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        // Nettoyage quand le composant est démonté
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);



    // Données des liens pour éviter la répétition
    const navLinks = [
        { path: "/", text: "Accueil", className: "xl:text-xl" },
        { path: "/apropos", text: "A-propos" },
        { path: "/ficheproduit", text: "Produits" },
        { path: "/impact", text: "Impact" },
        { path: "/faq", text: "FAQ" },
        { path: "/contact", text: "Contact" }
    ];


    return (
        <nav className="flex justify-between items-center relative p-4 lg:px-48 lg:py-6">
            {/* Logo */}
            <Links 
                link="/"
                target="_self"
                className="nav-link z-50" // z-index pour être au-dessus du menu mobile
                content={
                    <img 
                        className="h-12 lg:h-16 xl:h-20 transition-transform hover:scale-105"
                        src="/assets/main-logo.png" 
                        alt="Logo Yokumi" 
                    />
                }
            />

            {/* Menu Hamburger (mobile) */}
            <button 
                className="lg:hidden z-50 p-2"
                onClick={toggleMenu}
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
                <div className={`w-8 flex flex-col gap-1.5 transition-all duration-300 ${isOpen ? 'rotate-45 origin-center' : ''}`}>
                    <span className={`h-1 w-full bg-marron rounded-full transition-all ${isOpen ? 'rotate-90 translate-y-2.5' : ''}`}></span>
                    <span className={`h-1 w-full bg-marron rounded-full transition-all ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`h-1 w-full bg-marron rounded-full transition-all ${isOpen ? '-rotate-90 -translate-y-2.5' : ''}`}></span>
                </div>
            </button>

            {/* Menu principal */}
            <div className={`
                fixed lg:static inset-0 z-40
                flex flex-col lg:flex-row lg:items-center lg:ml-auto 
                bg-[#40150D] lg:bg-transparent
                transition-all duration-500 ease-in-out
                ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full lg:translate-x-0 opacity-0 lg:opacity-100'}
                justify-center lg:justify-between
                gap-8 lg:gap-6 xl:gap-8
                px-4 lg:px-0
            `}>
                {/* Bouton fermeture (mobile) */}
                <button 
                    className="absolute top-6 right-6 lg:hidden"
                    onClick={closeMenu}
                    aria-label="Fermer le menu"
                >
                    <svg height="37px" width="37px" viewBox="0 -960 960 960" fill="#FFF">
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                    </svg>
                </button>

                {/* Liens de navigation */}
                <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-5 xl:gap-8 font-bold text-white lg:text-current">
                    {navLinks.map((link) => (
                        <Links
                            key={link.path}
                            link={link.path}
                            target="_self"
                            className={`text-lg lg:text-md xl:text-lg py-2 lg:py-0 hover:text-marron transition-colors ${link.className || ""}`}
                            onClick={closeMenu}
                            content={link.text}
                        />
                    ))}
                </div>

                {/* Icônes actions */}
                <div className="flex justify-center lg:justify-end  gap-6 lg:gap-4 xl:gap-6">
                    <button aria-label="Rechercher" 
                         className="p-2 lg:bg-inherit bg-white hover:bg-opacity-20 rounded-full backdrop-blur-sm transition-all hover:scale-110">
                        <svg className="w-6 h-6 lg:w-7 lg:h-7" viewBox="0 -960 960 960" fill="#FFF lg:fill-current">
                            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                        </svg>
                    </button>
                    <button aria-label="Panier" className="p-2 lg:bg-inherit bg-white hover:bg-opacity-20 rounded-full backdrop-blur-sm transition-all hover:scale-110">
                        <svg className="w-6 h-6 lg:w-7 lg:h-7" viewBox="0 -960 960 960" fill="#FFF lg:fill-current">
                            <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/>
                        </svg>
                    </button>
                    <a href="/inscription" aria-label="Compte" className="p-2  lg:bg-inherit bg-white hover:bg-opacity-20 rounded-full backdrop-blur-sm transition-all hover:scale-110">
                        <svg className="w-6 h-6 lg:w-7 lg:h-7" viewBox="0 -960 960 960" fill="#FFF lg:fill-current">
                            <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;