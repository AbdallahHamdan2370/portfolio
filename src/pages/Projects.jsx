import React from "react";
import ProjectCard from "../components/ProjectCard";

// Images (replace or rename if needed)
import phishingImg from "../imgs/phishing.png";
import recyclingImg from "../imgs/recyclingbin.png";
import insuranceImg from "../imgs/insurance.png";
import networkImg from "../imgs/enterprise-network.png";
import tripleAImg from "../imgs/carwebsite.png";
import chatbotImg from "../imgs/chatbot.png";

import { motion } from "framer-motion";
import { fadeInLeft, parentVariant } from "../utils/animations";

const Projects = () => {
  return (
    <div className="min-h-screen padding flex items-center justify-center flex-col gap-6 overflow-x-hidden mt-28">
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
        className="flex flex-col md:flex-row flex-wrap w-full gap-6"
      >
        {/* 1. Ethical Intrusion Simulation */}
        <ProjectCard
          img={phishingImg}
          title="Ethical Intrusion Simulation"
          heading="Cybersecurity project simulating a real-world phishing attack."
          points={[
            "Simulated a phishing attack inside a VMware virtual machine environment",
            "Delivered a deceptive email containing a malicious executable payload",
            "Achieved root-level access using exploitation and backdoor techniques",
            "Demonstrated post-exploitation persistence and system compromise"
          ]}
        />

        {/* 2. Smart Recycling Bin */}
        <ProjectCard
          img={recyclingImg}
          title="Smart Recycling Bin"
          heading="Embedded systems project integrating hardware, software, and IoT."
          points={[
            "Built an intelligent recycling system using Raspberry Pi and ESP32",
            "Implemented object detection with a camera and Python-based processing",
            "Transmitted classification data via MQTT to an ESP32 microcontroller",
            "Integrated a Telegram chatbot for real-time user notifications",
            "Used ultrasonic sensors to monitor bin fill-level and trigger alerts"
          ]}
        />

        {/* 3. Insurance Prediction Tool */}
        <ProjectCard
          img={insuranceImg}
          title="Insurance Expenses Prediction Tool"
          heading="Machine learning project for predicting annual insurance costs."
          points={[
            "Developed a linear regression model to predict insurance expenses",
            "Performed data preprocessing and feature encoding using pandas",
            "Trained and evaluated the model using scikit-learn",
            "Optimized predictions using performance metrics such as MSE",
            "Generated predictions for unseen user input data"
          ]}
        />

        {/* 4. Enterprise Network Design */}
        <ProjectCard
          img={networkImg}
          title="Enterprise Network Design & Security"
          heading="Computer networks project simulating a secure enterprise environment."
          points={[
            "Designed a complex enterprise network topology using Cisco Packet Tracer",
            "Configured multiple VLANs, routers, switches, and WAN connections",
            "Implemented IP addressing schemes and routing protocols",
            "Applied Access Control Lists (ACLs) to enforce firewall rules",
            "Demonstrated secure network segmentation and access control"
          ]}
        />

        {/* 5. Triple A Website */}
        <ProjectCard
          img={tripleAImg}
          title="Triple A Carshop Website"
          heading="Database-driven e-commerce platform for car sales."
          points={[
            "Developed a full-stack car sales web application using MySQL and XAMPP",
            "Designed a relational database for users, cars, and transactions",
            "Implemented secure authentication with hashed passwords",
            "Tracked purchases using a dedicated transactions table",
            "Applied SQL joins, constraints, and indexing for performance"
          ]}
        />

        {/* 6. University Chatbot */}
        <ProjectCard
          img={chatbotImg}
          title="University Student Guide Chatbot"
          heading="Web-based chatbot for assisting new university students."
          points={[
            "Designed and implemented a chatbot to answer common student questions",
            "Provided real-time access to professor emails and office hours",
            "Built the interface using HTML, CSS, JavaScript, and backend scripting",
            "Focused on usability and accessibility for first-year students",
            "Improved onboarding experience through natural language interaction"
          ]}
        />
      </motion.div>
    </div>
  );
};

export default Projects;
