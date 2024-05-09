import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const ClientReviewsCarousel = ({ inView, setInView }) => {
  const reviews = [
    {
      client: "Ogooluwa Fagbemi",
      clientTitle: "OgTech",
      review:
        "' Overall, I was extremely satisfied with the results and would highly recommend CedarWit Technologies to anyone looking for a reliable and high-quality web/app development partner. They brought fresh ideas to the table and helped create a product that exceeded our expectations. They kept the project on track and delivered the final product on time and within budget.'",
    },
    {
      client: "Solomon Kingsley",
      clientTitle: "Kaydulf Consults",
      review:
        "' CedarWit has strong vision for Client's satisfaction and they always provide that to us at kaydulfconsults '",
    },
    {
      client: "Segun Aluko",
      clientTitle: "Revinance",
      review:
        "' CedarWit Technologies has been an invaluable partner in our digital journey. Their innovative solutions and proactive approach have helped us streamline our operations and enhance our digital presence. The team at CedarWit is professional, responsive, and always goes above and beyond to meet our needs. We highly recommend CedarWit Technologies to anyone looking for cutting-edge technology solutions. '",
    },
  ];

  const ref = useRef(null);
  const visible = useInView(ref);
  const INTERVAL = 7000;

  useEffect(() => {
    if (!visible) {
      return;
    }
    const interval = setInterval(() => {
      const next = inView == 2 ? 0 : inView + 1;
      setInView(next);
      console.log("next", visible);
    }, INTERVAL);

    return () => clearInterval(interval);
  }, [visible, inView]);

  return (
    <section ref={ref} className="flex justify-center items-center w-[300vw]">
      {reviews.map((review, id) => (
        <div
          key={id}
          className={`flex flex-col justify-center items-center gap-3 ipad:gap-5 ipad:px-24 py-10 lg:pt-14 bg-lightGreen text-white h-[33rem] ipad:h-[37rem] md:h-[33rem] tab:h-[28rem] lg:h-[33rem] transition-all duration-300 ease-in-out  w-screen ${
            inView == 0
              ? "translate-x-[100vw]"
              : inView == 2 && "-translate-x-[100vw]"
          }`}
        >
          <p
            className={`text-center text-base ipad:text-xl pt-10 tab:pt-14 lg:pt-28 ${
              id == 1 ? "w-2/3" : "w-[82%] lg:w-4/5"
            }`}
          >
            {review.review}
          </p>
          <span className="flex flex-col gap-1 ipad:gap-2 justify-center items-center bg-darkGreen rounded-xl py-3 mb-16 lg:mb-8 ipad:py-5 px-8 ipad:px-16 w-fit mt-5 tab:mt-1 text-sm ipad:text-lg font-normal">
            {review.client} <p>{review.clientTitle}</p>
          </span>
        </div>
      ))}
    </section>
  );
};

export default ClientReviewsCarousel;
