import React from "react";
import "./fifth.css";
import Img from "../../../assets/images/hitesh-bio.svg";

const Fifth = () => {
  return (
    <div className="fifth-container">
      <h1>
        Hear us say about the honorable <span>CEO/Founder</span> of our
        community
      </h1>
      <img src={Img} alt="" />
    </div>
  );
};

export default Fifth;
