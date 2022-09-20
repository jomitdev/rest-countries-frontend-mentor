import React from "react";
import Dropdown from "./Dropdown";

const Search = ({ region, setRegion, calcMode, searchText, setSearchText }) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col md:flex-row md:justify-between md:items-center"
    >
      <div className="relative mb-8 w-full md:w-2/5 lg:w-1/3 md:m-0 shadow-md">
        <input
          type="text"
          className={`outline-none rounded-md px-16 w-full py-3 md:py-4 ${calcMode(
            "bg-darkBlue text-white",
            "bg-white text-veryDarkBlue"
          )}`}
          onChange={() => setSearchText(event.target.value)}
          placeholder="Search for a country..."
          value={searchText}
        />
        <i
          className={`fa-solid fa-magnifying-glass absolute top-0 bottom-0 my-auto left-6 w-4 h-4 ${calcMode(
            "text-white",
            "text-darkGray"
          )}`}
        ></i>
      </div>
      <Dropdown
        startingText="Filter by region"
        options={["All", "Africa", "America", "Asia", "Europe", "Oceania"]}
        calcMode={calcMode}
        region={region}
        setRegion={setRegion}
      />
    </form>
  );
};

export default Search;
