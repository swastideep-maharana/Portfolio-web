import React from "react";
import { motion, useInView } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {PROJECTS.map((project, index) => {
          const ref = React.useRef(null);
          const isInView = useInView(ref, { once: false });

          return (
            <motion.div
              ref={ref}
              key={index}
              className="flex flex-col items-center p-4 border border-neutral-700 rounded-lg transition-transform duration-300 hover:scale-105"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={projectVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-full lg:w-1/3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    width={150}
                    height={150}
                    alt={project.title}
                    className="mb-4 rounded border border-neutral-700"
                  />
                </a>
              </div>
              <div className="w-full lg:w-2/3 lg:pl-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold hover:underline"
                >
                  <h6 className="mb-2 font-semibold text-lg text-blue-500 hover:text-blue-700">
                    {project.title}
                  </h6>
                </a>
                <p className="mb-2 text-sm italic text-blue-500 flex items-center">
                  <span>Click here to visit the website</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 12.75l6.5-6.5m0 0l6.5 6.5m-6.5-6.5V21"
                    />
                  </svg>
                </p>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700 border border-neutral-700 transition duration-300 hover:bg-purple-700 hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
