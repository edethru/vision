import React, { useEffect } from "react";
import "./third.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Third = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
    });
  }, []);

  return (
    <div className="third-container">
      <div className="container-third">
        <h1 data-aos="fade-up">
          Improve <span>retention, growth and advocacy</span> with the
          all-in-one community engagement platform
        </h1>
      </div>
    </div>
  );
};

export default Third;
