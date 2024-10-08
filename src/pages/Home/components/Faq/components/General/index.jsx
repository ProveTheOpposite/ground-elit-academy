// hook
import { useRecoilValue } from "recoil";
// atom
import { languageState, scrollToElementSelector } from "src/recoil";
// component
import AccordionParent from "../AccordionParent";
// assets
import { Link } from "react-router-dom";
import translations from "src/language/translations";

const General = () => {
  const language = useRecoilValue(languageState);
  const scrollToElement = useRecoilValue(scrollToElementSelector);

  const questions = [
    {
      question:
        translations[language].home.faq.questions.general.questionOne.title,
      answer:
        translations[language].home.faq.questions.general.questionOne.answer,
      indexQuestion: 0,
    },
    {
      question:
        translations[language].home.faq.questions.general.questionTwo.title,
      answer:
        language === "fr" ? (
          <>
            Les horaires du club sont disponibles{" "}
            <Link
              onClick={() => scrollToElement("schedule")}
              className="text-blue-500 hover:underline"
            >
              ici
            </Link>
            .
          </>
        ) : (
          <>
            The club&apos;s schedule is available{" "}
            <Link
              onClick={() => scrollToElement("schedule")}
              className="text-blue-500 hover:underline"
            >
              here
            </Link>
            .
          </>
        ),
      indexQuestion: 1,
    },
    {
      question:
        translations[language].home.faq.questions.general.questionThree.title,
      answer:
        language === "fr" ? (
          <>
            Les frais d&apos;adhésion et d&apos;abonnement sont disponibles{" "}
            <Link
              onClick={() => scrollToElement("rates")}
              className="text-blue-500 hover:underline"
            >
              ici
            </Link>
            .
          </>
        ) : (
          <>
            The membership and subscription fees are available{" "}
            <Link
              onClick={() => scrollToElement("rates")}
              className="text-blue-500 hover:underline"
            >
              here
            </Link>
            .
          </>
        ),
      indexQuestion: 2,
    },
    {
      question:
        translations[language].home.faq.questions.general.questionFour.title,
      answer:
        translations[language].home.faq.questions.general.questionFour.answer,
      indexQuestion: 3,
    },
  ];

  return (
    <div className="flex flex-col gap-y-5">
      <AccordionParent questions={questions} />
    </div>
  );
};

export default General;
