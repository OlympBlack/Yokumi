import Input from "../Input";
import Links from "../Links";
import SubmitBtn from "../SubmitBtn";

const AuthForm = ({ 
  title = "Bienvenu sur Yokumi !", 
  subtitle, 
  fields, 
  submitText, 
  linkText, 
  linkUrl, 
  linkPrompt 
}) => {
  return (
    <div className="space-y-6 mb-6 max-w-7xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl text-center font-bold">{title}</h2>
      
      <form className="w-full">
        <div className="bg-[#40150D61] rounded-xl overflow-hidden lg:flex lg:max-w-4xl mx-auto">
          {/* Image côté gauche (optionnelle) */}
          <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" 
               style={{ backgroundImage: "url('/assets/image-auth.jpg')" }} />
          
          {/* Formulaire */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 p-6 sm:p-8 md:p-10 lg:py-12 lg:px-12">
            <h2 className="text-3xl sm:text-4xl text-center font-bold mb-8 sm:mb-12">
              {subtitle}
            </h2>
            
            {fields.map((field) => (
              <div key={field.name} className="relative">
                <img
                  className="absolute top-1/2 left-4 sm:left-6 -translate-y-1/2 h-6 w-6 sm:h-7 sm:w-7"
                  src={field.icon}
                  alt={field.altText}
                />
                <Input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="w-full border-none pl-12 sm:pl-14 pr-4 py-3 sm:py-4 rounded-lg text-sm sm:text-base"
                />
              </div>
            ))}

            <p className="font-medium text-white text-center text-sm sm:text-base mt-2">
              {linkPrompt}{" "}
              <Links
                link={linkUrl}
                target="_self"
                content={linkText}
                className="text-marron hover:underline"
              />
            </p>

            <SubmitBtn
              className="h-12 sm:h-14 w-full sm:w-3/4 md:w-1/2 self-center mt-4 text-sm sm:text-base"
              text={submitText}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;