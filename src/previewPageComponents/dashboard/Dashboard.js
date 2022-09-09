import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ImgContext } from "../../context/ImgContext";
import { PensilContext } from "../../context/PensilContext";
import "./dashboard.css";

const InputField = ({ label, handleFocus, placeholderRef, handleChange }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholderRef}
        onFocus={handleFocus}
        onChange={handleChange}
      />
    </div>
  );
};

const Dashboard = () => {
  const { headerImg, setHeaderImg } = useContext(ImgContext);
  const { header, setHeader } = useContext(PensilContext);
  const [headerStateLocal, setHeaderStateLocal] = useState(header);
  const navigate = useNavigate();
  const handleFoucsLogoURL = () => {
    setHeaderImg(
      "https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/61603eebe2de9c6ea99ba69a_pensil%20logo%20svg.svg"
    );
  };
  const handleChangeLogoURL = (e) => {
    if (e.target.value === "") {
      setHeaderStateLocal({
        ...headerStateLocal,
        logoUrl: header.logoUrl,
      });
    } else {
      setHeaderStateLocal({
        ...headerStateLocal,
        logoUrl: e.target.value,
      });
    }
  };
  const handleFocusNav1 = () => {
    setHeaderImg("https://i.imgur.com/cmquxdc.png");
  };
  const handleChangeNav1 = (e) => {
    if (e.target.value === "") {
      setHeaderStateLocal({
        ...headerStateLocal,
        nav1: header.nav1,
      });
    } else {
      setHeaderStateLocal({
        ...headerStateLocal,
        nav1: e.target.value,
      });
    }
  };
  return (
    <div className="dashboard">
      <div className="input-container-preview">
        <InputField
          label="Logo URL"
          placeholderRef="Enter logo URL"
          handleFocus={handleFoucsLogoURL}
          onChange={handleChangeLogoURL}
        />
        <InputField
          label="Nav - 1"
          placeholderRef="Enter nav at no. 1"
          handleFocus={handleFocusNav1}
          handleChange={handleChangeNav1}
        />
        <InputField
          label="Nav - 2"
          placeholderRef="Enter nav at no. 2"
          handleFocus={() => {
            setHeaderImg("https://i.imgur.com/iKsgSFc.png");
          }}
          handleChange={(e) => {
            if (e.target.value === "") {
              setHeaderStateLocal({
                ...headerStateLocal,
                nav2: header.nav2,
              });
            } else {
              setHeaderStateLocal({
                ...headerStateLocal,
                nav2: e.target.value,
              });
            }
          }}
        />
        <InputField
          label="Nav - 3"
          placeholderRef="Enter nav at no. 3"
          handleFocus={() => {
            setHeaderImg("https://i.imgur.com/lH3D0CL.png");
          }}
          handleChange={(e) => {
            if (e.target.value === "") {
              setHeaderStateLocal({
                ...headerStateLocal,
                nav3: header.nav3,
              });
            } else {
              setHeaderStateLocal({
                ...headerStateLocal,
                nav3: e.target.value,
              });
            }
          }}
        />
        <InputField
          label="Nav - 4"
          placeholderRef="Enter nav at no. 4"
          handleFocus={() => {
            setHeaderImg("https://i.imgur.com/g8DYwUe.png");
          }}
          handleChange={(e) => {
            if (e.target.value === "") {
              setHeaderStateLocal({
                ...headerStateLocal,
                nav4: header.nav4,
              });
            } else {
              setHeaderStateLocal({
                ...headerStateLocal,
                nav4: e.target.value,
              });
            }
          }}
        />
        <InputField
          label="Nav - 5"
          placeholderRef="Enter nav at no. 5"
          handleFocus={() => {
            setHeaderImg("https://i.imgur.com/kiV2HlV.png");
          }}
          handleChange={(e) => {
            if (e.target.value === "") {
              setHeaderStateLocal({
                ...headerStateLocal,
                nav5: header.nav5,
              });
            } else {
              setHeaderStateLocal({
                ...headerStateLocal,
                nav5: e.target.value,
              });
            }
          }}
        />
      </div>
      <div className="img-container">
        <img src={headerImg} alt="" />
        <button
          onClick={() => {
            setHeader(headerStateLocal);
            navigate("/");
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

export const HeroDashboard = () => {
  const { heroImg, setHeroImg } = useContext(ImgContext);
  const { hero, setHero } = useContext(PensilContext);
  const [heroStateLocal, setHeroStateLocal] = useState(hero);
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div className="input-container-preview">
        <InputField
          label="Video URL"
          placeholderRef="Enter video URL here"
          handleFocus={() => {
            setHeroImg("https://i.imgur.com/fFvdhLn.png");
          }}
          handleChange={(e) => {
            if (e.target.value === "") {
              setHero({
                ...heroStateLocal,
                heading: hero.heading,
              });
            } else {
              setHero({
                ...heroStateLocal,
                heading: e.target.value,
              });
            }
          }}
        />
        <InputField
          label="Heading"
          placeholderRef="Enter heading here"
          handleFocus={() => {
            setHeroImg("https://i.imgur.com/PPtgUZ7.png");
          }}
          handleChange={(e) => {
            if (e.target.value === "") {
              setHeroStateLocal({
                ...heroStateLocal,
                heading: hero.heading,
              });
            } else {
              setHeroStateLocal({
                ...hero,
                heading: e.target.value,
              });
            }
          }}
        />
        <InputField
          label="Button text"
          placeholderRef="Enter text here"
          handleFocus={() => {
            setHeroImg("https://i.imgur.com/fPbMW0m.png");
          }}
          handleChange={(e) => {
            if (e.target.value === "") {
              setHeroStateLocal({
                ...heroStateLocal,
                buttonText: hero.heading,
              });
            } else {
              setHeroStateLocal({
                ...hero,
                buttonText: e.target.value,
              });
            }
          }}
        />
      </div>
      <div className="img-container">
        <img src={heroImg} alt="" />
        <button
          onClick={() => {
            setHero(heroStateLocal);
            navigate("/");
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};
