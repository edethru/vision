import React from "react";
import "./seventh.css";
import { motion } from "framer-motion";
import Img from "../../../assets/images/community-section.png";

const Container = ({ imageSrc, heading, para, totalMems }) => {
  return (
    <div className="community-container">
      <div className="image">
        <img src={imageSrc} alt="" />
      </div>
      <div className="text">
        <h5>{heading}</h5>
        <p>{para}</p>
      </div>
      <div className="joined-btn-and-more">
        <div className="total-memes-joined">👥 {totalMems}</div>
        <p>Join</p>
      </div>
    </div>
  );
};

export { Container };

const Sevneth = () => {
  return (
    <div
      className="seventh-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="community-containers-grouped">
        <Container
          imageSrc="https://pensil-social.s3.ap-south-1.amazonaws.com/storage/group-banners/5ff6d695-41cd-4b0d-8026-d395ac0b0ce8./var/www/pensil-marketplace-backend/tmp/tmp-400-1655539036888"
          heading="Javascript Community"
          para="Learn and help from each other. It doesn't matter from wh..."
          totalMems={1117}
        />
        <Container
          imageSrc="https://pensil-social.s3.ap-south-1.amazonaws.com/storage/group-banners/07983b50-81a9-4fbd-856a-c4970e35d72c./var/www/pensil-marketplace-backend/tmp/tmp-428-1655558331489"
          heading="Python Community"
          para="Learn and help from each other. It doesn't matter from wh..."
          totalMems={301}
        />
        <Container
          imageSrc="https://pensil-social.s3.ap-south-1.amazonaws.com/storage/group-banners/515587cd-81fc-499c-9479-50b6c08e9c0d./var/www/pensil-marketplace-backend/tmp/tmp-415-1655551106206"
          heading="Java Community"
          para="Learn and help from each other. It doesn't matter from wh..."
          totalMems={207}
        />
        <Container
          imageSrc="https://pensil-social.s3.ap-south-1.amazonaws.com/storage/group-banners/2c6e5325-65f8-4814-b337-71c6ac07305b./var/www/pensil-marketplace-backend/tmp/tmp-423-1655554295773"
          heading="C/CPP Community"
          para="Learn and help from each other. It doesn't matter from wh..."
          totalMems={158}
        />
      </div>
      <div className="that-image-on-seventh-section">
        <img src={Img} alt="" />
      </div>
    </div>
  );
};

export default Sevneth;
