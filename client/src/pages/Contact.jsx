import Navbar from "../components/Navbar"
import ContactUs from "../components/ContactUs"
import OurContact from "../components/OurContact"
import Footer from "../components/Footer"

const Contact = () => {
    return (
        <div className="space-y-6">
            <Navbar />
            <ContactUs />
            <OurContact />
            <Footer />
        </div>
    )
}


export default Contact;