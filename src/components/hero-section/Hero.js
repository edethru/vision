import React, { useEffect } from "react";
import "./hero.css";
import RightArrow from "../../assets/images/right-arrow.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
    });
  }, []);

  return (
    <>
      <div className="hero-container">
        <div className="video-container">
          <video className="iframe-hero" autoPlay loop muted data-aos="fade-up">
            <source
              src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/6299e2bcea253e73171caaf9_ezgif-4-a326cbc4b0-transcode.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="text-hero" data-aos="fade-up-left">
          <h1>One Platform for all your Community needs</h1>
          <div className="hero-clickables">
            <button className="hero-btn">
              Click here to begin your journey for free
            </button>
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
