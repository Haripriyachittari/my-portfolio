import React, { useEffect } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

import java from "../assets/java.png";
import sql from "../assets/sql.png";
import git from "../assets/github.png";
import redux from "../assets/redux-logo.png";
import figma from "../assets/figma.png";
import bootstrap from "../assets/bootstrap.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div name="skills" className="bg-[#0a192f]  text-gray-300 w-full h-screen">
      {/* container */}
      <div className=" max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div data-aos="slide-right">
          <p className="text-4xl font-bold border-b-2 border-pink-600 inline">
            Skills
          </p>
          <p className="py-2">
            These are the technologies I've worked with
            <span className="text-pink-600">...</span>
          </p>
        </div>

        <div
          className=" w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8"
          data-aos="zoom-in-right"
        >
          <div className=" shadow-md shadow-[#040c16] flex hover:scale-110 duration-500 rounded-md p-2 ">
            <img className="w-10  h-10 mr-2 " src={html} alt="html icon" />
            <p className="my-2">HTML</p>
          </div>

          <div className=" shadow-md shadow-[#040c16] flex hover:scale-110 duration-500 rounded-md p-2 ">
            <img className="w-10  h-10  mr-2 " src={css} alt="css icon" />
            <p className="my-2">CSS</p>
          </div>

          <div className=" shadow-md shadow-[#040c16] flex hover:scale-110 duration-500 rounded-md p-2 ">
            <img
              className="w-10 h-10 mr-2 "
              src={javascript}
              alt="javascript icon"
            />
            <p className="my-2">JAVASCRIPT</p>
          </div>

          <div className=" shadow-md shadow-[#040c16] flex hover:scale-110 duration-500 rounded-md  p-2">
            <img className="w-10 h-10 mr-2" src={react} alt="react icon" />
            <p className="my-2">REACT</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] flex hover:scale-110 duration-500 rounded-md p-2 ">
            <img className="w-10 h-10 mr-2 " src={redux} alt="mongodb icon" />
            <p className="my-2">REDUX</p>
          </div>

          <div className=" shadow-md shadow-[#040c16] flex hover:scale-110 duration-500 rounded-md p-2 ">
            <img
              className="w-10 h-10 mr-2 "
              src={tailwind}
              alt="tailwind icon"
            />
            <p className="my-2">TAILWIND </p>
          </div>
          <div className=" shadow-md shadow-[#040c16] flex hover:scale-110 duration-500 rounded-md p-2 ">
            <img
              className="w-10 h-10 mr-2 "
              src={bootstrap}
              alt="firebase icon"
            />
            <p className="my-2">BOOTSTRAP</p>
          </div>

          <div className=" shadow-md shadow-[#040c16] flex hover:scale-110 duration-500 rounded-md p-2 ">
            <img className="w-10 h-10 mr-2 " src={sql} alt="github icon" />
            <p className="my-2">SQL</p>
          </div>

          <div className=" shadow-md shadow-[#040c16] flex hover:scale-110 duration-500 rounded-md p-2 ">
            <img className="w-10 h-10 mr-2 " src={java} alt="firebase icon" />
            <p className="my-2">JAVA</p>
          </div>

          <div className=" shadow-md shadow-[#040c16] flex hover:scale-110 duration-500 rounded-md p-2 ">
            <img className="w-10 h-10 mr-2 " src={git} alt="mongodb icon" />
            <p className="my-2">GIT/GITHUB</p>
          </div>

          <div className=" shadow-md shadow-[#040c16] flex hover:scale-110 duration-500 rounded-md p-2 ">
            <img className="w-10 h-10 mr-2 " src={figma} alt="firebase icon" />
            <p className="my-2">FIGMA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
