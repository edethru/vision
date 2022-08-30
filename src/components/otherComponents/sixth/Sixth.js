import React, { useEffect } from "react";
import "./sixth.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Sixth = () => {
  useEffect(() => {
    Aos.init({
      duration: 400,
    });
  }, []);

  return (
    <div className="sixth-container">
      <h1 data-aos="fade-down">
        Join our <span> coding</span> communites <span>right now</span>
      </h1>
    </div>
  );
};

export default Sixth;
