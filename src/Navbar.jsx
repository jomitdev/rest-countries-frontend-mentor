import React from "react";

const Navbar = ({ calcMode, changeMode }) => {
  return (
    <div
      className={`flex justify-between px-4 sm:px-8 md:px-16 lg:px-20 py-8 ${calcMode(
        "bg-darkBlue text-white",
        "bg-white shadow-md text-veryDarkBlue"
      )}`}
    >
      <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold">
        Where in the world?
      </h1>
      <button className="text-lg sm:text-xl" onClick={changeMode}>
        <i
          className={`${calcMode(
            "fa-solid fa-moon",
            "fa-regular fa-moon"
          )} pr-2`}
        ></i>
        {calcMode("Dark", "Light")} Mode
      </button>
    </div>
  );
};

export default Navbar;
