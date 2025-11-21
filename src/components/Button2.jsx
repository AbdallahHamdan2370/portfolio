import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Button2 = ({ text, icon, to }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="btn-secondary flex items-center gap-2 px-6 py-3 rounded-full cursor-pointer"
    >
      <Link to={to} className="flex items-center gap-2">
        <i className={icon}></i>
        <span>{text}</span>
      </Link>
    </motion.div>
  );
};

export default Button2;
