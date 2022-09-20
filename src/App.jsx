import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import axios from "axios";
import Countries from "./Countries";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [region, setRegion] = useState("Filter by region");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err));
  }, []);

  const calcMode = (dark, light) => {
    return darkMode ? dark : light;
  };

  const changeMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`h-screen w-screen font-nunito ${calcMode(
        "bg-veryDarkBlueBg",
        "bg-veryLightGray"
      )}`}
    >
      <Navbar calcMode={calcMode} changeMode={changeMode} />
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-8">
        <Search calcMode={calcMode} region={region} setRegion={setRegion} />
      </div>
      <Countries calcMode={calcMode} countries={countries} />
    </div>
  );
}

export default App;
