import React, { useState } from "react";
import HomePage from "../components/HomePage";
import Sponsors from "../components/Sponsors";
import Events from "../components/Events";
import About from "../components/About";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Particle from "../components/Particle";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Progress from "../components/Progress";
import Carousel from "../components/Carousel";
// import window from 'global'

function home() {
  // console.log(window.innerWidth);
  // const [is_desktop,setType]=useState(false)
  // if(window.innerWidth>760){
  //   return (
  //     <div className="overflow-x-hidden">
  //       <motion.div
  //         initial={{ opacity: 0.4 }}
  //         animate={{ opacity: 1 }}
  //         transition={{ duration: 0.8 }}
  //         exit={{ opacity: 2 }}
  //         >
  //           <Particle></Particle>
  //         {/* <DeviceIdentifier isDesktop={true}>
  //           <Particle></Particle>
  //         </DeviceIdentifier> */}
  //         {/* <CustomView condition={is_desktop}>
  //           <Particle></Particle>
  //         </CustomView> */}
  //         {/* if(is_desktop){
  //           <Particle></Particle>
  //         } */}
  //         {/* <BrowserView>
  //           <Particle></Particle>
  //         </BrowserView> */}
  //         <Navbar></Navbar>
  //         <HomePage></HomePage>
  //         <About></About>
  //         <Events></Events>
  //         <Sponsors></Sponsors>
  //         <Footer></Footer>
  //       </motion.div>
  //     </div>
  //   );

  // }else{
  return (
    <div className="overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 2 }}
      >
        {/* <Particle></Particle> */}
        {/* <DeviceIdentifier isDesktop={true}>
            <Particle></Particle>
          </DeviceIdentifier> */}
        {/* <CustomView condition={is_desktop}>
            <Particle></Particle>
          </CustomView> */}
        {/* if(is_desktop){
            <Particle></Particle>
          } */}
        {/* <BrowserView>
            <Particle></Particle>
          </BrowserView> */}
       
        <Navbar></Navbar>
        <HomePage></HomePage>
        <About></About>
        <Events></Events>
        <Sponsors></Sponsors>
        <Footer></Footer>
      </motion.div>
    </div>
  );
}

export default home;
