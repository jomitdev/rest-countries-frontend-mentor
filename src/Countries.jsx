import React from "react";
import Country from "./Country";

const Countries = ({ calcMode, countries, region, searchText }) => {
  const countriesEls = countries
    .filter((country) => {
      return (
        (region === "America" && country.region === "Americas") ||
        country.region === region ||
        region === "Filter by region" ||
        region === "All"
      );
    })
    .filter((country) => {
      return (
        country.name.common.slice(0, searchText.length) === searchText ||
        country.name.official.slice(0, searchText.length) === searchText ||
        country.name.common.toLowerCase().slice(0, searchText.length) ===
          searchText ||
        country.name.official.toLowerCase().slice(0, searchText.length) ===
          searchText ||
        country.name.common.toUpperCase().slice(0, searchText.length) ===
          searchText ||
        country.name.official.toUpperCase().slice(0, searchText.length) ===
          searchText
      );
    })
    .map((country, i) => {
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
