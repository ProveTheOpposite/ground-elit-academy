// hook
import { useRecoilValue } from "recoil";
// atom
import { languageState } from "src/recoil";
// components
import TeamMember from "./TeamMember";
// assets
import { imageUrl } from "src/assets/images/imageList";
import translations from "src/language/translations";

const Team = () => {
  const language = useRecoilValue(languageState);

  return (
    <section id="team" className="border-t border-zinc-400 p-5 pb-12 lg:px-12">
      <h2 className="mb-5 text-center text-2xl font-bold lg:text-3xl">
        {translations[language].home.team.title}
      </h2>

      <div className="container mx-auto grid grid-cols-1 grid-rows-[auto_1.1fr_0.9fr] rounded-xl bg-white pt-3 shadow-md">
        <p className="col-span-full col-start-1 px-3 pb-2 text-center text-sm leading-normal md:px-4 md:pb-3 md:text-base xl:pb-6 xl:pt-3">
          {translations[language].home.team.subTitle}
        </p>

        <TeamMember
          name="Nazim Djamalov"
          description={translations[language].home.team.nazim.text}
          imgUrl={imageUrl.home.entraineur1}
        />

        <TeamMember
          name="Gaetan Houara"
          description={translations[language].home.team.gaetan.text}
          imgUrl={imageUrl.home.entraineur2}
          reverse={true}
        />
      </div>
    </section>
  );
};

export default Team;
