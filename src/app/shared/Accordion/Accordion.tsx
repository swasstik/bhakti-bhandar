import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

import classes from "./Accordion.module.css";

interface AccordionProps {
  title: string;
  content: string;
  initialIsOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  initialIsOpen,
}) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.accordion}>
      <div className={classes.accordionHeader} onClick={toggleAccordion}>
        {title}
        <div className={classes.accordionIcon}>
          {isOpen ? (
            <AiOutlineUp className={classes.arrow} />
          ) : (
            <AiOutlineDown className={classes.arrow} />
          )}
        </div>
      </div>
      {isOpen && <div className={classes.accordionContent}>{content}</div>}
    </div>
  );
};

export default Accordion;
