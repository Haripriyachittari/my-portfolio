import React, { useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/Haripriya_Resume1.pdf";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div
        data-aos="fade-up"
        className="flex flex-col max-w-[1000px] h-full mx-auto px-8 justify-center "
      >
        <p className="text-pink-600 sm:mb-2">Hi, my name is</p>
        <h1 className="text-5xl sm:text-7xl font-bold text-[#dde5fa] mb-4">
          Haripriya Chittari{" "}
          <span className="text-4xl md:text-5xl animate-wave absolute">👋</span>{" "}
        </h1>

        <h2 className="text-3xl sm:text-5xl font-bold text-pink-600 mb-2">
          <Typewriter
            options={{
              strings: ["Software Developer", "Frontend Developer"],
              autoStart: true,
              delay: 180,
              loop: true,
            }}
          />
        </h2>

        <p className="text-[#8892b8] py-4 max-w-[700px] mb-4">
          I'm a software developer with more than two years of experience
          specialized in building (ocassionally designing) exceptional digital
          experiences. Currently focused on building beautiful and fully
          responsive websites.
        </p>
        <div>
          <button className="text-white group flex items-center  px-2  md:text-xl py-2  md:py-3 border-2 bg-pink-600 border-pink-600 hover:bg-transparent hover:text-pink-600 rounded-xl">
            <Link to="work" smooth={true} duration={600} className="px-2 flex">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-2" />
              </span>
            </Link>{" "}
          </button>
        </div>
        <div className=" md:hidden absolute bottom-12 right-0  flex flex-col gap-4  px-4">
          <a
            href="https://www.linkedin.com/in/haripriya-chittari-aa1022159/"
            target="_blank"
            rel="noreferrer"
            className=" text-blue-700"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/Haripriyachittari"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300"
          >
            <FaGithub size={30} />
          </a>
          <a href={resume} download className="animate-bounce text-orange-600">
            <BsFillPersonLinesFill size={30} />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
