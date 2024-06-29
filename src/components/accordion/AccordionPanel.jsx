import React, { useState } from "react";
import "./accordionPanel.scss";

const AccordionPanel = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-panel">
      <div className="accordion-header" onClick={togglePanel}>
        <div className="footer__mid__list">{title}</div>
        <div className={`accordion-icon ${isOpen ? "open" : ""}`}></div>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default AccordionPanel;
