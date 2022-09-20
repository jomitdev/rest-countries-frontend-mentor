import React, { useState } from "react";

const Dropdown = ({ region, setRegion, options, calcMode }) => {
  const [opened, setOpened] = useState(false);

  const openMenu = () => {
    setOpened((prevState) => !prevState);
    document.querySelector(".fa-chevron-down").classList.toggle("rotate-180");
  };

  const chooseRegion = () => {
    setOpened(false);
    setRegion(event.target.name);
  };
  return (
    <div>
      <button
        type="button"
        onClick={openMenu}
        className={`flex items-center justify-between py-4 px-6 w-56 text-left font-semibold rounded-md shadow-md ${calcMode(
          "bg-darkBlue text-white",
          "bg-white text-veryDarkBlue"
        )}`}
      >
        {region}
        <i
          className={`fa-solid fa-chevron-down transition-all ease-in-out`}
        ></i>
      </button>
      <div
        className={`menu max-h-0 overflow-hidden ease-[cubic-bezier(0,1,0,1)] transition-all drop duration-200 mt-2 absolute bg-darkBlue w-56 rounded-md ${calcMode(
          "bg-darkBlue text-white",
          "bg-white text-veryDarkBlue"
        )} ${opened ? "show" : ""}`}
      >
        <div className="py-4 px-6 space-y-2 flex flex-col">
          {options.map((option) => (
            <button
              type="button"
              onClick={chooseRegion}
              name={option}
              className={``}
              key={option}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
