import React, { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import Progress from "./Progress";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import Header from "./Header";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 20,
    fontFamily: "JetBrains Mono",
  },
}));

const links = [
  { name: "Home", link: "#home" },
  { name: "About Us", link: "#about" },
  { name: "Fluxus", link:"#fluxus"},
  { name: "Events", link: "#events" },
  { name: "Sponsors", link: "#sponsors" },
  { name: "Tech Exhibits", link: "" },
];

function Navbar() {
  const [dropdown, setDropdown] = useState("");
  const registerHandler = () => {
    console.log("C");
    alert("Clicked");
  };

  const hoverHandler = (name) => {
    setDropdown(name);
  };
  const hover2Handler = (name) => {
    setDropdown("");
  };

  const [open, setOpen] = useState(false);
  return (
    <>
      <Progress></Progress>
      <div className="w-full top-0 opacity-100 z-50">
        <div className="flex items-center justify-between colo py-4 md:px-10 px-7">
          <div className="font-bold text-xl cursor-pointer flex items-center text-gray-800">
            <span className="text-xl text-cyan-900 mr-1">
              <div
                onClick={() => setOpen(!open)}
                className="text-xl absolute right-8 top-10 cursor-pointer md:hidden z-50"
              >
                <ion-icon
                  name={open ? "close" : "menu-outline"}
                  style={{ color: "white", fontSize: "100px" }}
                ></ion-icon>
              </div>
            </span>
          </div>

          <motion.ul
            className={`md:flex md:bg-transparent lg:bg-transparent sm:bg-[#111b53]  xsm:bg-[#111b53]  xxsm:bg-[#111b53] md:items-center md:pb-0 pb-12 absolute md:static z-[999] colo md:z-50 z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${
              open ? "top-[150px]" : "top-[-700px]"
            } z-5`}
          >
            {links.map((link) => (
              <>
                {link.name === "Tech Exhibits" && (
                  <LightTooltip title="Coming Soon!">
                    <li
                      className="md:ml-8 text-md md:my-0 my-7 hover:cursor-pointer"
                      key={link.name}
                      onMouseEnter={() => hoverHandler(link.name)}
                      onMouseLeave={() => hover2Handler()}
                    >
                      <Link
                        className="lg:text-base md:text-base xxsm:text-4xl text-[#CAC0B3] hover:text-gray-400 duration-500 font-robotoCondensed "
                        href={link.link}
                        smooth={true}
                        duration={1000}
                        style={{
                          fontFamily: ["JetBrains Mono", "monospace"],
                          lineHeight: "1.5",
                        }}
                      >
                        {" "}
                        {link.name}
                      </Link>
                      {link.name === "Fluxus" && (
                        <motion.div
                          className={`w-[400px] bg-blue-800 z-[999] absolute ${
                            dropdown !== "Fluxus" && "hidden"
                          } z-auto bg-red-800`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            type: "spring",
                            duration: 2,
                            bounce: 0.1,
                          }}
                        >
                          <motion.ul
                            className="text-white w-100 p-4 z-auto bg-red-800"
                            style={{
                              fontFamily: ["JetBrains Mono", "monospace"],
                              lineHeight: "1.5",
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                              type: "spring",
                              duration: 2,
                              bounce: 0.1,
                            }}
                          >
                            <Link href={"/competitions"}>
                              <li className="w-100 mb-4 mt-2 z-auto bg-red-800">
                                Fluxus Home
                              </li>
                            </Link>
                            <Link href={"/workshops"}>
                              <li className="w-100 mb-4 z-auto bg-red-800">
                                Workshops
                              </li>
                            </Link>
                            <Link href={"/talks"}>
                              <li className="w-100 mb-4 z-auto bg-red-800">
                                Talks
                              </li>
                            </Link>
                          </motion.ul>
                        </motion.div>
                      )}
                      {link.name === "Events" && (
                        <motion.div
                          className={`w-[400px] bg-blue-800 z-[999] absolute ${
                            dropdown !== "Events" && "hidden"
                          } z-auto bg-red-800`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            type: "spring",
                            duration: 2,
                            bounce: 0.1,
                          }}
                        >
                          <motion.ul
                            className="text-white w-100 p-4 z-auto bg-red-800"
                            style={{
                              fontFamily: ["JetBrains Mono", "monospace"],
                              lineHeight: "1.5",
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                              type: "spring",
                              duration: 2,
                              bounce: 0.1,
                            }}
                          >
                            <Link href={"/competitions"}>
                              <li className="w-100 mb-4 mt-2 z-auto bg-red-800">
                                Competitions
                              </li>
                            </Link>
                            <Link href={"/workshops"}>
                              <li className="w-100 mb-4 z-auto bg-red-800">
                                Workshops
                              </li>
                            </Link>
                            <Link href={"/talks"}>
                              <li className="w-100 mb-4 z-auto bg-red-800">
                                Talks
                              </li>
                            </Link>
                          </motion.ul>
                        </motion.div>
                      )}
                    </li>
                  </LightTooltip>
                )}
                {link.name !== "Tech Exhibits" && (
                  <li
                    className="md:ml-8 text-xl md:my-0 my-7 hover:cursor-pointer"
                    key={link.name}
                    onMouseEnter={() => hoverHandler(link.name)}
                    onMouseLeave={() => hover2Handler()}
                  >
                    <Link
                      className="lg:text-base md:text-base xxsm:text-4xl text-[#CAC0B3] hover:text-gray-400 duration-500 font-robotoCondensed "
                      href={"/" + link.link}
                      smooth={true}
                      duration={1000}
                      style={{
                        fontFamily: ["JetBrains Mono", "monospace"],
                        lineHeight: "1.5",
                      }}
                    >
                      {" "}
                      {link.name}
                    </Link>
                    {link.name === "Events" && (
                      <motion.div
                        className={`border-2 rounded-lg border-white w-[400px] bg-gray-800 z-[999] absolute ${
                          dropdown !== "Events" && "hidden"
                        }`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          type: "spring",
                          duration: 2,
                          bounce: 0.1,
                        }}
                      >
                        <motion.ul
                          className="text-white w-100 p-4"
                          style={{
                            fontFamily: ["JetBrains Mono", "monospace"],
                            lineHeight: "1.5",
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            type: "spring",
                            duration: 2,
                            bounce: 0.1,
                          }}
                        >
                          <Link href={"/competitions"}>
                            <li className="w-100 mb-4 mt-2">Competitions</li>
                          </Link>
                          <Link href={"/workshops"}>
                            <li className="w-100 mb-4">Workshops</li>
                          </Link>
                          <Link href={"/talks"}>
                            <li className="w-100 mb-4">Talks</li>
                          </Link>
                        </motion.ul>
                      </motion.div>
                    )}
                    {link.name === "Fluxus" && (
                      <motion.div
                        className={`border-2 rounded-lg border-white w-[400px] bg-gray-800 z-[999] absolute ${
                          dropdown !== "Fluxus" && "hidden"
                        }`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          type: "spring",
                          duration: 2,
                          bounce: 0.1,
                        }}
                      >
                        <motion.ul
                          className="text-white w-100 p-4"
                          style={{
                            fontFamily: ["JetBrains Mono", "monospace"],
                            lineHeight: "1.5",
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            type: "spring",
                            duration: 2,
                            bounce: 0.1,
                          }}
                        >
                          <Link href={"https://fluxus.co.in/home"}>
                            <li className="w-100 mb-4 mt-2">Fluxus Home</li>
                          </Link>
                          <Link href={"https://ca.fluxus.co.in"}>
                            <li className="w-100 mb-4">Fluxus CA Portal</li>
                          </Link>
                        </motion.ul>
                      </motion.div>
                    )}
                  </li>
                )}
              </>
            ))}

            <div onClick={registerHandler} className="ml-5">
              <Button value={`Register`}></Button>
            </div>
          </motion.ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
