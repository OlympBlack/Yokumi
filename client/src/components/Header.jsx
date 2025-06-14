const Header = () => {
    return (
        <header className="mx-auto w-[96%] h-[300px] md:h-[500px] relative bg-[url('/assets/Accueil-Image.png')] bg-contain bg-no-repeat bg-center">
            <div className="absolute lg:left-36 xl:left-64 2xl:left-[500px] h-full flex items-center px-5 md:pr-72 lg:pr-[26rem] lg: text-2xl font-bold">
                <p> 
                    Du karité pur, une richesse naturelle aux multiples bienfaits.
                </p>
            </div>
        </header>
    )
}

export default Header;