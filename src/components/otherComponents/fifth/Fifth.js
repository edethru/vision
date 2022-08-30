import React, { useEffect } from "react";
import "./fifth.css";
import Img from "../../../assets/images/hitesh-bio.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const Fifth = () => {
  useEffect(() => {
    Aos.init({
      duration: 400,
    });
  }, []);

  return (
    <div className="fifth-container">
      <h1 data-aos="fade-up">
        Hear us say about the honorable <span>CEO/Founder</span> of our
        community
      </h1>
      <img src={Img} alt="" data-aos="fade-up" />
    </div>
  );
};

export default Fifth;
