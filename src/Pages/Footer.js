import React, { useEffect, useState, useRef } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [peopleCount, setPeopleCount] = useState(0);
  const [contractorsCount, setContractorsCount] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const footerRef = useRef(null);

  const duration = 2000; // 2 seconds

  const incrementCount = (setCount, end) => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      if (start < end) {
        start += 1;
        setCount(start);
      } else {
        clearInterval(timer);
      }
    }, stepTime);
    return timer;
  };

  const startCounting = () => {
    if (!isScrolling) {
      setIsScrolling(true);
      const timers = [
        incrementCount(setProjectsCount, 120),
        incrementCount(setClientsCount, 200),
        incrementCount(setPeopleCount, 50),
        incrementCount(setContractorsCount, 30),
      ];
      return () => timers.forEach(clearInterval);
    }
  };

  useEffect(() => {
    startCounting(); // Start counting on component mount

    const handleScroll = () => {
      const { bottom } = footerRef.current.getBoundingClientRect();
      if (bottom <= window.innerHeight) {
        startCounting();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  return (
    <footer
      className="bg-[#10182F] rounded-md max-w-[1280px] w-[95%] mx-auto p-10 mt-10 relative"
      ref={footerRef}
    >
      {/* Stats with Wrap Design */}
      <div className="bg-gray-700 p-5 rounded-lg mb-10">
        <h3
          className="text-2xl font-bold text-orange-500 text-center mb-2"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Our Milestones
        </h3>
        <div className="h-2 w-1/3 mx-auto bg-orange-500 mb-5" />
        <div className="flex justify-between text-center">
          <div className="flex flex-col">
            <h2
              className="text-4xl font-bold text-white"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              {projectsCount}
            </h2>
            <p
              className="text-gray-400"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              Projects Completed
            </p>
          </div>
          <div className="flex flex-col">
            <h2
              className="text-4xl font-bold text-white"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              {clientsCount}
            </h2>
            <p
              className="text-gray-400"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              Happy Clients
            </p>
          </div>
          <div className="flex flex-col">
            <h2
              className="text-4xl font-bold text-white"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              {peopleCount}
            </h2>
            <p
              className="text-gray-400"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              Our People
            </p>
          </div>
          <div className="flex flex-col">
            <h2
              className="text-4xl font-bold text-white"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              {contractorsCount}
            </h2>
            <p
              className="text-gray-400"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              Contractors
            </p>
          </div>
        </div>
      </div>

      {/* Centered Quick Links, Contact Us, and About Us */}
      <div className="flex justify-between mb-10">
        {/* Quick Links */}
        <div className="flex flex-col items-center w-1/3">
          <h4
            className="text-orange-500 text-2xl font-bold text-center"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Quick Links
          </h4>
          <div className="h-2 w-1/3 mx-auto bg-orange-500 mb-2" />
          <ul
            className="mt-2 list-disc list-inside text-gray-400 text-center text-lg"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            <li>
              <a
                href="#"
                className="hover:text-orange-400"
                style={{ textDecoration: "underline" }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-orange-400"
                style={{ textDecoration: "underline" }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-orange-400"
                style={{ textDecoration: "underline" }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-orange-400"
                style={{ textDecoration: "underline" }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col items-center w-1/4">
          <h4
            className="text-orange-500 text-2xl font-bold text-center"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Contact Us
          </h4>
          <div className="h-2 w-1/3 mx-auto bg-orange-500 mb-2" />
          <div className="flex items-center mt-2">
            <FaPhoneAlt className="mr-2 text-2xl text-gray-400" />
            <a href="tel:+918428590999" className="text-gray-400 text-lg">
              +91 8428590999
            </a>
          </div>
          <div className="flex items-center mt-2">
            <FaEnvelope className="mr-2 text-2xl text-gray-400" />
            <a href="mailto:info@h-poc.com" className="text-gray-400 text-lg">
              info@h-poc.com
            </a>
          </div>
          <div className="flex items-center mt-2">
            <FaMapMarkerAlt className="mr-2 text-2xl text-gray-400" />
            <p className="text-gray-400 text-lg">Madurai 625107,TamilNadu.</p>
          </div>
        </div>

        {/* About Us */}
        <div className="flex flex-col items-center w-1/4">
          <h4
            className="text-orange-500 text-2xl font-bold text-center"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            About Us
          </h4>
          <div className="h-2 w-1/3 mx-auto bg-orange-500 mb-2" />
          <p
            className="mt-2 text-gray-400 text-center text-lg"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      {/* Google Maps */}
      <div className="mb-10">
        <h4
          className="text-orange-500 text-2xl font-bold text-center"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Find Us Here
        </h4>
        <div className="h-2 w-1/3 mx-auto bg-orange-500 mb-2" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15880.673021312174!2d78.1759542!3d9.9503495!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad7a0eb5d77c3d%3A0x4b49b3a95f601a2b!2s9.9503495%2C%2078.1759542!5e0!3m2!1sen!2sin!4v1632340360426!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>

      {/* Newsletter and Follow Us On */}
      <div className="flex justify-end mt-5">
        <div className="flex flex-col items-start w-1/4">
          <h4
            className="text-orange-500 text-lg font-normal"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Newsletter
          </h4>
          <p
            className="text-[#bfbfbf] mt-2"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            Subscribe to our newsletter for updates and exclusive offers.
          </p>
          <form className="flex gap-2 mt-5">
            <input
              type="text"
              placeholder="Your email"
              className="h-10 border border-[#7489C6] rounded-md bg-transparent outline-none text-white placeholder:text-[#ccc] px-2"
              required
            />
            <button
              type="submit"
              className="bg-white text-black rounded-md px-4 py-2 font-medium transition duration-200 hover:bg-[#cecccc]"
            >
              SUBSCRIBE
            </button>
          </form>
          {/* Orange Rectangle Below Newsletter */}
          <div className="h-2 w-full bg-orange-500 my-3" />
          {/* Follow Us On Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/hpoc.hpoc.31?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3b5998] hover:text-orange-400 text-3xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/HPOC90"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1DA1F2] hover:text-orange-400 text-3xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077B5] hover:text-orange-400 text-3xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#333] hover:text-orange-400 text-3xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
