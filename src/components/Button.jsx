import React from "react";

const Button = ({ children, light, onClick, customClasses }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`${customClasses} w-fit hover:opacity-85 text-white ${
        light ? "bg-lightGreen" : "bg-darkGreen"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
