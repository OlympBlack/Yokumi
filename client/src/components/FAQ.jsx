import FaqElement from "./FaqElement";

const FAQ = () => {
    const faqs = [
        {
            id: 1,
            question: "+ Quels sont les bienfaits du beurre de karité ?",
            content: ""
        },
        {
            id: 2,
            question: "+ Est-ce un produit 100% naturel ?",
            content: ""
        },
        {
            id: 3,
            question: "+ Quels sont les délais de livraison ?",
            content: ""
        },
        {
            id: 4,
            question: "+ Quels moyens de paiement acceptez-vous ?",
            content: ""
        },
        {
            id: 4,
            question: "+ Peut-on utiliser le karité sur les bébés ?",
            content: ""
        },
    ]
    return(
        <section className="px-4 space-y-4">
            <h2 className="text-3xl font-bold">FAQ</h2>
            <div className="flex flex-col gap-4">
                {faqs.map(faq => (
                    <FaqElement 
                        key={faq.id} 
                        question={faq.question} 
                        content={faq.content} 
                    />
                ))}
            </div>
        </section>
    )
}

export default FAQ;