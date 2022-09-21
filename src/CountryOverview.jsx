import React from "react";
import { useParams, Link } from "react-router-dom";

const CountryOverview = ({ countries, calcMode }) => {
  const { name } = useParams();

  const country = countries.find(
    (country) => country.name.common === name.replaceAll("-", " ")
  );
  console.log(country);

  return (
    <div
      className={`px-4 sm:px-8 md:px-16 lg:px-20 ${calcMode(
        "bg-veryDarkBlueBg",
        "bg-veryLightGray"
      )}`}
    >
      <div className="w-48 text-center py-12 lg:py-24">
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
      </div>

      <div className="lg:grid lg:grid-cols-2 w-full space-y-8">
        <img
          src={country.flags.svg}
          className="shadow-xl mx-auto md:m-0 md:w-4/5"
          alt=""
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
          <div className="space-y-3 col-span-2 md:col-span-1 mb-12">
            <p>
              <span className="mr-1 font-semibold">Native Name:</span>
              {Object.values(country.name.nativeName)[0].common}
            </p>
            <p>
              <span className="mr-1 font-semibold">Population:</span>
              {country.population}
            </p>
            <p>
              <span className="mr-1 font-semibold">Region:</span>
              {country.region}
            </p>
            <p>
              <span className="mr-1 font-semibold">Sub Region:</span>
              {country.subregion}
            </p>
            <p>
              <span className="mr-1 font-semibold">Capital:</span>
              {country.capital.map((capital, i) =>
                country.capital.length - 1 === i ? capital : capital + ", "
              )}
            </p>
          </div>
          <div className="space-y-3 mb-4">
            <p>
              <span className="mr-1 font-semibold">Top Level Domain:</span>
              {country.tld}
            </p>
            <p>
              <span className="mr-1 font-semibold">Currencies:</span>
              {Object.keys(country.currencies).map((currency, i) =>
                Object.keys(country.currencies).length - 1 === i
                  ? currency
                  : currency + ", "
              )}
            </p>
            <p>
              <span className="mr-1 font-semibold">Languages:</span>
              {Object.values(country.languages).map((language, i) =>
                Object.values(country.languages).length - 1 === i
                  ? language
                  : language + ", "
              )}
            </p>
          </div>
          <div className="flex col-span-2 items-center flex-col md:flex-row">
            <p className="mr-1 font-semibold text-center md:text-left mb-3 md:mb-0">
              Border Countries:
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {country.borders &&
                country.borders.map((border) => {
                  console.log(border);
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
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryOverview;
