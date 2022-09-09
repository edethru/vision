import React, { useState, useEffect, useContext } from "react";
import "./header.css";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import Aos from "aos";
import { PensilContext } from "../../context/PensilContext";

const Header = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
    });
  }, []);

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { header } = useContext(PensilContext);

  const changeMobileNavOpenState = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="header-container">
      <div className="logo-img" data-aos="fade-down">
        <img src={header.logoUrl} alt="Logo for pencil.in" />
      </div>

      <nav className="navigation-menu" data-aos="fade-down">
        <ul>
          <li>{header.nav1}</li>
          <li>{header.nav2}</li>
          <li>{header.nav3}</li>
          <li className="btn-for-headers">{header.nav4}</li>
          <li className="btn-for-signup">{header.nav5}</li>
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
          <div className="whole-nav" data-aos="fade-right">
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
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
