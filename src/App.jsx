import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import CountryOverview from "./CountryOverview";
import axios from "axios";

function App() {
  window.addEventListener("resize", () => console.log(window.innerWidth));
  const [darkMode, setDarkMode] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err));
  }, []);

  const calcMode = (dark, light) => {
    return darkMode
      ? dark + " transition-colors duration-300"
      : light + " transition-colors duration-300";
  };

  const calcModeNoTransition = (dark, light) => {
    return darkMode ? dark : light;
  };

  const changeMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <div
      className={`h-screen ${calcMode(
        "bg-veryDarkBlueBg",
        "bg-veryLightGray"
      )}`}
    >
      <Navbar
        calcMode={calcMode}
        changeMode={changeMode}
        calcModeNoTransition={calcModeNoTransition}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home calcMode={calcMode} countries={countries} />}
          ></Route>
          <Route
            path="/:name"
            element={
              <CountryOverview countries={countries} calcMode={calcMode} />
            }
          ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
