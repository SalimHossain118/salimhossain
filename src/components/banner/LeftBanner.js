/** @format */

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Software Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.3,
        x: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease: "easeIn",
        duration: 2,
      }}
      className="w-full lgl:w-1/2 flex flex-col gap-5 ml-8">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Welcome To My World </h4>
        <h1 className="text-5xl font-bold text-white">
          Hi,
          <span className="text-designColor capitalize">
            I'am Salim Hossain
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-red">
          Full Stack <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          As a Full Stack Developer with extensive experience in various
          programming languages, databases, and frameworks, I am confident in my
          ability to deliver high-quality work to my clients. My technical
          skills include advanced features for programming languages such as
          Java, Javascript, and C# , as well as basic features for languages
          like Solidity and Python. I also have experience with various
          databases including SQL (MySQL, sqlAlchemy, sqlLite), NoSQL (MongoDB,
          GraphQL), and Vector DB (Pinecorn, Redis).
        </p>
      </div>
      {/* Media */}
    </motion.div>
  );
};

export default LeftBanner;
