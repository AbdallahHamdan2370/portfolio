import React, { useState, useEffect } from "react";
import Logo from "../imgs/logo.png";
import { tabs } from "../utils/tabs.js";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScrollY) {
      setIsScrollingDown(true);
    } else {
      setIsScrollingDown(false);
    }
    setLastScrollY(latest);
  });

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.7,
        duration: 0.5,
      },
    },
  };

  const linkParent = {
    animate: {
      transition: {
        delayChildren: 0.35,
        staggerChildren: 0.2,
      },
    },
    initial: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    initial: {
      y: 55,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const xVariants = {
    initial: {
      rotate: "0deg",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    animate: {
      rotate: "180deg",
      transition: {
        delay: 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const logoVariant = {
    initial: {
      y: "-100px",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    animate: {
      y: "0px",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.nav
      className="nav padding font-outfit fixed w-full top-0 z-40 bg-blend-darken backdrop-blur-2xl"
      variants={navVariants}
      initial="visible"
      animate={isScrollingDown ? "hidden" : "visible"}
    >
      {/* LOGO */}
      <div className="w-14">
        <img src={Logo} alt="logo" className="w-full" />
      </div>

      {/* DESKTOP MENU */}
      <ul className="md:flex gap-3 hidden">
        {tabs.map((tab, i) => (
          <Link
            key={i}
            to={tab.path}
            className={`relative rounded-full px-3 py-[5px] duration-200 cursor-pointer ${
              i === activeTab ? "hover:text-gray-300 " : "hover:text-secondary"
            }`}
            onClick={() => setActiveTab(i)}
          >
            {activeTab === i && (
              <motion.span
                layoutId="tabs"
                className="absolute inset-0 bg-secondary w-full h-full"
                style={{ borderRadius: 9999 }}
              ></motion.span>
            )}
            <p className="relative flex items-center justify-center z-10">
              {tab.title}
            </p>
          </Link>
        ))}
      </ul>

      {/* MOBILE MENU ICON */}
      <i
        className="fi fi-rr-bars-staggered md:hidden flex text-3xl"
        onClick={() => setIsNavOpen(!isNavOpen)}
      ></i>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            variants={menuVariants}
            initial="exit"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-secondary z-50 pt-8 pb-3 px-10"
          >
            {/* Logo + Close Button */}
            <div className="flex flex-wrap h-fit justify-between">
              <motion.div
                className="w-14 origin-top"
                variants={logoVariant}
                initial="initial"
                animate="animate"
              >
                <img src={Logo} alt="logo" className="w-full" />
              </motion.div>

              <motion.h2
                variants={xVariants}
                initial="initial"
                animate="animate"
                exit="initial"
                className="text-xl flex items-center justify-center font-semibold w-[50px] h-[50px] border rounded-full cursor-pointer"
                onClick={() => setIsNavOpen(false)}
              >
                <p>X</p>
              </motion.h2>
            </div>

            {/* MOBILE NAV LINKS */}
            <motion.ul
              variants={linkParent}
              initial="initial"
              animate="animate"
              exit="initial"
              className="flex font-jose flex-col gap-5 justify-center items-center h-[80vh]"
            >
              {tabs.map((tab, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.li
                    variants={linkVariants}
                    className="text-5xl uppercase cursor-pointer"
                    onClick={() => {
                      setActiveTab(i);
                      setIsNavOpen(false);
                    }}
                  >
                    <Link to={tab.path}>{tab.title}</Link>
                  </motion.li>
                </div>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
