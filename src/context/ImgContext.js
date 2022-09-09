import * as React from "react";

export const ImgContext = React.createContext();

const ImgProvider = ({ children }) => {
  const [headerImg, setHeaderImg] = React.useState(
    "https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/61603eebe2de9c6ea99ba69a_pensil%20logo%20svg.svg"
  );
  const [heroImg, setHeroImg] = React.useState(
    "https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/6299e2bcea253e73171caaf9_ezgif-4-a326cbc4b0-transcode.mp4"
  );
  const value = {
    headerImg,
    setHeaderImg,
    heroImg,
    setHeroImg,
  };
  return <ImgContext.Provider value={value}>{children}</ImgContext.Provider>;
};

export default ImgProvider;
