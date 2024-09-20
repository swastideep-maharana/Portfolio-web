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
      <div>
        {PROJECTS.map((project, index) => {
          const ref = React.useRef(null);
          const isInView = useInView(ref, { once: false });

          return (
            <motion.div
              ref={ref}
              key={index}
              className="mb-8 flex flex-wrap lg:justify-center"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={projectVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-full lg:w-1/4">
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
                    className="mb-6 rounded transition-transform duration-300 hover:scale-110"
                  />
                </a>
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold hover:underline"
                >
                  <h6 className="mb-2 font-semibold text-lg">
                    {project.title}
                  </h6>
                </a>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700 transition duration-300 hover:bg-purple-700 hover:text-white"
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
