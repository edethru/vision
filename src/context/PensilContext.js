import * as React from "react";
import Logo from "../assets/images/edethru.svg"

export const PensilContext = React.createContext();

const PensilProvider = ({ children }) => {
  const [header, setHeader] = React.useState({
    logoUrl:
      Logo,
    nav1: "Use case",
    nav2: "Resources",
    nav3: "Pricing",
    nav4: "Log in",
    nav5: "Start for free",
  });
  const [hero, setHero] = React.useState({
    videoUrl:
      "https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/6299e2bcea253e73171caaf9_ezgif-4-a326cbc4b0-transcode.mp4",
    heading: "Envisioning the Future of Limitless Learning",
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
