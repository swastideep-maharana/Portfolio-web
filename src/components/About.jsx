import React from "react";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-12 text-center text-3xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-1/2 flex justify-center">
          <p className="my-2 max-w-xl py-4 text-left">{ABOUT_TEXT}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
