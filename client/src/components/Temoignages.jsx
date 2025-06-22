import TemoignagesCard from "./TemoignageCard";
import Links from "./Links";

const Temoignages = () => {
    const temoignages = [
        {
            id: 1,
            profile: '/assets/joli-nana.png',
            userName: 'Aïcha',
            userLocation: 'Cotonou',
            temoignage: '"Depuis que j’ utilise le beurre de karité de cette marque, mes cheveux afro sont plus doux, plus faciles à coiffer et bien hydratés toute la semaine. J’ai enfin trouvé un soin naturel qui respecte ma texture sans l’alourdir."',
        },
        {
            id: 2,
            profile: '/assets/mamadou.png',
            userName: 'Mamadou',
            userLocation: 'Darkar',
            temoignage: '"Après des années à chercher une solution pour ma peau sèche, surtout avec la poussière et le soleil de Dakar, j’ai enfin trouvé un karité qui fait vraiment la différence. Mon teint est plus net, et ma peau reste hydratée toute la journée."',
        }
    ]
    return(
        <section className="flex flex-col gap-24 px-6 lg:px-24">
            <h2 className="uppercase text-2xl font-bold">Témoignages Clients</h2>
            <div className="flex flex-col gap-32 lg:flex-row mx-auto lg:justify-center xl:gap-64 md:grid md:grid-cols-2 ">
                {
                    temoignages.map((temoignage) => (
                        <TemoignagesCard 
                            className="mx-8"
                            key={temoignage.id} 
                            profile={temoignage.profile} 
                            temoignage={temoignage.temoignage} 
                            userName={temoignage.userName} 
                            userLocation={temoignage.userLocation}
                        />
                    ))
                }
            </div>
            <div className="text-right">
                <Links 
                    link="#"
                    target="_self"
                    className="font-bold border-[3px] rounded-[24px] border-marron px-5 py-4 mr-4"
                    content="Voir plus"
                />
            </div>
        </section>
    )
}
export default Temoignages;