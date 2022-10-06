import React, { useState } from "react";
import Search from "./Search";
import Countries from "./Countries";

function Home({ calcMode, countries }) {
  const [region, setRegion] = useState("Filter by region");
  const [searchText, setSearchText] = useState("");

  return (
    <div
      className={`h-screen w-screen font-nunito ${calcMode(
        "bg-veryDarkBlueBg",
        "bg-veryLightGray"
      )}`}
    >
      <article className="px-4 sm:px-8 md:px-16 lg:px-20 py-8">
        <Search
          searchText={searchText}
          setSearchText={setSearchText}
          calcMode={calcMode}
          region={region}
          setRegion={setRegion}
        />
      </article>
      <Countries
        searchText={searchText}
        region={region}
        calcMode={calcMode}
        countries={countries}
      />
    </div>
  );
}

export default Home;
