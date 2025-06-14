import AllContacts from "./AllContacts";
import Links from "./Links";
const Footer = () => {
    return (
        <footer className="mt-4 bg-black px-4 lg:px-12 space-y-4">
            <img src="/assets/main-logo.png" alt="logo de Yocumi" />
            <div className="space-y-4 ">
                <div className="space-y-2 lg:flex lg:justify-between lg:items-center">
                    <div className="flex flex-col gap-4 lg:flex-row">
                        <AllContacts 
                        svg={<img src="/assets/Location.svg" alt="Location icon" />}
                        value="Bénin, Cotonou...."
                        />
                        <AllContacts 
                            svg={<img src="/assets/Telephone.svg" alt="phone icon" />}
                            value="+229 01 02 03 04 05"
                        />
                        <Links 
                            link="mailto:emailde@yokumi.id"
                            target="_self"
                            className=""
                            content={
                                <AllContacts 
                                    svg={<img src="/assets/Circled-Envelope.svg" alt="email icon" />}
                                    value="emailde@yokumi.id"
                                />
                            }
                        />
                    </div>
                    <div className="flex gap-2">
                        <img src="/assets/Facebook.svg" alt="Notre page Facebook" />
                        <img src="/assets/Instagram.svg" alt="Notre page Instagram" />
                        <img src="/assets/LinkedIn.svg" alt="Notre compte LinkedIn" />
                    </div>
                </div>
                <div className="w-full h-[1px] bg-white px-10"></div>
                <p className="text-white text-center text-sm py-4">
                    ©2025 YOKUMI. TOUT DROIT RESERVER
                </p>
            </div>
        </footer>
    )
}

export default Footer;