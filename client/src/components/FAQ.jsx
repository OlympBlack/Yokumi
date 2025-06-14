import FaqElement from "./FaqElement";


const FAQ = () => {
    const faqs = [
        {
            id: 1,
            question: "Quels sont les bienfaits du beurre de karité ?",
            content: "Le beurre de karité hydrate intensément, réduit les irritations et aide à lutter contre le vieillissement cutané grâce à ses vitamines A et E."
        },
        {
            id: 2,
            question: "Est-ce un produit 100% naturel ?",
            content: "Oui, notre beurre de karité est 100% naturel, sans additifs chimiques ni conservateurs."
        },
        {
            id: 3,
            question: "Quels sont les délais de livraison ?",
            content: "Nos délais de livraison standard sont de 2 à 5 jours ouvrés au Bénin et de 7 à 14 jours pour les envois internationaux. Les commandes passées avant 14h sont expédiées le même jour. Vous recevrez un email de confirmation avec un numéro de suivi dès l'expédition."
        },
        {
            id: 4,
            question: "Quels moyens de paiement acceptez-vous ?",
            content: "Nous acceptons :\n- Paiements mobiles (Moov Money, Flooz)\n- Virements bancaires\n- Cartes Visa/Mastercard\n- Paiement en espèce à la livraison (uniquement au Bénin)\nTous nos paiements en ligne sont sécurisés via notre partenaire de paiement certifié."
        },
        {
            id: 5,
            question: "Peut-on utiliser le karité sur les bébés ?",
            content:"Oui, notre beurre de karité pur est excellent pour les bébés. Il est particulièrement recommandé pour :\n- Érythème fessier\n- Croûtes de lait\n- Peau sèche\nNous conseillons tout de même de faire un test allergique sur une petite zone avant première utilisation complète."
        }
  ];

  return (
      <section className="px-4 space-y-4 w-full">
      <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>
      <div className="flex flex-col gap-4 items-center w-full">
        {faqs.map(faq => (
          <FaqElement 
            key={faq.id} 
            question={faq.question} 
            content={faq.content} 
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;