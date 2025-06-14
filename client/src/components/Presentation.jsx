import PresentationCards from "./PresentationCards";

const Presentation = () => {
    const naturashea = [
        {
            imgSrc: "/assets/home__dish.png",
            altText: "NaturaShea Logo",
            text: "Pur beurre de Karité"
        },
        {
            imgSrc: "/assets/home__blackwoman1.png",
            altText: "NaturaShea Logo",
            text: "Pur beurre de Karité"
        },
        {
            imgSrc: "/assets/home__blackwoman2.png",
            altText: "NaturaShea Logo",
            text: "Pur beurre de Karité"
        },
        {
            imgSrc: "/assets/home__backwomen3.png",
            altText: "NaturaShea Logo",
            text: "Pur beurre de Karité"
        },
        {
            imgSrc: "/assets/home__pocket.png",
            altText: "NaturaShea Logo",
            text: "Pur beurre de Karité"
        },
        {
            imgSrc: "/assets/home__handup.png",
            altText: "NaturaShea Logo",
            text: "Pur beurre de Karité"
        },
    ]
    return(
        <section className="px-12 lg:px-24 flex flex-col gap-3 lg:gap-16 md:grid md:grid-cols-3">
            {
                naturashea.map((item, index)=>(
                    <PresentationCards 
                        key={index}
                        img={item.imgSrc}
                        alt={item.altText}
                        textContent={item.text}
                    />
                ))
            }
        </section>
    )

}
export default Presentation;