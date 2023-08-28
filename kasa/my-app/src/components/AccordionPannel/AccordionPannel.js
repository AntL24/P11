import React, { useState } from "react";
import './AccordionPannel.scss';

const AccordionPanel = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="accordion-wrapper">
      <div 
        className={`accordion-title ${isOpen ? "open" : ""}`} 
        onClick={() => setOpen(!isOpen)}
      >
        {props.title}
      </div>
      {isOpen && <div className="accordion-content">{props.children}</div>}
    </div>
  );
};

export default AccordionPanel;
