// Contact.js (page principale)
import Navbar from "../components/Navbar";
import ContactUs from "../components/ContactUs";
import OurContact from "../components/OurContact";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
            <Navbar />
            <ContactUs />
            <OurContact />
            <Footer />
        </div>
    )
}

export default Contact;