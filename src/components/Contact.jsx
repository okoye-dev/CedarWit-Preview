import React, { useState } from "react";
import { IoIosMail, IoIosCall, IoLogoLinkedin } from "react-icons/io";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import GetStarted from "./GetStarted";
import Transition from "./Transition";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [message, setMessage] = useState([]);
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const form = document.querySelector("form");

  const handleInvalidEmail = (e) => {
    e.target.setCustomValidity("");
    setEmailError("Invalid email address.");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
    e.target.setCustomValidity("");
  };

  const handleClearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const successful = (res) => {
    setLoading(false);
    setIsSuccess(true);
    setError("Message sent successfully");
    form.reset();
    handleClearForm();
    console.log(res.data);
  };

  const unsuccessful = (error) => {
    setLoading(false);
    setIsSuccess(false);
    setError(
      "An error occurred while submitting the form. Please try again later."
    );
    console.log("Problem submitting form: ", error.message);
  };

  const sendEmail = async (e) => {
    const data = { name, email, message };
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "https://prod.cedarwittechnologies.com/api/contact",
        data
      );
      successful(response);
    } catch (error) {
      unsuccessful(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
    console.log("email sent: ", message);
  };

  return (
    <Transition>
      <section
        id="contact"
        className="lg:px-32 py-8 pb-32 sm:px-4 contactBackground-image ipad:px-16"
      >
        <h1 className="lg:text-4xl tab:text-4xl text-center font-semibold text-3xl">
          Contact Us
        </h1>
        <div className="pb-16">
          <div className="flex sm:flex-col md:flex-col tab:flex-row lg:justify-between lg:gap-24 lg:mt-24 font-semibold lg:items-center sm:pt-12 md:flex md:items-center md:gap-8 md:mt-10">
            <div className="border border-black lg:px-8 lg:w-1/2 w-full rounded-2xl p-8 ipad:mb-8 tab:w-1/2 max-w-[40rem]">
              <form
                onSubmit={handleSubmit}
                className="text-black flex flex-col relative"
              >
                <div>
                  <input
                    className="font-medium border border-black w-full mb-8 pl-5 pr-1 py-2 rounded-xl"
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  {emailError && (
                    <span className="absolute text-red-500 text-xs -translate-y-5 pl-5">
                      {emailError}
                    </span>
                  )}
                  <input
                    className="border border-[#13150B] w-full mb-8 pl-5 pr-1 py-2 font-medium rounded-xl"
                    type="text"
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    placeholder="Email"
                    onChange={handleEmailChange}
                    onInvalid={handleInvalidEmail}
                    required
                  ></input>
                </div>
                <div>
                  <textarea
                    className="border border-[#13150B] w-full pl-3 pr-1 py-3 font-medium rounded-xl resize-none"
                    name="message"
                    rows={7}
                    cols={20}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                {error && (
                  <span
                    className={`absolute text-xs -translate-y-14 pl-5 bottom-0 w-full justify-center flex text-center ${
                      isSuccess ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {error}
                  </span>
                )}
                {loading && (
                  <span
                    className={`animate-pulse absolute text-xs -translate-y-14 pl-5 bottom-0 w-full justify-center flex text-black/30`}
                  >
                    processing...
                  </span>
                )}
                <button
                  className="bg-darkGreen text-white w-full px-2 py-3 mt-8 rounded-xl"
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>

            <div className="text-white bg-lightGreen rounded-xl p-8  sm:mt-10 sm:text-center lg:w-2/5 tab:w-1/2">
              <h1 className="lg:text-2xl mb-4 text-xl">Contact Information</h1>

              <div className="flex gap-2 items-center mb-4 sm:justify-center">
                <div>
                  <IoIosMail />
                </div>

                <a href="mailto: info@cedarwittechnologies.com?cc:info@cedarwittechnologies.com">
                  <p className="text-md">info@cedarwittechnologies@gmail.com</p>
                </a>
              </div>
              <div className="flex gap-2 items-center mb-4 sm:justify-center">
                <IoIosCall />
                <p className="text-sm">09024660504</p>
              </div>
              <h1 className="text-xl mb-4">Socials</h1>

              <div className="flex gap-4 sm:gap-8 items-center sm:justify-center">
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
        </div>
        <GetStarted />
      </section>
    </Transition>
  );
};

export default Contact;
