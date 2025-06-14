import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import BestProducts from "../components/BestProducts";
import Temoignages from "../components/Temoignages";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
                <Navbar />
            <div className="flex flex-col gap-16 lg:px-24">
                <Header />
                <Presentation />
                <BestProducts />
                <Temoignages />
                <FAQ />
            </div>
            <Footer />
        </>

    )
}


export default Home;