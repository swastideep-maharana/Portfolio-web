import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/swastideepProfile.png";

import { motion, useInView } from "framer-motion";

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const textRef = React.useRef(null);
  const imageRef = React.useRef(null);
  const isTextInView = useInView(textRef, { once: false });
  const isImageInView = useInView(imageRef, { once: false });

  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <motion.div
          ref={textRef}
          className="w-full lg:w-1/2"
          initial="hidden"
          animate={isTextInView ? "visible" : "hidden"}
          variants={textVariants}
          transition={{ duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }}
        >
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              className="pb-4 text-5xl font-thin tracking-tight lg:mt-16 lg:pb-16 lg:text-8xl"
              variants={textVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Swastideep Maharana
            </motion.h1>
            <motion.span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent lg:text-4xl"
              variants={textVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              FrontEnd Developer
            </motion.span>
            <motion.p
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
              variants={textVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          ref={imageRef}
          className="w-full lg:w-1/2 lg:p-8"
          initial="hidden"
          animate={isImageInView ? "visible" : "hidden"}
          variants={imageVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex justify-center">
            <motion.img
              src={profilePic}
              alt="swastideep"
              className="rounded-3xl" // Add the rounded corners here
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
