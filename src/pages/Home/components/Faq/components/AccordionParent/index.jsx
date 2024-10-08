// hook
import { useState } from "react";
// component
import Accordion from "../Accordion";
// Props validation
import PropTypes from "prop-types";

const AccordionParent = ({ questions }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {questions.map(({ question, answer, indexQuestion }, index) => (
        <Accordion
          key={index}
          question={question}
          answer={answer}
          isOpen={openIndex === indexQuestion}
          onToggle={() => toggleAccordion(indexQuestion)}
        />
      ))}
    </>
  );
};

AccordionParent.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default AccordionParent;
