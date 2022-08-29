import React, { useState, useEffect } from "react";
import "./header.css";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import Aos from "aos";

const Header = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
    });
  }, []);

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const changeMobileNavOpenState = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="header-container" data-aos="fade-down">
      <div className="logo-img">
        <img
          src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/61603eebe2de9c6ea99ba69a_pensil%20logo%20svg.svg"
          alt="Logo for pencil.in"
        />
      </div>
      <nav className="navigation-menu">
        <ul>
          <li>Use case</li>
          <li>Resources</li>
          <li>Pricing</li>
          <li className="btn-for-headers">Log in</li>
          <li className="btn-for-signup">Try for free</li>
        </ul>
      </nav>
      {isMobileNavOpen ? (
        <ImCross
          className="hamburger-icon cross"
          onClick={changeMobileNavOpenState}
        />
      ) : (
        <div className="hamburger-icon" onClick={changeMobileNavOpenState}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      )}

      {isMobileNavOpen && (
        <>
          <nav
            // animate={{ x: "100%" }}
            // animate={isMobileNavOpen ? "open" : "close"}
            // variants={vairants}
            // transition={{ duration: 0.5 }}
            className="mobile-nav-menu"
          >
            <ul>
              <li>Use case</li>
              <li>Resources</li>
              <li>Pricing</li>
              <li className="btn-for-headers">Log in</li>
              <li className="btn-for-signup">Try for free</li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};

export default Header;
