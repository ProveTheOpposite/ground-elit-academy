// hook
import { useRecoilValue } from "recoil";
// atom
import { languageState } from "src/recoil";
// component
import AccordionParent from "../AccordionParent";
// assets
import translations from "src/language/translations";

const Courses = () => {
  const language = useRecoilValue(languageState);

  const questions = [
    {
      question:
        translations[language].home.faq.questions.courses.questionOne.title,
      answer:
        translations[language].home.faq.questions.courses.questionOne.answer,
      indexQuestion: 0,
    },
    {
      question:
        translations[language].home.faq.questions.courses.questionTwo.title,
      answer:
        translations[language].home.faq.questions.courses.questionTwo.answer,
      indexQuestion: 1,
    },
    {
      question:
        translations[language].home.faq.questions.courses.questionThree.title,
      answer:
        translations[language].home.faq.questions.courses.questionThree.answer,
      indexQuestion: 2,
    },
    {
      question:
        translations[language].home.faq.questions.courses.questionFour.title,
      answer:
        translations[language].home.faq.questions.courses.questionFour.answer,
      indexQuestion: 3,
    },
  ];

  return (
    <div className="flex flex-col gap-y-5">
      <AccordionParent questions={questions} />
    </div>
  );
};

export default Courses;
