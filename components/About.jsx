import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Box from "@mui/material/Box";
import Button from "./Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import ThreeCanvas from "./ThreeCanvas";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const events = [
  {
    eventName: "Byte Bandits CTF",
  },
  { eventName: "Hackistica" },
  { eventName: "Divide By Zero" },
  { eventName: "Code Golf" },
  { eventName: "Surprise Language" },
];

function About() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [event, setEvent] = React.useState({ eventName: "" });
  const handleOpen = (idx) => {
    setEvent(events[idx]);
    console.log(events);
    setOpen(true);
  };
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.3,
          delay: 0.3,
        },
      });

      animation2.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.3,
          bounce: 0.1,
        },
      });
      animation3.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.3,
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
      });
      animation2.start({
        opacity: 0,
      });
      animation3.start({
        opacity: 0,
        // scale: 0.5,
      });
    }
  });

  return (
    <div
      id="about"
      className="h-auto md:w-screen sm:w-full xsm:w-full xxsm:w-full x-50"
    >
      <motion.div className="z-50 h-auto">
        <div className="grid md:grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1 sm:h-auto xsm:h-auto md:h-auto">
          <motion.h1
            className="z-50 text-white text-9xl text-center subheadings uppercase m-0"
            // animate={animation}
            style={{
              fontFamily: "valorax Regular",
              fontWeight: "normal",
            }}
          >
            About
          </motion.h1>
        </div>
        <hr className="z-50"></hr>
        <div
          className="grid md:grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 sm:h-auto xsm:h-auto"
          // variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <div
            className="z-50 relative flex items-center justify-center"
            // animate={animatixon}
          >
            <ThreeCanvas className="opacity-0.4"></ThreeCanvas>
            <img
              className="z-50 w-[80%] h-[60%] absolute my-auto mx-auto"
              src="/wordcropped.png"
              alt="An SVG of an eye"
            />
          </div>
          <div className="flex items-center justify-center pr-[40px] mr-4">
            <motion.h1
              className="z-50 text-[#ffffff] md:text-9xl mb-10 ml-10"
              // animate={animation2}
              style={{
                // fontFamily: "valorax Regular",
                // fontWeight: "normal",
                fontFamily: ["JetBrains Mono", "monospace"],
                fontSize: "20px",
                lineHeight: "1.5",
              }}
            >
              <div ref={ref}></div>
              Ingenium is the first edition of a tech fest in Fluxus, IIT
              Indore. <br />
              <br />
              {`Our vision is to level-up the idea of what a "tech fest" means!`}{" "}
              <br />
              <br />
              We have various online and offline competitions with thousands of
              students and enthusiasts taking part. Workshops, Technical
              exhibitions, Tech Talks, Start up Expo, Research and Industry
              Conclave, Online hackathons, Real life hardware problems, and a
              lot more we plan to Achieve in the future
            </motion.h1>
          </div>
        </div>

        {/* <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-flow-row gap-8"></div> */}
      </motion.div>
    </div>
  );
}

export default About;
