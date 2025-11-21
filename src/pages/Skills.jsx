import React, { useState } from "react";
import { skillsTabs } from "../utils/tabs";
import { motion } from "framer-motion";
import { techStack } from "../utils/skillsIutil";
import { tools } from "../utils/skillsIutil";
import { fadeInLeft, fadeInRight } from "../utils/animations";
import img from "../imgs/img1.jpeg";

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full min-h-screen padding flex flex-col md:flex-row items-center justify-center gap-12 font-outfit overflow-x-hidden mt-28">

      {/* LEFT COLUMN — HEADING / TEXT / TABS */}
      <motion.div
        variants={fadeInLeft}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col gap-6 md:w-[45%] w-full"
      >
        {/* TITLE */}
        <div>
          <h1 className="text-5xl font-bold font-jose uppercase bg-clip-text text-transparent bg-gradient-to-r from-secondary to-purple-400 drop-shadow-lg">
            Skills & Tools
          </h1>

          <p className="text-gray-300 mt-3 leading-relaxed text-[17px]">
            I specialize in both hardware and software engineering —
            from embedded systems and programming languages
            to full-stack development, cybersecurity, networking,
            and advanced engineering tools.
          </p>
        </div>

        {/* TABS */}
        <div className="flex gap-3 w-fit bg-[#0b001a] bg-opacity-60 p-2 rounded-lg backdrop-blur-xl shadow-md border border-purple-900/40">
          {skillsTabs.map((tab, i) => (
            <div
              key={i}
              onClick={() => setActiveTab(i)}
              className="relative cursor-pointer font-outfit text-[16px] px-4 py-2 text-gray-200 hover:text-secondary transition-all"
            >
              {tab.title}
              {activeTab === i && (
                <motion.div
                  layoutId="skilltabs-upgraded"
                  className="absolute bottom-0 left-0 w-full h-[3px] bg-secondary rounded-md"
                ></motion.div>
              )}
            </div>
          ))}
        </div>

        {/* GRID OF SKILLS */}
        <div className="mt-3 grid grid-cols-3 sm:grid-cols-4 gap-4">
          {(activeTab === 0 ? techStack : tools).map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-4 flex flex-col items-center justify-center rounded-xl bg-[#120726] border border-purple-900/40 shadow-md backdrop-blur-xl hover:border-secondary/80 transition-all"
            >
              <i className={`${item.icon} text-4xl mb-2`}></i>
              <p className="text-gray-200 text-sm text-center">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT COLUMN — IMAGE WITH GRADIENT EFFECT */}
      <motion.div
        variants={fadeInRight}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="md:w-[45%] w-full relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/40"
      >
        <img
          src={img}
          alt="skills"
          className="w-full h-[400px] object-cover blur-[0.5px]"
        />

        {/* GRADIENT OVERLAY */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))",
          }}
        ></div>

        {/* BORDER GLOW */}
        <div className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none animate-glow border-gradient"></div>
      </motion.div>

    </div>
  );
};

export default Skills;
