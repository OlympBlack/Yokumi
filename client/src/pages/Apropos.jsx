import Navbar from "../components/Navbar";
import AboutBuy from "../components/Apropos__Buy";
import OurGoals from "../components/OurGoals";

const Apropos = ()=>{
    return(
        <>
            <Navbar />
            <div className="font-inter space-y-6">
                <AboutBuy />
                <OurGoals />
            </div>  
        </>
    )
}

export default Apropos;