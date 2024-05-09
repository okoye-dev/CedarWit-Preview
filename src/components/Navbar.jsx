import React from "react";
import { useState, useEffect } from "react";
import hamburgerMenu from "../assets/svgs/hamburgerMenu.svg";

const Navbar = () => {
  const [isScrolled, setisScrolled] = useState(false);
  const handleScroll = () => {
    setisScrolled(window.scrollY > 0 ? true : false);
  };
  window.addEventListener("scroll", handleScroll);

  const [isToggled, setisToggled] = useState(false);
  const handleToggle = () => {
    setisToggled(!isToggled);
  };

  const handleClick = () => {
    setisToggled(false);
  };
  
  useEffect(() => {
    var scrollY = window.scrollY;
    var newScroll;

    window.addEventListener("scroll", function () {
      newScroll = window.scrollY;
      if (newScroll < 100) {
        document.querySelector("nav")?.classList.add("opacity-0");
      } else {
        if (scrollY > newScroll) {
          document
            .querySelector("nav")
            ?.classList.remove("-translate-y-[300px]");
          document.querySelector("nav")?.classList.remove("opacity-0");
        } else {
          document.querySelector("nav")?.classList.add("-translate-y-[300px]");
        }
      }
      scrollY = newScroll;
    });

    return () => {
      window.removeEventListener("scroll", newScroll);
    };
  }, []);

  return (
    <nav
      className={`z-[999] lg:flex items-center justify-between lg:px-32 lg:py-4 lg:border-0 w-full md:px-12 transition-all duration-300 ease-in-out ${
        isScrolled ? "scrolled" : ""
      } ${isToggled ? "open shadow-md" : "closed"} 
      fixed top-0 z-30  px-6 py-3 border-lightGreen sm:bg-white md:bg-white ipad:flex  tab:px-16 tab:border-0 `}
    >
      <div className="sm:flex sm:items-center sm:justify-between ">
        <div className="lg:w-48 w-36 md:w-40">
          <img src="\images\Logo.svg" />
        </div>

        <div className="lg:hidden ipad:hidden">
          <img
            className="cursor-pointer"
            src={hamburgerMenu}
            onClick={handleToggle}
          />
        </div>
      </div>
      <ul
        className={` lg:flex lg:border-darkGreen lg:border-2 lg:px-12 lg:py-4 lg:rounded-3xl font-bold lg:text-lg sm:bg-lightGreen sm:text-center sm:w-full  sm:z-0 sm:mt-10 sm:font-normal ipad:flex ipad:bg-white ipad:mt-0 ipad:text-md ipad:font-semibold ipad:justify-around ipad:w-2/3 tab:border-darkGreen tab:border-2 tab:rounded-3xl tab:w-3/5 tab:gap-8 tab:p-2
      
        lg:w-3/5 lg:gap-10`}
      >
        <li
          className="text-darkGreen cursor-pointer ipad:hover:border-b-2 ipad:hover:border-lime-500  
        lg:hover:border-none lg:hover:opacity-75
        md:hover:border-b-2 md:hover:border-lime-500 
        tab:hover:border-none tab:hover:opacity-75 sm:border-b-2 border-white py-2 sm:text-white ipad:text-darkGreen"
        >
          <a href="#about" onClick={handleClick}>
            {" "}
            About us
          </a>
        </li>
        <li
          className="text-darkGreen cursor-pointer ipad:hover:border-b-2 ipad:hover:border-lime-500
         lg:hover:border-none lg:hover:opacity-75  md:hover:border-b-2 md:hover:border-lime-500 
         tab:hover:border-none tab:hover:opacity-75 sm:border-b-2 border-white py-2 sm:text-white ipad:text-darkGreen"
        >
          <a href="#services" onClick={handleClick}>
            {" "}
            Our Services
          </a>
        </li>
        <li
          className="text-darkGreen cursor-pointer  ipad:hover:border-b-2 ipad:hover:border-lime-500
         lg:hover:border-none lg:hover:opacity-75  md:hover:border-b-2 md:hover:border-lime-500  
         tab:hover:border-none tab:hover:opacity-75 sm:border-b-2 border-white py-2 sm:text-white ipad:text-darkGreen"
        >
          <a href="#portfolio" onClick={handleClick}>
            {" "}
            Portfolio
          </a>
        </li>
        <li
          className="text-darkGreen cursor-pointer ipad:hover:border-b-2 ipad:hover:border-lime-500
         lg:hover:border-none lg:hover:opacity-75  
         tab:hover:border-none tab:hover:opacity-75 md:hover:border-b-2 md:hover:border-lime-500 py-2 sm:text-white ipad:text-darkGreen"
        >
          <a href="#contact" onClick={handleClick}>
            {" "}
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
