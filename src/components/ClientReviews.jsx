import React, { useState } from "react";
import ClientReviewsCarousel from "./ClientReviewsCarousel";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Transition from "./Transition";

const ClientReviews = () => {
  const array = [...Array(3).keys()];
  const [inView, setInview] = useState(0);
  const previous = () => {
    inView !== 0 && setInview((prev) => prev - 1);
  };
  const next = () => {
    inView !== 2 ? setInview((prev) => prev + 1) : setInview(0);
  };

  return (
    <Transition>
      <section className="flex justify-center items-center overflow-hidden rounded-3xl relative bg-white mx-2 px-2 w-screen">
        <h1 className="text-[#3F4525] font-bold text-[1.375rem] ipad:text-2xl lg:text-3xl absolute top-8 lg:top-24 md:top-6 z-10">
          What Our Clients Say
        </h1>

        <ClientReviewsCarousel inView={inView} setInView={setInview} />

        <div className="absolute z-20 flex gap-1 bottom-6 sm:bottom-[4.5rem]">
          {array.map((_, index) => (
            <span
              key={index}
              className={`transiton duration-500 ease-in-out rounded-full h-[0.6rem] flex ${
                index == inView ? "w-4 bg-darkGreen" : "w-[0.6rem] bg-white"
              }`}
            ></span>
          ))}
        </div>

        <div className="bg-white absolute bottom-0 right-0 z-10 flex justify-center items-center text-black rounded-tl-3xl rounded-br-3xl border">
          <button
            onClick={() => previous()}
            className="flex flex-col justify-center items-center py-2 px-10 border-r"
          >
            <GoArrowLeft /> Prev
          </button>
          <button
            onClick={() => next()}
            className="flex flex-col justify-center items-center py-2 px-10 border-black"
          >
            <GoArrowRight />
            Next
          </button>
        </div>
      </section>
    </Transition>
  );
};

export default ClientReviews;
