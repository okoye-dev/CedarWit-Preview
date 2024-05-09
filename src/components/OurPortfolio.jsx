import React, { useState } from "react";
import SoftwareProjects from "./SoftwareProjects";
import GraphicsProjects from "./GraphicsProjects";
import TogglePortfolio from "./TogglePortfolio";
import Transition from "./Transition";

const OurPortfolio = () => {
  const [page, setPage] = useState("software-dev");
  const makePageVisible = (page) => {
    setPage(page);
  };
  return (
    <Transition>
      <div id="portfolio" className="flex flex-col items-center justify-center ipad:px-16 pt-32 pb-10 font-semibold">
        <h1 className="text-3xl font-bold text-darkGreen w-full flex justify-center">
          Our Portfolio
        </h1>
        <TogglePortfolio makeVisible={makePageVisible} />
        {page == "software-dev" ? <SoftwareProjects /> : <GraphicsProjects />}
      </div>
    </Transition>
  );
};

export default OurPortfolio;
