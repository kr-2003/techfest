import React from "react";
import { motion } from "framer-motion";

function Button(props) {
  return (
    <motion.button
      className="bg-[#FF595A] py-4 px-8 text-[#001233] opacity-[0.8] font-bold lg:text-base md:text-base xxsm:text-4xl"
      style={{
        clipPath:
          "polygon(12px 0px, 100% 0px, 100% 72%, calc(100% - 12px) 100%, 0px 100%, 0px 12px)",
        background: "rgb(2,0,36)",
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(170,170,255,1) 0%, rgba(84,226,255,1) 100%)",
        fontFamily: ["JetBrains Mono", "monospace"],
        lineHeight: "1.5",
      }}
      whileHover={{
        scale: 1.2,
        backgroundColor: "white",
        transition: { duration: 0.2 },
      }}
    >
      {props.value}
    </motion.button>
  );
}

export default Button;
