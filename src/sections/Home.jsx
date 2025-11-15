import React from "react";
import Button from "../components/Button";
import Button2 from "../components/Button2";
import { motion } from "framer-motion";
import Spliter from "../components/Spliter";
import WordSpliter from "../components/WordSpliter";
import { headingVariants } from "../utils/animations";
import profileImg from "../imgs/profile.png"; // <-- ADD YOUR IMAGE HERE

const Home = () => {
  const heading = "Computer Engineering";
  const subheading = "I'm Abdallah Hamdan!";
  const text =
    "Computer engineering student passionate about building efficient systems, smart software, and real-world tech solutions.";
  const headingSpan = "Student";

  return (
    <div className="relative h-screen w-full padding flex items-center justify-center overflow-hidden">

      {/* BACKGROUND GLOW EFFECTS */}
      <div className="absolute top-[-150px] left-[-150px] w-[350px] h-[350px] bg-purple-700 blur-[200px] opacity-40"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[350px] h-[350px] bg-secondary blur-[200px] opacity-40"></div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col items-center justify-center text-center gap-5 w-full max-w-[900px] mx-auto font-jose">
        <br></br>

        {/* PROFILE IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-4 border-secondary shadow-xl shadow-secondary/30 mb-2"
      >
        <img
          src={profileImg}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>


        {/* SUBHEADING */}
        <motion.div
          variants={headingVariants}
          initial="initial"
          animate="animate"
          className="text-xl text-gray-300 font-medium tracking-wide"
        >
          {subheading}
        </motion.div>

        {/* MAIN HEADING */}
        <div className="md:text-7xl text-[46px] font-extrabold leading-tight">
          <Spliter
            text={heading}
            styles="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-secondary drop-shadow-xl"
          />
        </div>

        {/* SECONDARY HEADING (Student) */}
        <Spliter
          text={headingSpan}
          styles="text-secondary md:text-6xl text-[42px] font-bold drop-shadow-md"
          delay={0.9}
        />

        {/* DESCRIPTION */}
        <motion.p
          variants={headingVariants}
          initial="initial"
          animate="animate"
          className="max-w-[750px] text-gray-300 text-[18px] leading-relaxed"
        >
          <WordSpliter text={text} delay={1.3} />
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          variants={headingVariants}
          initial="initial"
          animate="animate"
          className="flex gap-4 mt-3"
        >
          <Button text={"View CV"} icon={"fi fi-rr-eye"} />
          <Button2
            text={"Contact Me"}
            icon={"fi fi-rr-comment-dots"}
            section={"contact"}
          />
        </motion.div>
      </div>

      {/* FLOATING LIGHT EFFECT */}
      <motion.div
        animate={{
          x: [0, 20, -20, 0],
          y: [0, 15, -10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-40 h-40 bg-secondary/30 blur-3xl rounded-full top-[30%] right-[10%]"
      ></motion.div>
    </div>
  );
};

export default Home;
