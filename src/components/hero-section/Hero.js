import React, { useEffect } from "react";
import "./hero.css";
import RightArrow from "../../assets/images/right-arrow.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useContext } from "react";
import { PensilContext } from "../../context/PensilContext";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
    });
  }, []);
  const { hero } = useContext(PensilContext);

  return (
    <>
      <div className="hero-container">
        <div className="video-container">
          <video className="iframe-hero" autoPlay loop muted data-aos="fade-up">
            <source src={hero.videoUrl} type="video/mp4" />
          </video>
        </div>
        <div className="text-hero" data-aos="fade-up-left">
          <h1>{hero.heading}</h1>
          <div className="hero-clickables">
            <button className="hero-btn">{hero.buttonText}</button>
            <button className="right-arrow">
              <img src={RightArrow} alt="" srcset="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
