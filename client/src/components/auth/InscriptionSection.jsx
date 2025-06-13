import Input from "../Input";
import Links from "../Links";
import SubmitBtn from "../SubmitBtn";

const InscriptionSection = () => {
    return(
        <div className="space-y-6 mb-6">
            <h2 className="text-3xl text-center font-bold">Bienvenu sur Yokumi !</h2>
            <form className="px-4">
                <img className="hidden lg:block" src="/assets/image-auth.jpg" alt="" />
                <div className="bg-[#40150D61] flex flex-col p-4 gap-6 rounded-2xl">
                    <h2 className="text-center font-bold text-3xl">Inscription</h2>
                    <div className="relative">
                        <img className="absolute top-1/2 left-8 -translate-x-1/2 -translate-y-1/2 h-8 w-8" src="/assets/User.svg" alt="" />
                        <Input 
                            type="email"
                            placeholder="Email"
                            className="border-none indent-10 p-5 rounded-xl"
                        />
                    </div>
                    <div className="relative">
                        <img className="absolute top-1/2 left-8 -translate-x-1/2 -translate-y-1/2 h-8 w-8" src="/assets/Lock.svg" alt="" />
                        <Input 
                            type="password"
                            placeholder="Mot de passe"
                            className="border-none indent-10 p-5 rounded-xl"
                        />
                    </div>

                    <p className="font-semibold text-white text-center">
                        Vous n’avez pas de compte ? 
                        <Links 
                            link="/inscription"
                            target="_self"
                            content=" Connectez-vous"
                            className="text-marron"
                        />
                    </p>
                    <SubmitBtn 
                        className="h-12 self-center"
                        text="S'inscrire"
                    />
                </div>
            </form>
        </div>
    )

}

export default InscriptionSection;