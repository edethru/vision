import React from "react";
import "./eighth.css";
import Video from "../../../assets/videos/video.mp4";

const Eighth = () => {
  return (
    <div className="eigth-container">
      <h1>
        Here's <span>what we we've built</span> for you{" "}
      </h1>
      <video autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Eighth;
