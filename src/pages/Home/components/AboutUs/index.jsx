// hook
import { useRecoilValue } from "recoil";
// atom
import { languageState } from "src/recoil";
// assets
import translations from "src/language/translations";

const AboutUs = () => {
  const language = useRecoilValue(languageState);

  return (
    <section 
      id="aboutUs" 
      className="px-5 py-12 lg:px-12 bg-white min-h-screen flex flex-col justify-center" 
      style={{ 
        backgroundImage: "url('src/assets/images/aboutus/bg.svg')", 
        backgroundSize: "contain", 
        backgroundRepeat: "no-repeat", 
        backgroundPosition: "1300px 300px" 
      }} 
    >
      <div className="container mx-auto flex flex-col rounded-xl xl:flex-row gap-x-20">
        <div className="px-6 py-4 xl:flex-1">
          <h2 className="mb-3 text-left text-3xl font-bold md:mb-3 lg:text-4xl uppercase text-gray-800">
              {/* {translations[language].home.aboutUs.title} */}
              About <span className="text-red-600">us</span>
          </h2>

          {/* <p className="text-justify text-sm leading-loose md:text-base md:leading-9">
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
                apprendre des valeurs essentielles comme le respect, la
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
          </p> */}
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-gray-600 text-[18px]">
              Bienvenue chez <strong>Ground Elit Academy</strong>, votre destination pour la <strong>lutte</strong> et le <strong>grappling</strong> à Nice, située au 10 Boulevard Comte de Falicon.
            </h2>
            <div className="flex w-full gap-10 mt-10 items-start">
              <div className="flex flex-col justify-center items-flex-start w-1/2">
                <div className="flex justify-center items-center bg-red-600 bg-opacity-10 inline-block rounded-[10px]" style={{ width: '40px', height: '40px' }}>
                  <span className="text-sm md:text-base">
                    <i className="fa-solid fa-medal text-red-600"></i>
                  </span>
                </div>
                <h3 className="mt-2 text-gray-600 text-[22px] font-bold">
                  Entraîneurs et <strong>expertise</strong>
                </h3>
                <p className="mt-1 text-gray-600 text-[16px}">
                Avec deux entraîneurs <strong>professionnels</strong>, chacun expert dans sa discipline, nous offrons un encadrement de qualité pour tous les niveaux, du débutant au compétiteur.
                </p>
              </div>
              <div className="flex flex-col justify-center items-flex-start w-1/2">
                <div className="flex justify-center items-center bg-red-600 bg-opacity-10 inline-block rounded-[10px]" style={{ width: '40px', height: '40px' }}>
                  <span className="text-sm md:text-base">
                    <i className="fa-solid fa-handshake text-red-600"></i> {/* Changed icon to handshake */}
                  </span>
                </div>
                <h3 className="mt-2 text-gray-600 text-[22px] font-bold">
                  Philosophie du <strong>club</strong>
                </h3>
                <p className="mt-1 text-gray-600 text-[16px]">
                  Notre club se distingue par une ambiance conviviale où l&apos;entraide et le <strong>respect</strong> sont au cœur de notre philosophie.
                </p>
              </div>
            </div>

            <div className="flex w-full gap-10 mt-10 items-start">
              <div className="flex flex-col justify-center items-flex-start w-1/2">
                <div className="flex justify-center items-center bg-red-600 bg-opacity-10 inline-block rounded-[10px]" style={{ width: '40px', height: '40px' }}>
                  <span className="text-sm md:text-base">
                    <i className="fa-solid fa-users text-red-600"></i>
                  </span>
                </div>
                <h3 className="mt-2 text-gray-600 text-[22px] font-bold">
                  Accueil des <strong>enfants</strong>
                </h3>
                <p className="mt-1 text-gray-600 text-[16px]">
                  Les enfants sont également les bienvenus chez nous, où ils peuvent non seulement développer leurs compétences physiques, mais aussi apprendre des valeurs essentielles comme le <strong>respect</strong>, la <strong>discipline</strong>, et l&apos;entraide.
                </p>
              </div>
              <div className="flex flex-col justify-center items-flex-start w-1/2">
                <div className="flex justify-center items-center bg-red-600 bg-opacity-10 inline-block rounded-[10px]" style={{ width: '40px', height: '40px' }}>
                  <span className="text-sm md:text-base">
                    <i className="fa-solid fa-bullseye text-red-600"></i>
                  </span>
                </div>
                <h3 className="mt-2 text-gray-600 text-[22px] font-bold">
                  Objectifs pour les <strong>membres</strong>
                </h3>
                <p className="mt-1 text-gray-600 text-[16px]">
                Que vous cherchiez à améliorer votre forme physique, à apprendre un nouvel art martial, ou à vous préparer pour la <strong>compétition</strong>, vous trouverez chez nous un cadre accueillant et stimulant.
                </p>
              </div>
            </div>
            <button>

            </button>
          </div>
        </div>

        <div className="hidden md:block xl:flex-1">
          <iframe
            className="h-[230px] w-full rounded-[10px] md:h-[350px] lg:h-[450px] xl:h-[100%]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d720.7949860491581!2d7.255945928606331!3d43.72758859818614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdcff1863bfd43%3A0xeb78956f41959d12!2s10%20Bd%20Comte%20de%20Falicon%2C%2006100%20Nice!5e0!3m2!1sfr!2sfr!4v1722622448878!5m2!1sfr!2sfr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
