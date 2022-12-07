import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin,FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { Link } from "react-scroll";
import resume from '../assets/HARIPRIYA_CV_Resume.pdf'


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center  px-4 bg-[#0a192f] text-gray-300 shadow-lg z-50">
      <div>
        <a href='/'><h1 className="text-4xl sm:text-5xl font-monoton text-pink-600">HP</h1></a>
      </div>
      {/* Menu */}

      <ul className=" hidden md:flex font-bold md:text-xl">
        <li >
        <Link  to="home" smooth={true} duration={500}  className='hover:border-b-2 inline py-2 border-pink-600'>
          Home
        </Link>
          </li>
        <li> <Link  to="about" smooth={true} duration={500} className='hover:border-b-2 inline py-2 border-pink-600'>
          About
        </Link></li>
        <li> <Link  to="skills" smooth={true} duration={500} className='hover:border-b-2 inline py-2 border-pink-600'>
          Skills
        </Link></li>
        <li> <Link  to="work" smooth={true} duration={500} className='hover:border-b-2 inline py-2 border-pink-600'>
         Work
        </Link></li>
        <li> <Link  to="contact" smooth={true} duration={500} className='hover:border-b-2 inline py-2 border-pink-600'>
          Contact
        </Link></li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        { !nav ? <FaBars  size={25}/> : <FaTimes size={25}/>}
      </div>
      {/* mobile menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute  top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a192f]"
        }
      >
        <li className="py-6 text-3xl text-pink-600"><Link onClick={handleClick} to="home" smooth={true} duration={600}>
          Home
        </Link></li>
        <li className="py-6 text-3xl text-pink-600"><Link onClick={handleClick} to="about" smooth={true} duration={600}>
          About
        </Link></li>
        <li className="py-6 text-3xl text-pink-600"><Link onClick={handleClick} to="skills" smooth={true} duration={600}>
          Skills
        </Link></li>
        <li className="py-6 text-3xl text-pink-600"><Link onClick={handleClick} to="work" smooth={true} duration={600}>
         Work
        </Link></li>
        <li className="py-6 text-3xl text-pink-600"><Link  onClick={handleClick} to ="contact" smooth={true} duration={600}>
          Contact
        </Link></li>
      </ul>
      {/* socials */}
      <div className=" hidden lg:flex flex-col fixed top-[35%] left-0">
        <ul>
          <li className=" mb-1 flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded">
          <a href="https://www.linkedin.com/in/haripriya-chittari-aa1022159/"  target='_blank' rel="noreferrer" className=" flex justify-between items-center w-full text-gray-300 ">
          Linkedin<FaLinkedin size={30}/>
        </a>
          </li>
          <li className=" mb-1 flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded">
          <a href="https://github.com/Haripriyachittari" target='_blank' rel="noreferrer" className="flex justify-between items-center w-full text-gray-300 ">
          Github<FaGithub size={30}/>
        </a>
          </li>
          <li className=" mb-1 flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b1] rounded">
         <Link  to ="contact" smooth={true} duration={600} className='flex justify-between items-center w-full text-gray-300 '>
          Email<HiOutlineMail size={30}/>
        </Link>
          
        
          </li>
          <li className=" mb-1 flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-700 rounded">
          <a href={resume}  download className=" flex justify-between items-center w-full text-gray-300 ">
          Resume<BsFillPersonLinesFill size={30}/>
        </a>
          </li>
        </ul>
        
        
      </div>
    </div>
  );
};

export default Navbar;
