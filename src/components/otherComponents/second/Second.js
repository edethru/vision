import React, { useEffect } from "react";
import "./second.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Second = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
    });
  }, []);

  return (
    <div className="second-container">
      <img
        src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62a39bd09a054aa8bce8fff8_UG.png"
        alt=""
        srcset=""
        data-aos="fade-up"
      />
      <img
        src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62a39bd009523770f3027e85_Unschool%20Logo.png"
        alt=""
        srcset=""
        data-aos="fade-up"
      />
      <img
        src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/61601b9ac55a2dcd2a41b48f_Frame%20908.png"
        alt=""
        srcset=""
        data-aos="fade-up"
      />
      <img
        src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/61601b9a935c243776914697_Frame%20911.png"
        alt=""
        srcset=""
        data-aos="fade-up"
      />
      <img
        src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62a39bd09a054aa8bce8fff8_UG.png"
        alt=""
        srcset=""
        data-aos="fade-up"
      />
      <img
        src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62a39bcf4541a43b09c1be95_Pedal%20Start.png"
        alt=""
        srcset=""
        data-aos="fade-up"
      />
      <img
        src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/61601b9a5ceb3528bf34aa78_Frame%20910.png"
        alt=""
        srcset=""
        data-aos="fade-up"
      />
      <img
        src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62a39bd09a054aa8bce8fff8_UG.png"
        alt=""
        srcset=""
        data-aos="fade-up"
      />
      <img
        src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62a39c89769b37a39217bdaa_Planet%20Spark.png"
        alt=""
        srcset=""
        data-aos="fade-up"
      />
      <img
        src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62e28a9d65b5e0dfcf6f0cea_Kinship%20logo%20.png"
        alt=""
        srcset=""
        data-aos="fade-up"
      />
    </div>
  );
};

export default Second;
