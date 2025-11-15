import React from "react";
import ProjectCard from "../components/ProjectCard";
import noteImg from "../imgs/noteapp.png";
import youtubeImg from "../imgs/youtubeclone.png";
import carImg from "../imgs/carwebsite.png";
import gymImg from "../imgs/GymWebsite.png";
import netImg from "../imgs/Networking.png";
import { motion } from "framer-motion";
import { fadeInLeft, parentVariant } from "../utils/animations";

const Projects = () => {
  return (
    <div className="min-h-screen padding flex items-center justify-center flex-wrap w-full flex-col gap-4 overflow-x-hidden">
      <motion.h1
        variants={fadeInLeft}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="text-4xl font-bold uppercase w-full text-left"
      >
        Projects
      </motion.h1>

      <motion.div
        variants={parentVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.125 }}
        className="flex flex-wrap w-full gap-3 flex-col md:flex-row"
      >

        {/* Project 1 */}
        <ProjectCard
          img={noteImg}
          title={"Note It"}
          heading={"A simple notes application built using the MERN stack."}
        />

        {/* Project 2 */}
        <ProjectCard
          img={youtubeImg}
          title={"YouTube Clone"}
          heading={"A lightweight YouTube-style interface built with React."}
        />
        
        {/* Project 3 */}
        <ProjectCard
          img={gymImg}
          title={"Gym Management Website"}
          heading={"An interactive gym web interface"}
        />
        {/* Project 4 */}
        <ProjectCard
          img={carImg}
          title={"Triple A Carshop Website"}
          heading={"A fancy carshop interface for customers"}
        />


        {/* Project 6 */}
        <ProjectCard
          img={netImg}
          title={"Company Network System"}
          heading={"Managing networks inside a company"}
        />
        
      </motion.div>
    </div>
  );
};

export default Projects;
