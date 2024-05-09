import React from "react";
import ImageSlider from "./ImageSlider";
import Transition from "./Transition";

const Hero = () => {
  return (
    <Transition>
      <section className="text-center sm:pt-16 pt-24 tab:pb-8">
        <div className="sm:p-8 ipad:px-16">
          <h1 className="lg:text-5xl text-3xl text-darkGreen mt-20 sm:mt-16 mb-8 font-semibold ipad:text-4xl sm:text-pretty">
            Let’s Build Digital Products People Will Love!
          </h1>
          <p className="lg:w-3/5 m-auto lg:text-xl text-lg pb-8 lg:font-medium text-black w-full font-normal ipad:text-xl">
            At Cedarwit, our specialty is to bring your creative ideas to
            reality through the quality services that we render. All that your
            brand needs to grow is what we do specially at Cedarwit
            Technologies.
          </p>
          <div className="lg:mb-8 sm:mb-4 ipad:mb-6 md:mb-8">
            <button className="bg-darkGreen lg:px-8 lg:py-3 mr-4 rounded-2xl text-white font-medium lg:text-lg text-md  mb-5 px-4 py-3 ipad:text-lg">
              <a href="#contact"> Contact Us</a>
            </button>
            <button className="bg-lightGreen lg:px-8   rounded-2xl text-white font-medium lg:text-lg text-md  px-4 py-3 mb-5 ipad:text-lg ">
              View Portfolio
            </button>
          </div>
        </div>
        <ImageSlider />
      </section>
    </Transition>
  );
};
export default Hero;
