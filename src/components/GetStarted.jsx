import React from "react";
import Transition from "./Transition";

const GetStarted = () => {
  return (
    <Transition>
      <div className="bg-darkGreen text-white text-center lg:px-32 lg:py-8 mt-8 p-8 rounded-2xl">
        <h1 className="lg:text-4xl text-3xl font-semibold mb-4">Get Started</h1>
        <p className="mb-4 lg:text-xl tab:text-xl">
          We at Cedar wit strive to bring your ideas and market models with aid
          of software development, marketing and other means necessary to create
          a successful outcome with the adi of a dedicated team with different
          skillsets..
        </p>
        <button className="bg-lightGreen px-8 py-2 rounded-xl text-white text-md lg:text-lg tab:text-lg">
          <a href="#contact"> Contact Us</a>
        </button>
      </div>
    </Transition>
  );
};
export default GetStarted;
