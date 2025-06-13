import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import BestProducts from "../components/BestProducts";
import Temoignages from "../components/Temoignages";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="space-y-10">
            <Navbar />
            <Header />
            <Presentation />
            <BestProducts />
            <Temoignages />
            <FAQ />
            <Footer />
        </div>

    )
}


export default Home;