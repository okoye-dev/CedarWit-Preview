import React from "react";
import gp1 from "../assets/graphics-projects/gp1.png";
import gp2 from "../assets/graphics-projects/gp2.png";
import gp3 from "../assets/graphics-projects/gp3.png";
import gp4 from "../assets/graphics-projects/gp4.png";
import gp5 from "../assets/graphics-projects/gp5.png";
import gp6 from "../assets/graphics-projects/gp6.png";
import gp7 from "../assets/graphics-projects/gp7.png";
import gp8 from "../assets/graphics-projects/gp8.png";
import gp9 from "../assets/graphics-projects/gp9.png";

const GraphicsProjects = () => {
  const projects = [gp1, gp2, gp3, gp4, gp5, gp6, gp7, gp8, gp9];
  const col1 = projects.slice(0, 3);
  const col2 = projects.slice(3, 6);
  const col3 = projects.slice(6, 9);
  const columns = [col1, col2, col3];

  return (
    <>
      <div className="flex flex-wrap gap-10 my-10 justify-center items-center lg:hidden">
        {projects.map((project, id) => (
          <div key={id}>
            <img src={project} />
          </div>
        ))}
      </div>

      <div className="hidden lg:flex gap-6 mt-10">
        {columns.map((col, id) => (
          <div key={id} className="flex flex-col gap-6">
            {col.map((col, id) => (
              <div key={id}>
                <img src={col} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default GraphicsProjects;
