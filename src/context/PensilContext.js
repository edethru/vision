import * as React from "react";

export const PensilContext = React.createContext();

const PensilProvider = ({ children }) => {
  const [header, setHeader] = React.useState({
    logoUrl:
      "https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/61603eebe2de9c6ea99ba69a_pensil%20logo%20svg.svg",
    nav1: "Use case",
    nav2: "Resources",
    nav3: "Pricing",
    nav4: "Log in",
    nav5: "Try for free",
  });
  const [hero, setHero] = React.useState({
    videoUrl:
      "https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/6299e2bcea253e73171caaf9_ezgif-4-a326cbc4b0-transcode.mp4",
    heading: "One Platform for all your Community needs",
    buttonText: "Click here to begin your journey for free",
  });
  const value = {
    header,
    hero,
    setHeader,
    setHero,
  };
  return (
    <PensilContext.Provider value={value}>{children}</PensilContext.Provider>
  );
};

export default PensilProvider;
