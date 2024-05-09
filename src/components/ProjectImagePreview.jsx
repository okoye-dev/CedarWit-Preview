import React, { useEffect, useRef, useState } from "react";
import projectImageContainer from "../assets/svgs/projectImageContainer.svg";
import { useInView } from "framer-motion";

const ProjectImagePreview = ({ imgs }) => {
  const [inView, setInView] = useState(0);
  const TIMING = 2500;
  const ref = useRef(null);
  const visible = useInView(ref);

  useEffect(() => {
    if (!visible) {
      return;
    }
    const interval = setInterval(() => {
      setInView((prevIndex) => (prevIndex + 1) % imgs.length);
    }, TIMING);

    return () => clearInterval(interval);
  }, [visible]);

  return (
    <div
      ref={ref}
      className="mt-3 w-full h-40 relative bg-black rounded-t-2xl p-2 pb-0 overflow-hidden"
    >
      <img src={projectImageContainer} alt="preview" />
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <img
            key={index}
            src={imgs[index]}
            alt={`preview ${index + 1}`}
            className={`transition-all duration-500 ease-in-out absolute w-[17rem] top-4 left-[14px] 
        ${inView === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
    </div>
  );
};

export default ProjectImagePreview;
