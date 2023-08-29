import React, { useState } from "react";
import './AccordionPannel.scss';

//Accordion panel component
//Used in the accommodation details page to display the description and the equipments of the accommodation
//Also used in the about page to display the rules of the website
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
