import React from "react";

const Country = ({ name, flag, population, region, capitals, calcMode }) => {
  return (
    <div
      className={`${calcMode(
        "bg-darkBlue text-white",
        "bg-white text-veryDarkBlueBg"
      )} shadow-md rounded-lg overflow-hidden w-72 sm:w-auto mx-auto sm:mx-0`}
    >
      <img src={flag} className="h-48 w-full object-cover" alt="" />
      <div className="pt-6 pb-8 px-6 text-lg">
        <h2 className="text-xl font-extrabold mb-4">{name}</h2>
        <p>
          <span className="font-semibold">Population:</span> {population}
        </p>
        <p>
          <span className="font-semibold">Region:</span> {region}
        </p>
        <p>
          <span className="font-semibold">
            {capitals && capitals.length > 1 ? "Capitals: " : "Capital: "}
          </span>
          {capitals &&
            capitals.map((capital, i) =>
              capitals.length - 1 === i ? capital : capital + ", "
            )}
        </p>
      </div>
    </div>
  );
};

export default Country;