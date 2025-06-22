import AuthForm from "./AuthForm";

const InscriptionSection = () => (
  <AuthForm
    subtitle="Inscription"
    submitText="S’inscrire"
    linkPrompt="Vous avez déjà un compte ?"
    linkText="Connectez-vous"
    linkUrl="/connexion"
    fields={[
      {
        name: "email",
        type: "email",
        placeholder: "Email",
        icon: "/assets/User.svg",
        altText: "Icône utilisateur",
      },
      {
        name: "password",
        type: "password",
        placeholder: "Mot de passe",
        icon: "/assets/Lock.svg",
        altText: "Icône cadenas",
      },
    ]}
  />
);

export default InscriptionSection;