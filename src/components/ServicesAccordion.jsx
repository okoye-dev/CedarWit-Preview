import React, { useContext, useState } from "react";
import useServices from "./hooks/useServices";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ServiceContext } from "./ServiceContext.jsx";

const ServicesAccordion = ({ onClick }) => {
  const services = useServices();

  const { opened, handleClick } = useContext(ServiceContext);

  return (
    <section
      className="flex flex-col justify-center items-center gap-3 lg:w-1/2 w-full ipad:w-3/4 cursor-pointer tab:w-1/2"
    >
      {services.map((object, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={`border-white border-t border-b text-2xl w-full flex flex-col justify-center overflow-hidden transition-all duration-300 ease-in-out relative ipad:text-2xl ${
            opened == index
              ? "h-40 justify-start border-l-4 sm:h-48 ipad:h-64"
              : "h-16 border-l-0"
          }`}
        >
          <span
            className={`relative flex justify-between items-center px-3 overflow-hidden transition-all duration-300 ease-in-out z-10 ipad:ml-3 ${
              opened == index && "md:-translate-y-4"
            }`}
          >
            <h1 id={`${object.anchor}`} className="text-lg lg:text-xl">
              {object.service}
            </h1>
            <button
              className={` ${opened == index && "hidden"} rounded-full px-2`}
            >
              <IoIosArrowDown />
            </button>
            <button
              className={` ${opened !== index && "hidden"} rounded-full px-2`}
            >
              <IoIosArrowUp />
            </button>
          </span>

          <p
            className={`text-xs sm:text-[10px] ipad:text-sm md:text-base tab:text-sm font-normal px-3 transition-all duration-300 ease-in-out ${
              opened == index
                ? "mt-2 sm:h-24 lg:h-32 ipad:h-32 opacity-100 ipad:ml-3 md:-translate-y-4"
                : "h-0 opacity-0"
            }`}
          >
            {object.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default ServicesAccordion;
