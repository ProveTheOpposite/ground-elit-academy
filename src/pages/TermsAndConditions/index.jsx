// hook
import { useRecoilValue } from "recoil";
import translations from "src/language/translations";
// atom
import { languageState } from "src/recoil";
// assets

const TermsAndConditions = () => {
  const language = useRecoilValue(languageState);

  return (
    <div className="mt-[64px] px-2 py-5 md:px-8 md:py-10 lg:flex lg:flex-col lg:items-center">
      <h1 className="mb-7 text-center text-3xl font-bold lg:mb-10 xl:text-4xl">
        {translations[language].termsAndConditions.title}
      </h1>

      <main className="rounded-xl bg-white px-6 py-4 shadow-md lg:w-[800px] xl:w-[950px]">
        {[
          {
            title: language === "fr" ? "1. Introduction" : "1. Introduction",
            content:
              language === "fr" ? (
                <>
                  Bienvenue sur{" "}
                  <strong className="text-red-600">
                    Ground Elit Academy - GEA
                  </strong>
                  . En accédant et en utilisant ce site web, vous acceptez
                  d&apos;être lié par les présents termes et conditions. Si vous
                  n&apos;acceptez pas ces termes, veuillez ne pas utiliser ce
                  site.
                </>
              ) : (
                <>
                  Welcome to{" "}
                  <strong className="text-red-600">
                    Ground Elit Academy - GEA
                  </strong>
                  . By accessing and using this website, you agree to be bound
                  by these terms and conditions. If you do not agree with these
                  terms, please do not use this site.
                </>
              ),
          },
          {
            title: language === "fr" ? "2. Accès au site" : "2. Site Access",
            content:
              language === "fr"
                ? "L'accès au site est gratuit. Toutefois, nous nous réservons le droit de restreindre ou de suspendre l'accès à certaines parties du site à tout moment et sans préavis."
                : "Access to the site is free. However, we reserve the right to restrict or suspend access to certain parts of the site at any time without notice.",
          },
          {
            title:
              language === "fr"
                ? "3. Utilisation du site"
                : "3. Use of the Site",
            content:
              language === "fr"
                ? "Vous acceptez d'utiliser ce site uniquement à des fins légales et de manière à ne pas violer les droits, limiter ou empêcher l'utilisation et la jouissance de ce site par d'autres. Les comportements interdits incluent le harcèlement ou la transmission de contenu obscène ou offensant."
                : "You agree to use this site only for lawful purposes and in a way that does not violate the rights, limit, or inhibit the use and enjoyment of this site by others. Prohibited behavior includes harassing or transmitting obscene or offensive content.",
          },
          {
            title:
              language === "fr"
                ? "4. Propriété intellectuelle"
                : "4. Intellectual Property",
            content:
              language === "fr" ? (
                <>
                  Tous les contenus, y compris les textes, images, graphiques,
                  logos, et logiciels présents sur ce site sont la propriété
                  exclusive de{" "}
                  <strong className="text-red-600">
                    Ground Elit Academy - GEA
                  </strong>{" "}
                  ou sont utilisés avec l&apos;autorisation de leurs
                  propriétaires respectifs. Toute reproduction, distribution,
                  modification ou utilisation du contenu à des fins commerciales
                  est strictement interdite sans autorisation préalable.
                </>
              ) : (
                <>
                  All content, including text, images, graphics, logos, and
                  software on this site is the exclusive property of{" "}
                  <strong className="text-red-600">
                    Ground Elit Academy - GEA
                  </strong>{" "}
                  or is used with permission from the respective owners. Any
                  reproduction, distribution, modification, or use of the
                  content for commercial purposes is strictly prohibited without
                  prior authorization.
                </>
              ),
          },
          {
            title:
              language === "fr"
                ? "5. Liens vers d'autres sites"
                : "5. Links to Other Sites",
            content:
              language === "fr"
                ? "Ce site peut contenir des liens vers des sites tiers. Nous ne sommes pas responsables du contenu de ces sites et vous y accédez à vos propres risques. L'inclusion de ces liens ne signifie pas que nous approuvons les sites concernés."
                : "This site may contain links to third-party websites. We are not responsible for the content of these sites and you access them at your own risk. The inclusion of these links does not imply our endorsement of the sites in question.",
          },
          {
            title:
              language === "fr"
                ? "6. Modifications des termes et conditions"
                : "6. Changes to Terms and Conditions",
            content:
              language === "fr"
                ? "Nous nous réservons le droit de modifier ces termes et conditions à tout moment. Les modifications seront effectives dès leur publication sur ce site. Il est de votre responsabilité de consulter régulièrement ces termes pour rester informé des changements."
                : "We reserve the right to change these terms and conditions at any time. Changes will be effective as soon as they are posted on this site. It is your responsibility to regularly review these terms to stay informed of any updates.",
          },
          {
            title:
              language === "fr" ? "7. Loi applicable" : "7. Applicable Law",
            content:
              language === "fr"
                ? "Ces termes et conditions sont régis par les lois de la France. Tout litige relatif à ces termes sera soumis à la juridiction exclusive des tribunaux de la France."
                : "These terms and conditions are governed by the laws of France. Any dispute relating to these terms will be subject to the exclusive jurisdiction of the courts of France.",
          },
          {
            title: language === "fr" ? "8. Contact" : "8. Contact",
            content:
              language === "fr" ? (
                <>
                  Si vous avez des questions concernant ces termes et
                  conditions, veuillez nous contacter à l&apos;adresse suivante
                  : <strong>exemple@gmail.com</strong>.
                </>
              ) : (
                <>
                  If you have any questions regarding these terms and
                  conditions, please contact us at:{" "}
                  <strong>exemple@gmail.com</strong>.
                </>
              ),
          },
        ].map((section, index) => (
          <div key={index} className="mb-5 md:mb-8">
            <h2 className="mb-3 text-xl font-bold lg:mb-5 lg:text-2xl">
              {section.title}
            </h2>

            <p className="text-justify text-sm md:text-base">
              {section.content}
            </p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default TermsAndConditions;
