import React from "react";
import movie from '../assets/movie-box.png'
import quote from '../assets/quote.png'
import sneakerpp from '../assets/sneaker-product.png'
import weather from '../assets/weather-app.png'
import  sneakerwb from '../assets/sneakit.png'
import sunny from '../assets/sunnyside.png'


const Work = () => {
  return (
    <div name="work" className=" w-full md:h-screen bg-[#0a192f] text-gray-300 ">
      <div className="max-w-[1000px]  mx-auto p-4 w-full flex flex-col justify-center h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-1">
            Check out some of my recent work
            <span className="text-pink-600">...</span>
          </p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Card */}
          <div style={{ backgroundImage: `url(${movie})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hovereffect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-white text-center">
                MovieBox (React Js application)
              </span>
              <div className="pt-8 text-center">
                <a href="https://movie-box-xd.netlify.app/" target='_blank' rel='noreferrer'>
                  <button className="text-center bg-white text-gray-700 rounded px-4 py-3 m-2 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Haripriyachittari/Movie-box" target='_blank' rel='noreferrer'>
                  <button className="text-center bg-white text-gray-700 rounded px-4 py-3 m-2 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${sneakerpp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hovereffect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-white text-center">
               Sneaker Product page
              </span>
              <div className="pt-8 text-center">
                <a href="https://ecommerce-productpage01.netlify.app/" target='_blank' rel='noreferrer'>
                  <button className="text-center bg-white text-gray-700 rounded px-4 py-3 m-2 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Haripriyachittari/Ecommerce-Product-Page"  target='_blank' rel='noreferrer'>
                  <button className="text-center bg-white text-gray-700 rounded px-4 py-3 m-2 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${quote})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hovereffect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-white text-center">
                Quote Generator Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Haripriyachittari/Quote-Generator-App" target='_blank' rel='noreferrer'>
                  <button className="text-center bg-white text-gray-700 rounded px-4 py-3 m-2 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://quote-a-day.netlify.app/" target='_blank' rel='noreferrer'>
                  <button className="text-center bg-white text-gray-700 rounded px-4 py-3 m-2 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${sneakerwb})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hovereffect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className = "text-xl font-bold text-white text-center">
                SneakIT - Ecommerce landing page
              </span>
              <div className="pt-8 text-center">
                <a href="https://sneakit-sneakit.netlify.app/" target='_blank' rel='noreferrer'>
                  <button className="text-center bg-white text-gray-700 rounded px-4 py-3 m-2 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Haripriyachittari/SneakIT-Ecommerce-website-for-sneakers" target='_blank' rel='noreferrer'>
                  <button className="text-center bg-white text-gray-700 rounded px-4 py-3 m-2 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${weather})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hovereffect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-white text-center">
                Weather Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Haripriyachittari/Weather-App" target='_blank' rel='noreferrer'>
                  <button className="text-center bg-white text-gray-700 rounded px-4 py-3 m-2 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://weather-genie.netlify.app/" target='_blank'rel='noreferrer'>
                  <button className="text-center bg-white text-gray-700 rounded px-4 py-3 m-2 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${sunny})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hovereffect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-white text-center">
                Sunnyside-Startup landing page
              </span>
              <div className="pt-8 text-center">
                <a href="https://sunny-sidelp.netlify.app/" target='_blank' rel='noreferrer'>
                  <button className="text-center bg-white text-gray-700 rounded px-4 py-3 m-2 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Haripriyachittari/Sunnyside-agency-Landing-page" target='_blank' rel='noreferrer'>
                  <button className="text-center bg-white text-gray-700 rounded px-4 py-3 m-2 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          

          
        </div>
      </div>
    </div>
  );
};

export default Work;
