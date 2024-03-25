import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="bg-[#161D29]">
      <div className="flex flex-row flex-wrap gap-8 items-center justify-between w-11/12 max-w-[1260px] text-[#6E727F] leading-6 mx-auto relative pt-14 pb-4">
        <div className="border-b w-[100%] flex gap-5 justify-between flex-wrap flex-row pb-5 border-[#2C333F]">
          <div>
            <Link to={'/'}>
              <p className="text-lg bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-[#ffffff00] bg-clip-text font-bold">
                SocietyBlogs
              </p>
            </Link>
          </div>

          <div className="flex  gap-10">
            <div className="text-[14px] cursor-pointer hover:text-[#C5C7D4] transition-all duration-200">
              <Link to={'/'}> Home </Link>
            </div>
            <div className="text-[14px] cursor-pointer hover:text-[#C5C7D4] transition-all duration-200">
              <Link to={'/showAllBlogs'}> Blogs </Link>
            </div>
            <div className="text-[14px] cursor-pointer hover:text-[#C5C7D4] transition-all duration-200">
              <Link to={'/contact'}> Contact Us </Link>
            </div>
          </div>

          <div className="text-center">
            © 2023 SocietyBlogs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;