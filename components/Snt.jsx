import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Snt() {
    return (
        <div className="flex flex-col w-full bg-black h-screen">
            <h1 className="text-white uppercase text-5xl my-8 ml-8">
                snt page
            </h1>
            <div className="snap-y snap-mandatory relative overflow-y-scroll h-[calc(100vh-7rem)]">
                <div className="w-full h-[calc(100vh-7rem)] flex flex-row justify-start items-center snap-start">
                    <div className="w-1/2 h-full flex items-center justify-center">
                        <div className="w-96 h-96 bg-red-500 rounded-lg"></div>
                    </div>
                    <div className="flex flex-col w-full h-full px-32 items-start justify-center">
                        <h1 className="text-white text-3xl uppercase mb-8">programming club</h1>
                        <p className="text-white text-md" style={{ fontFamily: ["JetBrains Mono", "monospace"] }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit neque magna. Aliquam at aliquet felis, a commodo augue. Vivamus nulla tellus, venenatis nec magna et, dapibus posuere diam. Sed porttitor nulla eu lobortis accumsan. Sed id molestie est. Aliquam at nulla nec purus semper vulputate. Cras a consequat eros, non mollis nibh. Ut hendrerit quis mi id dapibus. Aliquam erat volutpat. Suspendisse malesuada dapibus augue, id egestas sem scelerisque vehicula. Pellentesque sit amet velit ornare, semper libero quis, euismod enim.</p>
                    </div>
                </div>  
                <div className="w-full h-[calc(100vh-7rem)] flex flex-row justify-start items-center snap-start">
                    <div className="flex flex-col w-full h-full px-32 items-start justify-center">
                        <h1 className="text-white text-3xl uppercase mb-8">programming club</h1>
                        <p className="text-white text-md" style={{ fontFamily: ["JetBrains Mono", "monospace"] }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit neque magna. Aliquam at aliquet felis, a commodo augue. Vivamus nulla tellus, venenatis nec magna et, dapibus posuere diam. Sed porttitor nulla eu lobortis accumsan. Sed id molestie est. Aliquam at nulla nec purus semper vulputate. Cras a consequat eros, non mollis nibh. Ut hendrerit quis mi id dapibus. Aliquam erat volutpat. Suspendisse malesuada dapibus augue, id egestas sem scelerisque vehicula. Pellentesque sit amet velit ornare, semper libero quis, euismod enim.</p>
                    </div>
                    <div className="w-1/2 h-full flex items-center justify-center">
                        <div className="w-96 h-96 bg-red-500 rounded-lg"></div>
                    </div>
                </div>  
                <div className="w-full h-[calc(100vh-7rem)] flex flex-row justify-start items-center snap-start">
                    <div className="w-1/2 h-full flex items-center justify-center">
                        <div className="w-96 h-96 bg-red-500 rounded-lg"></div>
                    </div>
                    <div className="flex flex-col w-full h-full px-32 items-start justify-center">
                        <h1 className="text-white text-3xl uppercase mb-8">programming club</h1>
                        <p className="text-white text-md" style={{ fontFamily: ["JetBrains Mono", "monospace"] }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit neque magna. Aliquam at aliquet felis, a commodo augue. Vivamus nulla tellus, venenatis nec magna et, dapibus posuere diam. Sed porttitor nulla eu lobortis accumsan. Sed id molestie est. Aliquam at nulla nec purus semper vulputate. Cras a consequat eros, non mollis nibh. Ut hendrerit quis mi id dapibus. Aliquam erat volutpat. Suspendisse malesuada dapibus augue, id egestas sem scelerisque vehicula. Pellentesque sit amet velit ornare, semper libero quis, euismod enim.</p>
                    </div>
                </div>  
                {/* <div className="bg-gray-900 w-full h-screen flex flex-row justify-start items-center">
                    <div className="flex flex-col w-full px-32 items-start justify-center">
                        <h1 className="text-white text-3xl uppercase mb-8">programming club</h1>
                        <p className="text-white text-md" style={{ fontFamily: ["JetBrains Mono", "monospace"] }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit neque magna. Aliquam at aliquet felis, a commodo augue. Vivamus nulla tellus, venenatis nec magna et, dapibus posuere diam. Sed porttitor nulla eu lobortis accumsan. Sed id molestie est. Aliquam at nulla nec purus semper vulputate. Cras a consequat eros, non mollis nibh. Ut hendrerit quis mi id dapibus. Aliquam erat volutpat. Suspendisse malesuada dapibus augue, id egestas sem scelerisque vehicula. Pellentesque sit amet velit ornare, semper libero quis, euismod enim.</p>
                    </div>
                    <div className="w-1/3 h-full flex items-center justify-center border-l-2">
                        <div className="w-72 h-72 bg-red-500 rounded-lg"></div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
export default Snt;