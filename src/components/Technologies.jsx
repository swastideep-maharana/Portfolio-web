import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {[
          {
            icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
            key: "React",
          },
          { icon: <TbBrandNextjs className="text-7xl" />, key: "Next.js" },
          {
            icon: <SiMongodb className="text-7xl text-green-500" />,
            key: "MongoDB",
          },
          { icon: <DiRedis className="text-7xl text-red-700" />, key: "Redis" },
          {
            icon: <FaNodeJs className="text-7xl text-green-400" />,
            key: "Node.js",
          },
          
        ].map(({ icon, key }) => (
          <div
            key={key}
            className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
