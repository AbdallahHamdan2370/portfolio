import React from "react";
import EducationCard from "../components/EducationCard";
import img2 from "../imgs/img2.jpg";
import { fadeInLeft, fadeInRight, parentVariant } from "../utils/animations";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center flex-col gap-3 padding overflow-x-hidden">
      <motion.h1
        variants={fadeInLeft}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="text-4xl font-bold uppercase flex text-left w-full mb-3 mt-8 md:mt-0"
      >
        Education
      </motion.h1>

      <div className="flex flex-wrap gap-3">
        {/* Left Image */}
        <motion.div
          variants={fadeInLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.125 }}
          className="rounded-xl overflow-hidden md:w-[30%] h-[180px] md:h-[380px] w-full relative"
        >
          <motion.img
            src={img2}
            alt="image"
            className="w-full md:w-full md:h-full h-full object-cover"
          />
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
            }}
          />
        </motion.div>

        {/* Right side content */}
        <div className="md:w-[68%] w-full flex flex-wrap gap-3">

          {/* Main University Degree */}
          <motion.div
            className="w-full"
            variants={parentVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.125 }}
          >
            <EducationCard
              title={"Pursuing a Bachelor in Computer Engineering"}
              location={"Beirut Arab University"}
              date={"Sep 2020 - present"}
              desc={
                "Studying computer engineering with a focus on software development, embedded systems, and computer architecture, building projects that connect hardware and software."
              }
            />
          </motion.div>



          {/* --------------------------- */}
          {/*  📘 Added Cybersecurity Certifications  */}
          {/* --------------------------- */}

          <motion.div
            variants={parentVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.125 }}
            className="w-full"
          >
            <EducationCard
              title={"Ethical Hacking Essentials (EHE)"}
              location={"EC-Council – Coursera"}
              date={"Completed: October 5, 2025"}
              desc={
                "Completed a 32-hour program covering fundamentals of ethical hacking, information security concepts, vulnerabilities, threats, and cybersecurity assessments. Achieved a 90% grade."
              }
            />
          </motion.div>

          <motion.div
            variants={parentVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.125 }}
            className="w-full"
          >
            <EducationCard
              title={"Generative AI Cybersecurity & Privacy for Leaders"}
              location={"Vanderbilt University – Coursera"}
              date={"Completed: October 5, 2025"}
              desc={
                "Explored cybersecurity implications of AI systems, privacy risks, and mitigation strategies for modern organizations. Achieved a perfect 100% grade."
              }
            />
          </motion.div>

          <motion.div
            variants={parentVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.125 }}
            className="w-full"
          >
            <EducationCard
              title={"Introduction to Python for Cybersecurity"}
              location={"Infosec – Coursera"}
              date={"Completed: October 5, 2025"}
              desc={
                "Learned Python fundamentals for cybersecurity tasks including automation, security scripting, and threat detection workflows. Achieved a 100% grade."
              }
            />
          </motion.div>

          <motion.div
            variants={parentVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.125 }}
            className="w-full"
          >
            <EducationCard
              title={"Python for Active Defense"}
              location={"Infosec – Coursera"}
              date={"Completed: October 5, 2025"}
              desc={
                "Developed skills in using Python for active defense, deception tools, network monitoring, and cybersecurity automation. Achieved a 100% grade."
              }
            />
          </motion.div>

          <motion.div
            variants={parentVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.125 }}
            className="w-full"
          >
            <EducationCard
              title={"Introduction to AI for Cybersecurity"}
              location={"Johns Hopkins University – Coursera"}
              date={"Completed: October 5, 2025"}
              desc={
                "Studied foundational AI concepts applied to cybersecurity, including anomaly detection, classification models, and AI-based defense strategies. Achieved a 97.33% grade."
              }
            />
          </motion.div>

          <motion.div
            variants={parentVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.125 }}
            className="w-full"
          >
            <EducationCard
              title={"Cybersecurity Compliance Framework, Standards & Regulations"}
              location={"IBM – Coursera"}
              date={"Completed: October 7, 2025"}
              desc={
                "Covered major cybersecurity regulations, compliance frameworks, risk management standards, and governance models. Achieved a 90.50% grade."
              }
            />
          </motion.div>

          <motion.div
            variants={parentVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.125 }}
            className="w-full"
          >
            <EducationCard
              title={"Computer Networks and Network Security"}
              location={"IBM – Coursera"}
              date={"Completed: October 8, 2025"}
              desc={
                "Studied network architecture, communication protocols, vulnerabilities, and network defense techniques. Achieved a 98.80% grade."
              }
            />
          </motion.div>

          <motion.div
            variants={parentVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.125 }}
            className="w-full"
          >
            <EducationCard
              title={"Securing AI and Advanced Topics"}
              location={"Johns Hopkins University – Coursera"}
              date={"Completed: October 11, 2025"}
              desc={
                "Explored adversarial attacks, GAN-based threats, AI vulnerabilities, and advanced methods for securing AI-powered systems. Achieved a 95.20% grade."
              }
            />
          </motion.div>

          <motion.div
            variants={parentVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.125 }}
            className="w-full"
          >
            <EducationCard
              title={"Advanced Threat Hunting and Incident Response"}
              location={"LearnQuest – Coursera"}
              date={"Completed: October 13, 2025"}
              desc={
                "Gained advanced skills in threat hunting, incident response, cybersecurity analytics, and defense strategies. Achieved a 96.70% grade."
              }
            />
          </motion.div>

          <motion.div
            variants={parentVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.125 }}
            className="w-full"
          >
            <EducationCard
              title={"Next-Generation Firewalls and Intrusion Prevention"}
              location={"LearnQuest – Coursera"}
              date={"Completed: October 18, 2025"}
              desc={
                "Learned operation of next-generation firewalls, intrusion prevention systems, and advanced threat detection techniques. Achieved a perfect 100% grade."
              }
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Education;

