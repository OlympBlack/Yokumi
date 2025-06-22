import AuthForm from "./AuthForm";

const ConnexionSection = () => (
  <AuthForm
    subtitle="Connexion"
    submitText="Se connecter"
    linkPrompt="Vous n'avez pas de compte ?"
    linkText="Inscrivez-vous"
    linkUrl="/inscription"
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

export default ConnexionSection;