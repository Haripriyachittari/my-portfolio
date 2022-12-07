import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongo.png";
import java from '../assets/java.png'
import sql from '../assets/sql.png'

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f]  text-gray-300 w-full h-screen">
      {/* container */}
      <div className=" max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-2 border-pink-600 inline">Skills
          </p>
          <p className="py-2">These are the technologies I've worked with<span className="text-pink-600">...</span></p>
        </div>

        <div className=" w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md ">
            <img className="w-20 mx-auto" src={html} alt="html icon" />
            <p className="my-2">HTML</p>
          </div>

          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md ">
            <img className="w-20 mx-auto" src={css} alt="css icon" />
            <p className="my-2">CSS</p>
          </div>

          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md ">
            <img className="w-20 mx-auto" src={javascript} alt="javascript icon" />
            <p className="my-2">JAVASCRIPT</p>
          </div>

          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md ">
            <img className="w-20 mx-auto" src={react} alt="react icon" />
            <p className="my-2">REACT</p>
          </div>

          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md ">
            <img className="w-20 mx-auto" src={tailwind} alt="tailwind icon" />
            <p className="my-2">TAILWIND</p>
          </div>

          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md ">
            <img className="w-20 mx-auto" src={sql} alt="github icon" />
            <p className="my-2">SQL</p>
          </div>

          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md ">
            <img className="w-20 mx-auto" src={mongodb} alt="mongodb icon" />
            <p className="my-2">MONGODB</p>
          </div>

          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md ">
            <img className="w-20 mx-auto" src={java} alt="firebase icon" />
            <p className="my-2">JAVA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
