import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import OurPortfolio from "../components/OurPortfolio";
import ClientReviews from "../components/ClientReviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { ServiceContext } from "../components/ServiceContext.jsx";
import { useState } from "react";

const Landing = () => {
  const [opened, setOpened] = useState(0);
  const handleClick = (index) => {
    setOpened(index);
  };

  return (
    <ServiceContext.Provider value={{ opened, handleClick }}>
      <div className="text-darkGreen relative overflow-hidden">
        <div className="absolute top-0 w-full ">
          <Navbar />
        </div>
        <div className="background-image">
          <Hero />
        </div>
        <About />
        <Services />
        <OurPortfolio />
        <div className="px-28 py-20 sm:px-0 ipad:px-10">
          <ClientReviews />
        </div>
        <Contact />
        <Footer />
      </div>
    </ServiceContext.Provider>
  );
};

export default Landing;
