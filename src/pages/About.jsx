import React from "react";
import b5 from "../imgs/b5.png";
import pd1 from "../imgs/pd1.png";
import pd2 from "../imgs/pd2.png";

export default function About() {
  return (
    <div className="min-h-screen padding flex flex-col items-center gap-10 mt-28">

      {/* PAGE TITLE */}
      <h1 className="text-5xl font-bold font-jose text-secondary">
        Skills and Plan
      </h1>

      {/* TWO-COLUMN LAYOUT */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">

        {/* LEFT SIDE — IMAGE */}
        <img
          src={b5}
          alt="About"
          className="rounded-2xl w-full md:w-1/2 max-w-md shadow-lg object-cover"
        />

        {/* RIGHT SIDE — SKILLS LIST */}
        <ul className="text-gray-300 text-lg leading-relaxed space-y-4 md:w-1/2">

          <li>
            <span className="font-semibold text-secondary">Problem Solving:</span>
             I enjoy breaking down complex issues and turning them into clear, effective solutions.
          </li>

          <li>
            <span className="font-semibold text-secondary">Programming Fundamentals:</span>
            A solid foundation in algorithms, logic building, and core coding concepts.
          </li>

          <li>
            <span className="font-semibold text-secondary">Web Development Basics:</span>
            Experience with building clean and responsive web interfaces using modern tools.
          </li>

          <li>
            <span className="font-semibold text-secondary">Team Collaboration:</span>
            Communicate ideas effectively and work well within group projects.
          </li>

          <li>
            <span className="font-semibold text-secondary">Time Management:</span>
            Able to stay organized and complete tasks efficiently under deadlines.
          </li>

          <li>
            <span className="font-semibold text-secondary">Continuous Learning:</span>
            Always motivated to grow, explore new technologies, and enhance my skills.
          </li>

        </ul>
      </div>
      <h1 className="text-5xl font-bold font-jose text-secondary">
        Personal Development Plan
      </h1>
       {/* LEFT SIDE — IMAGE */}
        <img
          src={pd1}
          alt="plan"
          className="rounded-2xl w-full md:w-1/2 max-w-md shadow-lg object-cover"
        />
        <img
          src={pd2}
          alt="plan"
          className="rounded-2xl w-full md:w-1/2 max-w-md shadow-lg object-cover"
        />
    </div>
    
  );
}
