import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="flex items-center justify-between py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="Company Logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {[
          {
            href: "https://www.linkedin.com/in/swastideep-maharana-090158280/",
            icon: <FaLinkedin />,
            label: "LinkedIn",
          },
          {
            href: "https://github.com/swastideep-maharana",
            icon: <FaGithub />,
            label: "GitHub",
          },
          {
            href: "https://www.instagram.com/swastideep__/",
            icon: <FaInstagram />,
            label: "Instagram",
          },
          {
            href: "https://x.com/swastideep_",
            icon: <FaTwitter />,
            label: "Twitter",
          },
        ].map(({ href, icon, label }, index) => (
          <motion.a
            key={index}
            href={href}
            aria-label={label}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
