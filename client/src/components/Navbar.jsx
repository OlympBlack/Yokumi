import { useState } from "react";
import Links from "./Links";

const Navbar = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return(
        <nav className="flex justify-between items-center relative p-4 lg:px-60 lg:py-6 ">
            <Links 
                link="/"
                target="_self"
                className="nav-link"    
                content={
                    <img 
                        className="h-12 auto lg:h-16 xl:h-20"
                        src="/assets/main-logo.png" alt="" 
                    />
                }
            />

            <div className={`${isOpen ? "block" : "hidden"} absolute z-50 flex flex-col gap-4 h-screen w-screen top-0 left-1/2 transform -translate-x-1/2 bg-red-400 items-center justify-center
                lg:flex lg:flex-row lg:gap-8 lg:h-auto lg:grow lg:transform-none lg:bg-transparent lg:static lg:p-0 lg:items-center
            `}>
                <div className="nav-links flex lg:text-mdm xl:text-lg flex-col font-bold lg:items-center lg:flex-row lg:mx-auto lg:text-md lg:space-x-5">
                    <Links 
                        link="/"
                        target="_self"
                        className="xl:text-xl"
                        content="Accueil"
                    />
                    <Links 
                        link="/about"
                        target="_self"
                        content="A-propos"
                    />
                    <Links 
                        link="/produits"
                        target="_self"
                        content="Produits"
                    />
                    <Links 
                        link="/impact"
                        target="_self"
                        content="Impact"
                    />
                    <Links 
                        link="/faq"
                        target="_self"
                        content="FAQ"
                    />
                    <Links 
                        link="/contact"
                        target="_self"
                        content="Contact"
                    />
                </div>

                <div className="icons-notify space-x-4 lg:flex lg:items-center">
                    <button>
                        <svg
                            className="lg:h-7 lg:w-7"
                            xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                    </button>
                    <button>
                        <svg 
                            className="lg:h-7 lg:w-7"
                            xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
                    </button>
                    <button>
                        <svg
                            className="lg:h-7 lg:w-7"  
                            xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
                    </button>
                </div>

                <svg className="absolute top-5 right-4 lg:hidden" 
                    onClick={()=>setIsOpen(false)}
                    xmlns="http://www.w3.org/2000/svg" height="37px" viewBox="0 -960 960 960" width="37px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </div>

            

            <svg className="lg:hidden"
            onClick={toggleMenu}
            xmlns="http://www.w3.org/2000/svg" height="37px" width="37px" viewBox="0 -960 960 960" fill="#000000"><path d="M360-240v-80h480v80H360Zm0-200v-80h480v80H360ZM120-640v-80h720v80H120Z"/></svg>

            
        </nav>
    )
}

export default Navbar;