// hook
import { useRecoilValue } from "recoil";
// atom
import { languageState } from "src/recoil";
// components
import TeamMember from "./TeamMember";
// assets
import { imageUrl } from "src/assets/images/imageList";
import translations from "src/language/translations";

import team from "src/assets/images/home/t11.png";
import team2 from "src/assets/images/home/t2.png";

const Team = () => {
  const language = useRecoilValue(languageState);

  return (
    <section
      id="team"
      className="flex-direction-c relative flex min-h-[105vh] items-center justify-center border-t bg-white p-5 pb-12 lg:px-12"
    >
      <img
        src={team}
        alt="team"
        className="absolute bottom-0 left-[-700px] h-[900px] object-cover"
      />
      <img
        src={team2}
        alt="team"
        className="absolute bottom-0 right-[-220px] h-[820px] object-cover"
      />
      <div className="flex w-full max-w-[1100px] flex-col items-center justify-center">
        <h1 className="text-[60px] font-bold uppercase text-red-500">
          <span className="text-white">Our</span>{" "}
          <span className="text-red-500">Team</span>
        </h1>
        <p className="mt-5 max-w-[700px] text-center text-[20px] text-gray-300">
          Dans notre club, nous accueillons 2 entraineurs hors pairs qui vous
          feront progresser à un niveau que vous ne pouvez imaginer.
        </p>
        <div className="mt-40 flex w-full items-center justify-between">
          <div className="flex w-[450px] flex-col gap-5">
            <h2 className="font-800 text-[28px] text-white">Nazim Djamalov</h2>
            <p className="text-[16px] text-gray-300">
              Nazim Djamalov, plusieurs fois champion de France et ancien membre
              de l&apos;équipe nationale, est un entraîneur dont
              l&apos;expérience et le talent sont reconnus au-delà des
              frontières. Avec sa créativité et sa pédagogie, il vous guidera
              pas à pas pour perfectionner votre technique et développer votre
              potentiel. Que vous soyez débutant ou compétiteur, Nazim saura
              adapter son enseignement à vos besoins pour vous faire progresser
              rapidement.
            </p>
          </div>
          <div className="flex w-[450px] flex-col gap-5 text-right">
            <h2>gaetan</h2>
            <p>
              Gaetan Houara, plusieurs fois champion d&apos;open de France, est
              un expert du grappling et de la lutte, connu pour sa maîtrise
              technique et son sens stratégique. Son approche dynamique et
              motivante vous poussera à donner le meilleur de vous-même à chaque
              entraînement. Avec son soutien, vous améliorerez vos compétences
              et atteindrez de nouveaux sommets dans votre pratique.
            </p>
          </div>
        </div>
      </div>
      {/* <h2 className="mb-5 text-center text-2xl font-bold lg:text-3xl">
        {translations[language].home.team.title}
      </h2>

      <div className="container mx-auto grid grid-cols-1 grid-rows-[auto_1.1fr_0.9fr] rounded-xl bg-white py-3 shadow-md">
        <p className="col-span-full col-start-1 px-3 pb-2 text-center text-sm leading-normal md:px-4 md:pb-3 md:text-base xl:pb-6 xl:pt-3">
          {translations[language].home.team.subTitle}
        </p>

        <TeamMember
          name="Nazim Djamalov"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quaerat modi, ducimus eveniet magnam sint."
          imgUrl={imageUrl.home.entraineur1}
        />

        <TeamMember
          name="Gaetan Houara"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quaerat modi, ducimus eveniet magnam sint."
          imgUrl={imageUrl.home.entraineur2}
          reverse={true}
        />
      </div> */}
    </section>
  );
};

export default Team;
