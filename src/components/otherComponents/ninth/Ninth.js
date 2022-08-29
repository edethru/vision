import React from "react";
import "./ninth.css";
import Student from "../../../assets/images/lisa-who-aspires.svg";
import Founder from "../../../assets/images/mark-the-founder.svg";

const StudentDetails = () => {
  return (
    <>
      <div className="details-student"></div>
    </>
  );
};

const Ninth = () => {
  return (
    <div className="ninth-container">
      <h1>
        See to what our <span>students have to say </span> about us
      </h1>
      <div className="students-container">
        <img src={Student} alt="" />
        <img src={Founder} alt="" />
        <img src={Student} alt="" />
        <img src={Founder} alt="" />
      </div>
    </div>
  );
};

export default Ninth;
