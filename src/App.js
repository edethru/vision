import "./App.css";
import {
  Eighth,
  Fifth,
  Fourth,
  Header,
  Hero,
  Ninth,
  Second,
  Seventh,
  Sixth,
  Tenth,
  Third,
} from "./components";
import { Routes, Route, Link } from "react-router-dom";
import SettingsImg from "./assets/images/icons8-settings-48.png";
import HeaderPreview from "./previewPageComponents/headerPreview/HeaderPreview";
import { links } from "./previewPageComponents/sidebar/Sidebar";
import Dashboard, {
  HeroDashboard,
} from "./previewPageComponents/dashboard/Dashboard";

const Home = () => {
  return (
    <>
      <Link className="preview-container" to="/preview-and-publish/header">
        <h4>Preview the site</h4>
        <img src={SettingsImg} alt="" />
      </Link>
      <Header />
      <Hero />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Seventh />
      <Eighth />
      <Ninth />
      <Tenth />
    </>
  );
};

const PreviewPage = () => {
  return (
    <div className="preview-container-app">
      <HeaderPreview />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preview-and-publish" element={<PreviewPage />}>
          <Route path="header" element={<Dashboard />} />
          <Route path="hero" element={<HeroDashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// {links.map((link) => {
//   return (
//     <>
//       <Route path={link.linkTo} element={<Dashboard />} />
//     </>
//   );
// })}
