// // hook
// import { useRecoilValue } from "recoil";
// // atom
// import { languageState } from "src/recoil";
// // assets
// import translations from "src/language/translations";

// const AboutUs = () => {
//   const language = useRecoilValue(languageState);

//   return (
//     <section id="aboutUs" className="px-5 py-12 lg:px-12">
//       <div className="container mx-auto flex flex-col rounded-xl bg-white shadow-md xl:flex-row">
//         <div className="px-6 py-4 xl:flex-1">
//           <h2 className="mb-6 text-center text-2xl font-bold md:mb-7 lg:text-3xl">
//             {translations[language].home.aboutUs.title}
//           </h2>

//           <p className="text-justify text-sm leading-loose md:text-base md:leading-9">
//             {language === "fr" ? (
//               <>
//                 Bienvenue chez{" "}
//                 <strong className="text-[#b0181c]">Ground Elite Academy</strong>
//                 , votre destination pour la lutte et le grappling à Nice, située
//                 au 10 Boulevard Comte de Falicon. Avec deux entraîneurs{" "}
//                 <u>professionnels</u>, chacun expert dans sa discipline, nous
//                 offrons un encadrement de qualité pour tous les niveaux, du
//                 débutant au compétiteur. Notre club se distingue par une
//                 ambiance conviviale où <u>l&apos;entraide</u> et{" "}
//                 <u>le respect</u> sont au cœur de notre philosophie. Les enfants
//                 sont également les bienvenus chez nous, où ils peuvent non
//                 seulement développer leurs compétences physiques, mais aussi
//                 apprendre les valeurs essentielles comme le respect, la
//                 discipline, et l&apos;entraide. Que vous cherchiez à améliorer
//                 votre forme physique, à apprendre un nouvel art martial, ou à
//                 vous préparer pour la compétition, vous trouverez chez nous un
//                 cadre accueillant et stimulant. Rejoignez notre communauté et
//                 découvrez le plaisir de vous dépasser dans un environnement
//                 professionnel et amical. Nous sommes impatients de vous
//                 accueillir et de vous accompagner dans votre parcours, ainsi que
//                 celui de vos enfants.
//               </>
//             ) : (
//               <>
//                 Welcome to{" "}
//                 <strong className="text-[#b0181c]">Ground Elite Academy</strong>
//                 , your destination for wrestling and grappling in Nice, located
//                 at 10 Boulevard Comte de Falicon. With two <u>professional</u>{" "}
//                 coaches, each an expert in their discipline, we provide
//                 high-quality training for all levels, from beginners to
//                 competitors. Our club is known for its friendly atmosphere,
//                 where <u>mutual support</u> and <u>respect</u> are at the heart
//                 of our philosophy. Children are also welcome with us, where they
//                 can not only develop their physical skills but also learn
//                 essential values such as respect, discipline, and teamwork.
//                 Whether you&apos;re looking to improve your physical fitness,
//                 learn a new martial art, or prepare for competition, you&apos;ll
//                 find a welcoming and motivating environment with us. Join our
//                 community and discover the joy of pushing your limits in a
//                 professional and friendly setting. We look forward to welcoming
//                 you and supporting you on your journey, as well as that of your
//                 children.
//               </>
//             )}
//           </p>
//         </div>

//         <div className="hidden md:block xl:flex-1">
//           <iframe
//             className="h-[230px] w-full rounded-ee-xl rounded-es-xl border border-slate-400 md:h-[350px] lg:h-[450px] xl:h-[100%] xl:rounded-es-none xl:rounded-se-xl"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d720.7949860491581!2d7.255945928606331!3d43.72758859818614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdcff1863bfd43%3A0xeb78956f41959d12!2s10%20Bd%20Comte%20de%20Falicon%2C%2006100%20Nice!5e0!3m2!1sfr!2sfr!4v1722622448878!5m2!1sfr!2sfr"
//             loading="lazy"
//             title={
//               language === "fr"
//                 ? "Emplacement de Ground Elite Academy - GEA sur Google maps"
//                 : "Location of Ground Elite Academy - GEA on Google Maps"
//             }
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//       </div>

//     </section>
//   );
// };

// export default AboutUs;

// hook
import { useRecoilValue } from "recoil";
// atom
import { languageState } from "src/recoil";
// assets
import translations from "src/language/translations";

const AboutUs = () => {
  const language = useRecoilValue(languageState);

  const sections = [
    {
      icon: "medal",
      title:
        language === "fr" ? "Entraîneur et expertise" : "Coaches and Expertise",
      text:
        language === "fr" ? (
          <>
            Avec deux entraîneurs <strong>professionnels</strong>, chacun expert
            dans sa discipline, nous offrons un encadrement de qualité pour tous
            les niveaux, du débutant au compétiteur.
          </>
        ) : (
          <>
            With two <strong>professional</strong> coaches, each an expert in
            their respective discipline, we offer high-quality training for all
            levels, from beginners to competitors.
          </>
        ),
    },
    {
      icon: "handshake",
      title: language === "fr" ? "Philosophie du club" : "Club Philosophy",
      text:
        language === "fr" ? (
          <>
            Notre club se distingue par une ambiance conviviale où
            l&apos;entraide et le <strong>respect</strong> sont au cœur de notre
            philosophie.
          </>
        ) : (
          <>
            Our club stands out for its friendly atmosphere, where mutual
            support and <strong>respect</strong> are at the core of our
            philosophy.
          </>
        ),
    },
    {
      icon: "users",
      title: language === "fr" ? "Accueil des enfants" : "Welcoming Children",
      text:
        language === "fr" ? (
          <>
            Les enfants sont également les bienvenus chez nous, où ils peuvent
            non seulement développer leurs compétences physiques, mais aussi
            apprendre des valeurs essentielles comme le <strong>respect</strong>
            , la <strong>discipline</strong>, et l&apos;entraide.
          </>
        ) : (
          <>
            Children are also warmly welcomed here, where they can not only
            develop their physical skills but also learn essential values such
            as <strong>respect</strong>, <strong>discipline</strong>, and mutual
            support.
          </>
        ),
    },
    {
      icon: "bullseye",
      title:
        language === "fr" ? "Objectifs pour les membres" : "Goals for Members",
      text:
        language === "fr" ? (
          <>
            Que vous cherchiez à améliorer votre forme physique, à apprendre un
            nouvel art martial, ou à vous préparer pour la{" "}
            <strong>compétition</strong>, vous trouverez chez nous un cadre
            accueillant et stimulant.
          </>
        ) : (
          <>
            Whether you&apos;re looking to improve your fitness, learn a new
            martial art, or prepare for <strong>competition</strong>,
            you&apos;ll find a welcoming and motivating environment with us.
          </>
        ),
    },
  ];

  return (
    <section
      id="aboutUs"
      className="flex min-h-screen flex-col justify-center bg-white px-5 py-12 md:bg-[url('src/assets/images/home/bgAboutUs.svg')] md:bg-[top_650px_left_300px] lg:bg-[top_550px_left_350px] lg:px-12 xl:bg-[top_300px_left_700px] 2xl:bg-[left_1300px_top_300px]"
      style={{
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto flex flex-col gap-x-20 rounded-xl xl:flex-row">
        <div className="px-3 py-4 sm:px-6 md:mb-12 xl:flex-1">
          <h2 className="mb-3 text-left text-3xl font-bold uppercase text-gray-800 md:mb-5 lg:text-4xl">
            {language === "fr" ? (
              <>
                À propos de <span className="text-red-600">nous</span>
              </>
            ) : (
              <>
                About <span className="text-red-600">us</span>
              </>
            )}
          </h2>

          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[18px] text-gray-600">
              {language === "fr" ? (
                <>
                  Bienvenue chez <strong>Ground Elit Academy</strong>, votre
                  destination pour la <strong>lutte</strong> et le{" "}
                  <strong>grappling</strong> à Nice, située au 10 Boulevard
                  Comte de Falicon.
                </>
              ) : (
                <>
                  Welcome to <strong>Ground Elit Academy</strong>, your
                  destination for <strong>wrestling</strong> and{" "}
                  <strong>grappling</strong> in Nice, located at 10 Boulevard
                  Comte de Falicon.
                </>
              )}
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:grid-rows-2 md:gap-10">
              {sections.map(({ icon, title, text }, index) => {
                return (
                  <div key={index} className="flex flex-col">
                    <div
                      className="flex items-center justify-center rounded-[10px] bg-red-600 bg-opacity-10"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <span className="text-sm md:text-base">
                        <i className={`fa-solid fa-${icon} text-red-600`}></i>
                      </span>
                    </div>

                    <h3 className="mt-3 text-[22px] font-bold text-gray-600">
                      {title}
                    </h3>

                    <p className="text-[16px} mt-1 text-gray-600">{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="hidden rounded-[10px] md:block md:border md:border-slate-400 xl:flex-1">
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
