// hook
import { useRecoilValue } from "recoil";
// atom
import { languageState } from "src/recoil";
// assets
import translations from "src/language/translations";

const AboutUs = () => {
  const language = useRecoilValue(languageState);

  return (
    <section id="aboutUs" className="px-5 py-12 lg:px-12">
      <div className="container mx-auto flex flex-col rounded-xl bg-white shadow-md xl:flex-row">
        <div className="px-6 py-4 xl:flex-1">
          <h2 className="mb-6 text-center text-2xl font-bold md:mb-7 lg:text-3xl">
            {translations[language].home.aboutUs.title}
          </h2>

          <p className="text-justify text-sm leading-loose md:text-base md:leading-9">
            {language === "fr" ? (
              <>
                Bienvenue chez{" "}
                <strong className="text-red-600">Ground Elit Academy</strong>,
                votre destination pour la lutte et le grappling à Nice, située
                au 10 Boulevard Comte de Falicon. Avec deux entraîneurs{" "}
                <u>professionnels</u>, chacun expert dans sa discipline, nous
                offrons un encadrement de qualité pour tous les niveaux, du
                débutant au compétiteur. Notre club se distingue par une
                ambiance conviviale où <u>l&apos;entraide</u> et{" "}
                <u>le respect</u> sont au cœur de notre philosophie. Les enfants
                sont également les bienvenus chez nous, où ils peuvent non
                seulement développer leurs compétences physiques, mais aussi
                apprendre les valeurs essentielles comme le respect, la
                discipline, et l&apos;entraide. Que vous cherchiez à améliorer
                votre forme physique, à apprendre un nouvel art martial, ou à
                vous préparer pour la compétition, vous trouverez chez nous un
                cadre accueillant et stimulant. Rejoignez notre communauté et
                découvrez le plaisir de vous dépasser dans un environnement
                professionnel et amical. Nous sommes impatients de vous
                accueillir et de vous accompagner dans votre parcours, ainsi que
                celui de vos enfants.
              </>
            ) : (
              <>
                Welcome to{" "}
                <strong className="text-red-600">Ground Elit Academy</strong>,
                your destination for wrestling and grappling in Nice, located at
                10 Boulevard Comte de Falicon. With two <u>professional</u>{" "}
                coaches, each an expert in their discipline, we provide
                high-quality training for all levels, from beginners to
                competitors. Our club is known for its friendly atmosphere,
                where <u>mutual support</u> and <u>respect</u> are at the heart
                of our philosophy. Children are also welcome with us, where they
                can not only develop their physical skills but also learn
                essential values such as respect, discipline, and teamwork.
                Whether you&apos;re looking to improve your physical fitness,
                learn a new martial art, or prepare for competition, you&apos;ll
                find a welcoming and motivating environment with us. Join our
                community and discover the joy of pushing your limits in a
                professional and friendly setting. We look forward to welcoming
                you and supporting you on your journey, as well as that of your
                children.
              </>
            )}
          </p>
        </div>

        <div className="hidden md:block xl:flex-1">
          <iframe
            className="h-[230px] w-full rounded-ee-xl rounded-es-xl border border-slate-400 md:h-[350px] lg:h-[450px] xl:h-[100%] xl:rounded-es-none xl:rounded-se-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d720.7949860491581!2d7.255945928606331!3d43.72758859818614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdcff1863bfd43%3A0xeb78956f41959d12!2s10%20Bd%20Comte%20de%20Falicon%2C%2006100%20Nice!5e0!3m2!1sfr!2sfr!4v1722622448878!5m2!1sfr!2sfr"
            loading="lazy"
            title={
              language === "fr"
                ? "Emplacement de Ground Elit Academy - GEA sur Google maps"
                : "Location of Ground Elit Academy - GEA on Google Maps"
            }
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
