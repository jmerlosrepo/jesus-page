import { useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import AboutMe from "./components/Pages/AboutMe/AboutMe";
import Career from "./components/Pages/Career/Career";
import Portfolio from "./components/Pages/Portfolio/Portfolio";

import styles from "./App.module.scss";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/aboutMe");
    }
  }, [navigate, location.pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.navigationContainer}>
        <Navigation />
      </div>
      <div className={styles.contentContainer}>
        <Routes>
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/career" element={<Career />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
