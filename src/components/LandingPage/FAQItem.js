import React, { useState } from "react";
import "./FAQItem.css"; // Add CSS styling for the FAQ items

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleFAQ}>
        <h3>{question}</h3>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

export default FAQItem;
