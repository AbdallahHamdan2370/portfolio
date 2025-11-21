import React from "react";
import Logo from "../imgs/logo.png";
import { tabs, socialMediaLinks } from "../utils/tabs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="padding h-fit bg-black w-full">
      <div className="flex items-start justify-between flex-wrap gap-4">

        {/* LOGO */}
        <img src={Logo} alt="logo" className="w-16" />

        {/* INTERNAL LINKS */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Links</h1>

          {tabs.map((tab, i) => (
            <Link
              key={i}
              to={tab.path}
              className="flex flex-col gap-3 hover:text-secondary duration-200 font-outfit"
            >
              <span>{tab.title}</span>
            </Link>
          ))}
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Social Links</h1>

          {socialMediaLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-3 hover:text-secondary duration-200 font-outfit"
            >
              <span>{link.name}</span>
            </a>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
