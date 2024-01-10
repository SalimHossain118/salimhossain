/** @format */
import React from "react";
import { videoOne } from "../../assets/index.js";
import { motion } from "framer-motion";

const VideoBanner = () => {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.3,
        x: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease: "easeIn",
        duration: 2,
      }}
      className="w-full lgl:w-1/2 flex justify-center items-center relative rounded-lg">
      <video
        className="rounded-lg shadow-2xl w-[700px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
        src={videoOne}
        autoPlay
        loop
        muted
        playsInline
        style={{ boxShadow: "10px 10px 20px 10px rgba(255, 0, 0, 0.6)" }}
      />
    </motion.div>
  );
};

export default VideoBanner;
