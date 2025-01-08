import React, { useEffect } from "react";
import "./hero.css";
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
        {/* <div className="video-container">
          <video className="iframe-hero" autoPlay loop muted data-aos="fade-up">
            <source src={hero.videoUrl} type="video/mp4" />
          </video>
        </div> */}
        {/* data-aos="fade-up-left" */}
        <div className="text-hero">
          <h1>{hero.heading}</h1>
          <p>Edethru is a platform dedicated to the belief that education is a universal right. With just a phone or tablet, anyone, anywhere can access limitless learning opportunities.</p>
          <div className="btns">
            <button className="btn-for-headers">Log in</button>
            <button className="btn-for-signup">Start for free</button>
          </div>
          {/* <div className="hero-clickables">
            <button className="hero-btn">{hero.buttonText}</button>
            <button className="right-arrow">
              <img src={RightArrow} alt="" srcset="" />
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
