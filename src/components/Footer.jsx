import React, { useContext } from "react";
import { IoIosMail, IoIosCall, IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { ServiceContext } from "./ServiceContext.jsx";

const Footer = () => {
  const { opened, handleClick } = useContext(ServiceContext);

  return (
    <footer className="bg-lightGreen text-white lg:px-32 lg:py-8 text-lg font-semibold p-6 tab:py-8 md:px-16 md:py-8">
      <div className="grid sm:grid-cols-4 lg:flex lg:justify-between md:flex md:flex-row md:gap-6 tab:flex tab:justify-between md:justify-between">
        <div className="sm:col-span-3 sm:mb-10 md:mb-12 lg:col-span-1">
          <div className="mb-2">
            <img
              className="sm:w-36 sm:mb-4 w-40 md:w-48"
              src="images/FooterLogo.svg"
            />
          </div>
          <p className="text-xs sm:text-sm ">Bringing your ideas to reality</p>
        </div>
        <div className="sm:col-span-2">
          <h1 className="text-xl sm:text-2xl lg:text-2xl text-darkerGreen font-bold mb-6">
            Company
          </h1>
          <p className="mb-6 text-sm">
            <a href="#about">About Us</a>
          </p>
          <p className="mb-6 text-sm">
            <a href="#services">Our Services</a>
          </p>
          <p className="mb-6 text-sm">
            <a href="#portfolio">Portfolio</a>
          </p>
          <p className="mb-6 text-sm">
            <a href="#contact">Contact Us</a>
          </p>
        </div>
        <div className="sm:col-span-2">
          <h1 className="text-xl sm:text-2xl lg:text-2xl text-darkerGreen font-bold mb-6 ">
            Services
          </h1>
          <p className="mb-6 text-sm">
            <a
              href="#services"
              onClick={() => {
                handleClick(0);
              }}
            >
              Software Development
            </a>
          </p>
          <p className="mb-6 text-sm">
            <a
              href="#services"
              onClick={() => {
                handleClick(1);
              }}
            >
              Graphic Design
            </a>
          </p>
          <p className="mb-6 text-sm">
            <a
              href="#services"
              onClick={() => {
                handleClick(2);
              }}
            >
              Production
            </a>
          </p>
          <p className="mb-6 text-sm">
            <a
              href="#services"
              onClick={() => {
                handleClick(3);
              }}
            >
              Digital Marketing
            </a>
          </p>
        </div>
        <div className="sm:col-span-4">
          <h1 className="text-xl sm:text-2xl lg:text-2xl mb-6 text-darkerGreen font-bold">
            Contact Information
          </h1>
          <div className="flex gap-2 items-center mb-6 ">
            <div>
              <IoIosMail />
            </div>
            <a href="mailto: info@cedarwittechnologies.com?cc:info@cedarwittechnologies.com">
              <p className="text-sm">info@cedarwittechnologies@gmail.com</p>
            </a>
          </div>
          <div className="flex gap-2 items-center mb-6">
            <div>
              <IoIosCall />
            </div>
            <p className="text-sm">09024660504</p>
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-2xl mb-2 text-darkerGreen font-bold">
            Socials
          </h1>

          <div className="flex gap-4 items-center">
            <div>
              <a href="https://www.facebook.com/share/w7YzCy636McnEEfa/?mibextid=qi2Omg">
                <FaFacebook size={"1.4em"} />
              </a>
            </div>
            <div>
              <a href="https://x.com/CedarWitTech?t=AjmovdfUYlq6fNjkOPUERA&s=09">
                <FaXTwitter size={"1.5em"} />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/company/cedarwit-technologies">
                <IoLogoLinkedin size={"1.5em"} />
              </a>
            </div>
            <div>
              <a href="https://wa.me/message/L53QV6CTNJJ6K1">
                <FaWhatsapp size={"1.5em"} />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/cedarwit_technologies?igsh=MThrbGFoeWMyMmhsaA==">
                <FaInstagram size={"1.5em"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
