import React from "react";
import { motion } from "framer-motion";
import { fadeInLeft } from "../utils/animations";

const ProjectCard = ({ img, heading, title }) => {
  return (
    <motion.div
      variants={fadeInLeft}
      className="flex flex-col gap-2 items-center w-full"
    >
      <motion.div className="md:w-full md:flex-row md:min-h-[180px] sm:w-full rounded-lg flex flex-col gap-3 items-left font-outfit p-2 border border-gray-800">

        {/* Project Image */}
        <div className="md:w-[250px] h-[220px] w-full rounded-lg overflow-hidden">
          <img src={img} alt="project" className="w-full object-cover h-full" />
        </div>

        {/* Project Info */}
        <motion.div className="flex flex-col gap-4 h-full justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-semibold">{title}</h1>
          </div>

          {/* Short Description */}
          <p className="text-outfit text-lg text-gray-300">{heading}</p>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
