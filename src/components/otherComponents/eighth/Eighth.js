import React, { useEffect } from "react";
import "./eighth.css";
import Video from "../../../assets/videos/video.mp4";
import Aos from "aos";
import "aos/dist/aos.css";

const Eighth = () => {
  useEffect(() => {
    Aos.init({
      duration: 400,
    });
  }, []);
  return (
    <div className="eigth-container">
      <h1 data-aos="fade-up">
        Here's <span>what we we've built</span> for you{" "}
      </h1>
      <video autoPlay muted loop data-aos="zoom-in">
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Eighth;
