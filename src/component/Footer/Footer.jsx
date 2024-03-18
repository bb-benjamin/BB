import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="Footer__wrapper container flex flex-col gap-2 py-4 items-center text-white font-SpaceGrotest  md:flex-row md:justify-between md:px-5 z-0">
        <div className=" text-[24px] md:text-[32px] font-bold tracking-[0.44px] z-50">
            frederickasiamah
        </div>
        <div className=" flex gap-5 z-50">
            <Link to="https://www.github.com/sharpartzgh"><FaGithub className="w-[24px] h-[24px] cursor-pointer"/></Link>
            <Link to="https://www.frontendmentor.io/profile/sharpartzgh"><SiFrontendmentor className=" w-[24px] h-[24px]  cursor-pointer"/></Link>
            <Link to="https://www.linkedin.com/in/frederick-asiamah"><FaLinkedin className=" w-[24px] h-[24px] cursor-pointer"/></Link>
            <Link to="https://www.twitter.com/ApentengAsiamah"><FaTwitter className=" w-[24px] h-[24px] cursor-pointer"/></Link>    
        </div>
    </div>
  )
}

export default Footer