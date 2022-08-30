import React, { useEffect } from "react";
import "./tenth.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Questions = ({ question, answer }) => {
  useEffect(() => {
    Aos.init({
      duration: 400,
    });
  }, []);
  return (
    <>
      <div className="question-ans-container" data-aos="fade-right">
        <div className="question">
          <div className="blue-ball"></div>
          <p>{question}</p>
        </div>
        <div className="answer">
          <p>Ans:- {answer}</p>
        </div>
      </div>
    </>
  );
};

const Tenth = () => {
  useEffect(() => {
    Aos.init({
      duration: 400,
    });
  }, []);
  return (
    <div className="tenth-container">
      <h1 data-aos="fade-up">Frequently Asked Questions</h1>
      <div className="questions-container">
        <Questions
          question="What are we made for?"
          answer="To provide best quality community to learners and tech peoples"
        />
        <Questions
          question="Does it support JavaScript?"
          answer="JavaScript is the most popular language in the world, no wonder we support it"
        />
        <Questions
          question="What are we made for?"
          answer="To provide best quality community to learners and tech peoples"
        />
        <Questions
          question="What are we made for?"
          answer="To provide best quality community to learners and tech peoples"
        />
      </div>
    </div>
  );
};

export default Tenth;
