import React, { useEffect } from "react";
import "./ninth.css";
import Student from "../../../assets/images/lisa-who-aspires.svg";
import Founder from "../../../assets/images/mark-the-founder.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const Ninth = () => {
  useEffect(() => {
    Aos.init({
      duration: 400,
    });
  }, []);
  return (
    <div className="ninth-container">
      <h1 data-aos="fade-up">
        See to what our <span>students have to say </span> about us
      </h1>
      <div className="students-container">
        <img src={Student} alt="" data-aos="zoom-out" />
        <img src={Founder} alt="" data-aos="zoom-out" />
        <img src={Student} alt="" data-aos="zoom-out" />
        <img src={Founder} alt="" data-aos="zoom-out" />
      </div>
    </div>
  );
};

export default Ninth;
