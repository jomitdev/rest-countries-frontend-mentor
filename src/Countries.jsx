import React from "react";
import Country from "./Country";

const Countries = ({ calcMode, countries }) => {
  const countriesEls = countries.map((country, i) => {
    return (
      <Country
        key={i}
        name={country.name.common}
        flag={country.flags.svg}
        population={country.population}
        region={country.continents[0]}
        capitals={country.capital}
        calcMode={calcMode}
      />
    );
  });

  return (
    <div
      className={`px-4 sm:px-8 md:px-16 lg:px-20 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 sm:gap-24 ${calcMode(
        "bg-veryDarkBlueBg",
        "bg-veryLightGray"
      )}`}
    >
      {countriesEls}
    </div>
  );
};

export default Countries;
