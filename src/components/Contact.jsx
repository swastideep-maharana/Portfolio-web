import React from "react";
import { CONTACT } from "../constants";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const titleRef = React.useRef(null);
  const textRef = React.useRef(null);
  const isTitleInView = useInView(titleRef, { once: false });
  const isTextInView = useInView(textRef, { once: false });

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        ref={titleRef}
        className="my-10 text-center text-4xl"
        initial="hidden"
        animate={isTitleInView ? "visible" : "hidden"}
        variants={titleVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Get in Touch
      </motion.h1>
      <motion.div
        ref={textRef}
        className="text-center tracking-tighter"
        initial="hidden"
        animate={isTextInView ? "visible" : "hidden"}
        variants={textVariants}
        transition={{ duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }}
      >
        <motion.p className="my-4">{CONTACT.address}</motion.p>
        <motion.p className="my-4">{CONTACT.phoneNo}</motion.p>
        <motion.a href="#" className="border-b">
          {CONTACT.email}
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Contact;
