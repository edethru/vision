import React, { useEffect } from "react";
import "./fourth.css";
import Abc from "../../../assets/images/abc.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Fourth = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
    });
  }, []);

  return (
    <div className="fourth-container">
      <div className="text-fourth" data-aos="fade-left">
        <h1>Designed for all usecases</h1>
        <p>
          From open discussion to gated content. Create different groups for all
          kind of use case, like coaching, mentoring, courses, forums, live
          classes etc
        </p>
        <div className="replaces">
          <p>Replaces</p>
          <h1>Slack OR Discord OR Forum</h1>
        </div>
      </div>
      <div className="img">
        <img src={Abc} alt="" srcset="" data-aos="fade-right" />
      </div>
    </div>
  );
};

export default Fourth;
