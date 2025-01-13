import React from "react";
import FAQItem from "./FAQItem";
import "./FAQSection.css";

const FAQSection = () => {
  const faqData = [
    {
      question: "Is the Cypher Neo Games gaming platform safe?",
      answer:
        "Yes, Cypher Neo Games is a 100% safe and secure gaming platform.",
    },
    {
      question: "Is online gaming legal in India?",
      answer:
        "Online gaming is legal in many parts of India, subject to state laws.",
    },
    {
      question:
        "What if I don't want to put in money while playing online games but play for free?",
      answer:
        "Cypher Neo Games offers free games for users who do not wish to invest money.",
    },
    {
      question: "How do I withdraw money from Cypher Neo Games?",
      answer:
        "You can withdraw your earnings directly to your bank account from the app.",
    },
    {
      question: "Which game can earn real money?",
      answer:
        "Games like Rummy and Poker allow you to earn real money on Cypher Neo Games.",
    },
    {
      question: "Which is the No. 1 earning app?",
      answer:
        "Cypher Neo Games is one of the leading apps for earning money while gaming.",
    },
    {
      question: "What is Cypher Neo Games Company?",
      answer:
        "Cypher Neo Games is a premier online gaming platform offering various games like Rummy and Poker.",
    },
    {
      question: "Is Cypher Neo Games free?",
      answer:
        "Cypher Neo Games is free to download and play, with options for paid tournaments.",
    },
  ];

  return (
    <section className="faq-section">
      <h2>FAQs</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
