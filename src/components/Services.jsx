import React, { useState } from "react";
import ServicesAccordion from "./ServicesAccordion";
import useServiceImages from "./hooks/useServiceImages";
import Transition from "./Transition";

const Services = () => {
  const images = useServiceImages();
  const [inView, setInView] = useState(0);
  const putInView = (n) => {
    setInView(n);
  };

  return (
    <Transition>
      <div className="bg-lightGreen lg:px-32 ipad:px-10 sm:px-6 py-20 flex flex-col gap-12 justify-center items-center text-3xl font-semibold text-white tab:px-16">
        Services We Provide
        <section className="flex lg:flex-row flex-col justify-center items-center w-full gap-16 ipad:gap-10 lg:gap-16 tab:flex-row">
          <span className="bg-darkGreen rounded-xl lg:w-[450px] sm:w-[300px] ipad:w-[370px] aspect-square place-content-center overflow-hidden tab:w-[450px]">
            <img
              id="services"
              src={images[inView]}
              alt="img"
              className="object-cover scale-150"
            />
          </span>
          <ServicesAccordion onClick={putInView} />
        </section>
      </div>
    </Transition>
  );
};

export default Services;
