// Apropos.js (page principale)
import Navbar from "../components/Navbar";
import AboutBuy from "../components/Apropos__Buy";
import OurGoals from "../components/OurGoals";

const Apropos = () => {
    return (
        <>
            <Navbar />
            <div className="font-inter space-y-12 md:space-y-16 lg:space-y-20">
                <AboutBuy />
                <OurGoals />
            </div>  
        </>
    )
}

export default Apropos;