import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assest/images/Logo.png";

import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

const SocialMedia = ({ socialMedia = "", link = "/" }) => {
  return (
    <a
      href={link}
      className=" w-[60px] h-[60px] rounded-[50%] bg-[#f7b71e] flex flex-row justify-center items-center  cursor-pointer "
    >
      {socialMedia === "instagram" && <FaInstagram size={26} color="white" />}
      {socialMedia === "linkedin" && <FaLinkedinIn size={26} color="white" />}
      {socialMedia === "twitter" && <FaTwitter size={26} color="white" />}
    </a>
  );
};

const navbar_data = [
  {
    title: "Home",
    subNav: [],
  },
  {
    title: "INFRASTRUCTURE",
    subNav: [
      "ROAD AND INFRA",
      "SOLID WASTE MANAGEMENT",
      "LED STREET LIGHTS",
      "MULTI LEVEL CAR MARKETING",
      "BRIDGES",
    ],
  },
  {
    title: "PRODUCTS",
    subNav: ["READY MIX CONCRETE", "BLUE METALS"],
  },
  {
    title: "PROJECTS",
    subNav: ["ONGOING PROJECT", "COMPLETED PROJECT"],
  },
  {
    title: "CAREERS",
    subNav: [],
  },
  {
    title: "ABOUT US",
    subNav: [],
  },
  {
    title: "CONTACT US",
    subNav: [],
  },
];

const IndivNav = ({ title = "", index = 0, delay = 0 }) => {
  let initial = {
    rotate: index % 2 == 0 ? 30 : -30,
    //     rotateY: index % 2 == 0 ? 90 : 90,
    rotateX: index % 2 == 0 ? 90 : 90,
    opacity: 0,
    y: 0,
  };
  // console.log(index, initial);
  let animate = {
    rotate: 0,
    rotateY: 0,
    rotateX: 0,
    opacity: [0, 75, 100, 100],
    y: 0,
    opacity: 100,
  };

  const transition = {
    duration: 0.3,
    ease: "easeInOut",
    delay: index * 0.1,
    //     type: "spring",
    //     stiffness: 1000, // Lower stiffness for a softer spring
    //     damping: 2, // Damping controls oscillation
  };
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className=" w-full h-[45px] flex flex-col justify-center ps-4 font-poppins text-[14px] text-white  bg-gray-600 hover:bg-gray-400 duration-200"
    >
      {title}
    </motion.div>
  );
};

const NavLink = ({ content = {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  const array = [
    "Road and Infra",
    "Road and Infra",
    "Road and Infra",
    "Road and Infra",
    "Road and Infra",
    "Road and Infra",
  ];
  return (
    <div
      onClick={() => {
        setIsOpen((state) => {
          return !state;
        });
      }}
      onMouseEnter={() => {
        setTimeout(() => {
          setIsOpen(true);
        }, 250);
      }}
      onMouseLeave={() => {
        controls.start({
          opacity: 0,
          scale: 0.9,
          y: "-30px",
          rounded: "50%",
          transition: {
            duration: 0.4,
            ease: "easeInOut",
          },
        });
        setTimeout(() => {
          setIsOpen(false);
        }, 400);
      }}
      className=" relative w-fit ps-12 pe-12 h-full flex flex-row justify-center items-center font-poppins text-[#333d40] text-[15px] hover:bg-[#f7b71e] hover:text-white duration-200 border-s-[1px] border-e-[1px] cursor-pointer "
    >
      {content?.title}

      {isOpen && (
        <motion.div
          animate={controls}
          className="w-[250px] h-fit absolute  top-[100%] left-[0%]  rounded-[8px] flex flex-col gap-[2px]"
        >
          {content?.subNav?.map((item, index) => {
            return <IndivNav title={item} delay={0.5} index={index} />;
          })}
        </motion.div>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <div className=" w-full h-fit ">
      {/* First line  */}

      <div className=" w-full h-[75px] flex flex-row justify-evenly bg-[#333d40] ">
        {/* Logo and title  */}
        <div className=" w-fit h-full flex flex-row gap-[1rem]">
          {/* Image  */}
          <div className=" h-full w-fit flex flex-col justify-center ">
            <img className=" w-full h-[90%] object-cover" src={Logo} />
          </div>
          {/* Title */}
          <div className=" h-full w-fit flex flex-col justify-center">
            <h1 className=" font-poppins text-[26px] font-bold text-white">
              HPOC INDIA PRIVATE LIMITED
            </h1>
          </div>
        </div>
        {/* Social links  */}
        <div className="w-fit h-full flex flex-row items-center gap-[1rem]">
          {/* Social media  */}
          <SocialMedia socialMedia={"instagram"} link="/" />
          <SocialMedia socialMedia={"twitter"} link="/" />
          <SocialMedia socialMedia={"linkedin"} link="/" />
        </div>
      </div>

      <div className=" w-full h-[75px] flex flex-row ps-3 pe-3  border-b-2 ">
        {navbar_data?.map((item) => {
          return <NavLink content={item} />;
        })}
      </div>
    </div>
  );
};

export default Navbar;
