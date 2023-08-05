import React from "react";
import { useParams, Link } from "react-router-dom";

const CountryOverview = ({ countries, calcMode }) => {
  const { name } = useParams();

  const country = countries.find(
    (country) => country.name.common === name.replaceAll("-", " ")
  );

  return (
    <article
      className={`px-4 sm:px-8 md:px-16 lg:px-20 ${calcMode(
        "bg-veryDarkBlueBg",
        "bg-veryLightGray"
      )}`}
    >
      <article className="w-48 text-center py-12 lg:py-24">
        <Link to="/">
          <div
            className={`shadow-md rounded-md py-4 ${calcMode(
              "text-white bg-darkBlue",
              "text-veryDarkBlue bg-white"
            )}`}
          >
            <i className="fa-solid fa-arrow-left mr-3"></i>
            Back
          </div>
        </Link>
      </article>

      <article className="lg:grid lg:grid-cols-2 w-full space-y-8">
        <img
          src={country.flags.svg}
          className="shadow-xl mx-auto md:m-0 md:w-4/5"
          alt={`${country.name.common} flag`}
        />
        <div
          className={`grid grid-cols-2 ${calcMode(
            "text-white",
            "text-veryDarkBlue"
          )}`}
        >
          <h2 className="col-span-2 text-3xl font-extrabold mb-4">
            {country.name.common}
          </h2>
          <ul className="space-y-3 col-span-2 md:col-span-1 mb-12">
            <li>
              <span className="mr-1 font-semibold">Native Name:</span>
              {country.name.nativeName
                ? Object.values(country.name.nativeName)[0].common
                : "None"}
            </li>
            <li>
              <span className="mr-1 font-semibold">Population:</span>
              {country.population}
            </li>
            <li>
              <span className="mr-1 font-semibold">Region:</span>
              {country.region}
            </li>
            <li>
              <span className="mr-1 font-semibold">Sub Region:</span>
              {country.subregion ? country.subregion : "None"}
            </li>
            <li>
              <span className="mr-1 font-semibold">Capital:</span>
              {country.capital
                ? country.capital.map((capital, i) =>
                    country.capital.length - 1 === i ? capital : capital + ", "
                  )
                : "None"}
            </li>
          </ul>
          <ul className="space-y-3 mb-4">
            <li>
              <span className="mr-1 font-semibold">Top Level Domain:</span>
              {country.tld}
            </li>
            <li>
              <span className="mr-1 font-semibold">Currencies:</span>
              {country.currencies
                ? Object.keys(country.currencies).map((currency, i) =>
                    Object.keys(country.currencies).length - 1 === i
                      ? currency
                      : currency + ", "
                  )
                : "None"}
            </li>
            <li>
              <span className="mr-1 font-semibold">Languages:</span>
              {country.languages
                ? Object.values(country.languages).map((language, i) =>
                    Object.values(country.languages).length - 1 === i
                      ? language
                      : language + ", "
                  )
                : "None"}
            </li>
          </ul>
          <div className="flex col-span-2 items-center flex-col md:flex-row">
            <p className="mr-1 font-semibold text-center md:text-left mb-3 md:mb-0">
              Border Countries:
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {country.borders
                ? country.borders.map((border) => {
                    return (
                      <div
                        key={border}
                        className={`${calcMode(
                          "bg-darkBlue",
                          "bg-white"
                        )} shadow-md px-4 py-1 rounded-md flex items-center justify-center`}
                      >
                        {
                          countries.find((country) => country.cca3 === border)
                            .name.common
                        }
                      </div>
                    );
                  })
                : "None"}
            </div>
          </div>
        </div>
      </article>
    </article>
  );
};

export default CountryOverview;
