import React from "react";
import { motion } from "framer-motion";
import { fadeInLeft } from "../utils/animations";

const ProjectCard = ({ img, title, heading, points }) => {
  return (
    <motion.div
      variants={fadeInLeft}
      className="flex flex-col gap-2 items-center w-full"
    >
      <motion.div className="md:w-full md:flex-row md:min-h-[180px] sm:w-full rounded-lg flex flex-col gap-4 font-outfit p-4 border border-gray-800">

        {/* Project Image */}
        <div className="md:w-[250px] h-[220px] w-full rounded-lg overflow-hidden">
          <img
            src={img}
            alt={`${title} project`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Info */}
        <motion.div className="flex flex-col gap-3 h-full justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">{title}</h1>

            {/* Short description (optional) */}
            {heading && (
              <p className="text-gray-300 text-base">{heading}</p>
            )}
          </div>

          {/* Bullet points */}
          {points && points.length > 0 && (
            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
