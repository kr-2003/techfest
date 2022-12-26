import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { GradientTexture, Polyhedron } from "@react-three/drei";
import { yellow } from "@mui/material/colors";
import { PolyhedronGeometry } from "three";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <motion.div
      className="flux z-auto grid bg-[#111b53] sm:h-auto xsm:h-auto w-full md:grid-cols-4 sm:grid-cols-2 xsm:grid-cols-2 overflow-hidden snap-mandatory before:rounded-t-[80px solid white] text-white md:pr-[100px] pb-10 md:pb-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="home1"
      style={{
        fontFamily: ["JetBrains Mono", "monospace"],
        fontWeight: "lighter",
        lineHeight: "1.5",
      }}
    >
      <div className="flux w-full bg-[#111b53] z-50 pb-10 md:col-span-1 xsm:col-span-2">
        <div className="rounded-full w-[150px] h-[150px] flex items-center justify-center mx-auto mt-[50px] overflow-hidden">
          <img
            className="relative z-50 w-[100%] h-[100%] absolute my-auto mx-auto"
            src="/fluxus.jpeg"
            alt="An SVG of an eye"
          />
        </div>

        <div className="h-[30px] mt-[30px] ">
          <div className="h-[30px] text-xl mx-auto text-center">
            {/* <FontAwesomeIcon
            icon={faPhone}
            className="text-3xl mr-[50px]"
          ></FontAwesomeIcon> */}
            9898989898
          </div>
        </div>
        <div className="h-[30px] mt-[20px]">
          <div className="h-[30px] text-xl text-center">
            {/* <FontAwesomeIcon
            icon={faAddressBook}
            className="text-3xl mr-[50px]"
          ></FontAwesomeIcon> */}
            IIT INDORE
          </div>
        </div>
      </div>
      <div className="bg-[#111b53] w-full z-50 pb-10">
        <h1 className="text-5xl md:text-3xl ml-[45px] mt-[40px] font-bold ">
          MORE
        </h1>
        <a
          href="#"
          className="text-2xl md:text-lg hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] ml-[45px] mt-[10px] hover:rounded-sm p-[4px] block m-[4px] font-bold w-full"
        >
          {/* <FontAwesomeIcon
            icon={faTwitter}
            className="text-3xl text-black"
          ></FontAwesomeIcon> */}
          Home
        </a>

        <a
          href="https://www.iiti.ac.in/"
          className="text-2xl md:text-lg hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold"
        >
          {/* <FontAwesomeIcon icon={faFacebook} className="text-3xl">
            {" "}
          </FontAwesomeIcon> */}
          IIT Indore
        </a>
        <a
          href="https://fluxus.co.in/"
          className="text-2xl md:text-lg hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold"
        >
          {/* <FontAwesomeIcon
            icon={faInstagram}
            className="text-3xl"
          ></FontAwesomeIcon> */}
          Fluxus
        </a>
        <a
          href="https://ca.fluxus.co.in/"
          className="text-2xl md:text-lg hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold"
        >
          {/* <FontAwesomeIcon
            icon={faLinkedin}
            className="text-3xl"
          ></FontAwesomeIcon> */}
          Fluxus CA Portal
        </a>
        <a className="text-2xl md:text-lg hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold">
          {/* <FontAwesomeIcon
            icon={faDiscord}
            className="text-3xl"
          ></FontAwesomeIcon> */}
          Fluxus Tech Exhibits
        </a>
        <a className="text-2xl md:text-lg hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold">
          {/* <FontAwesomeIcon
            icon={faDiscord}
            className="text-3xl"
          ></FontAwesomeIcon> */}
          SnT @IITI
        </a>
      </div>
      <div className="bg-[#111b53] w-full z-50 pb-10">
        <h1 className="text-3xl ml-[45px] mt-[40px] font-bold">FOLLOW</h1>

        <a
          href="https://www.instagram.com/fluxus_iit_indore/?hl=en"
          className="text-2xl md:text-lg hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-2xl mr-[10px] align-middle rounded-full p-[5px]  hover:bg-gradient-to-tr hover:from-[#fdf497] hover:via-[#fd5949] hover:via-[#d6249f] hover:to-[#285AEB] hover:text-white"
          ></FontAwesomeIcon>
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/company/fluxus---iit-indore/"
          className="text-2xl md:text-lg hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-2xl mr-[10px] align-middle rounded-full p-[6px]  hover:bg-[#007bb5] hover:text-white"
          ></FontAwesomeIcon>
          LinkedIn
        </a>

        <a
          href="https://www.facebook.com/fluxusiiti/"
          className="text-2xl md:text-lg hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-2xl mr-[10px] align-middle rounded-full p-[4px] hover:bg-white hover:text-[#3B5998] "
          ></FontAwesomeIcon>
          Facebook
        </a>
        <a className="text-2xl md:text-lg hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold">
          <FontAwesomeIcon
            icon={faDiscord}
            className="text-2xl mr-[10px] align-middle rounded-full p-[5px] hover:bg-[#7289d9] hover:text-white "
          ></FontAwesomeIcon>
          Discord
        </a>
        <a
          href="https://www.google.com"
          className="text-2xl md:text-lg  hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] ml-[45px] mt-[10px] hover:rounded-sm p-[4px] block m-[4px] font-bold"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-2xl mr-[10px] rounded-full p-[5px]  hover:bg-[#55ACEE] hover:text-white"
          ></FontAwesomeIcon>
          Twitter
        </a>
      </div>
      <div className="bg-[#111b53] w-full z-50 h-auto pb-10 font-bold">
        <h1 className="text-3xl ml-[45px] mt-[40px]">ADDRESS</h1>
        <div className="ml-[45px] mt-[10px] text-lg">
          Indian Institute of Technology Indore
          <br></br>
          Khandwa Road, Simrol, Indore
          <br></br>
          453552, INDIA
        </div>
        {/* <hr className="ml-[45px]  w-[350px]" /> */}
      </div>
    </motion.div>
  );
}

export default Footer;
