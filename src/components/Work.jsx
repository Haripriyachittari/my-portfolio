import React, { useEffect } from "react";
import {SiFirebase,SiTailwindcss,SiReact,SiHtml5,SiCss3,SiJavascript} from 'react-icons/si'
import {TbApi} from 'react-icons/tb'
import movie from '../assets/movie-box.png'
import quote from '../assets/quote.png'
import sneakerpp from '../assets/sneaker-product.png'
import weather from '../assets/weather-app.png'
import  sneakerwb from '../assets/sneakit.png'
import crypto from '../assets/Screenshot_16.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Work = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
   },[])
  return (
    <div name="work" className=" w-full md:h-screen bg-[#0a192f] text-gray-300 ">
      <div className="max-w-[1000px]  mx-auto p-4 w-full flex flex-col justify-center h-full">
        <div className="pb-6 " data-aos='slide-right'  >
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="pt-2">
            Check out some of my recent work
            <span className="text-pink-600">...</span>
          </p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Card */}

          <div style={{ backgroundImage: `url(${crypto})` }} data-aos='fade-up'
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto ">
            {/* Hovereffect */}
            <div className="opacity-0 group-hover:opacity-100 text-center content-div rounded-md">
              <div className="flex flex-col" >
              <span className="text-xl font-bold text-gray-300 m-4">
                CryptoZen - A Cryptocurrency tracker
              </span>
              <div className="flex gap-4 text-xl items-center justify-center mt-2">
                <SiReact  size={30} className='text-blue-500'/>
                <SiTailwindcss size={30} className='text-blue-700'/>
                <SiFirebase size={30} className='text-yellow-500'/>
              </div>
              </div>
              <div className="pt-2 text-center">
                <a href="https://cryptozen-rt.netlify.app" target='_blank' rel='noreferrer'>
                  <button className="text-center border border-pink-600 text-pink-600 rounded-xl px-4 hover:bg-pink-600 hover:text-gray-300 py-2 m-2 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Haripriyachittari/Cryptozen" target='_blank' rel='noreferrer'>
                  <button className="text-center border border-pink-600 text-pink-600 rounded-xl px-4 hover:bg-pink-600 hover:text-gray-300 py-2 m-2 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


          <div style={{ backgroundImage: `url(${movie})` }} data-aos='fade-up' data-aos-delay='200'
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hovereffect */}
            <div className="opacity-0 group-hover:opacity-100 text-center content-div rounded-md">
              <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-300 m-4">
                MovieBox - A Movie Search Engine
              </span>
              <div className="flex gap-4 text-xl items-center justify-center mt-2">
                <SiReact  size={30} className='text-blue-500'/>
                <SiCss3 size={30} className='text-blue-700'/>
                <TbApi size={30} className='text-yellow-500'/>
              </div>
              </div>
              <div className="pt-2 text-center">
                <a href="https://movie-box-xd.netlify.app/" target='_blank' rel='noreferrer'>
                  <button className="text-center border border-pink-600 text-pink-600  rounded-xl hover:text-gray-300 hover:bg-pink-600 px-4 py-2 m-2 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Haripriyachittari/Movie-box" target='_blank' rel='noreferrer'>
                  <button className="text-center  border border-pink-600 text-pink-600 rounded-xl hover:text-gray-300 hover:bg-pink-600  px-4 py-2 m-2 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${sneakerpp})` }} data-aos='fade-up' data-aos-delay='300'
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hovereffect */}
            <div className="opacity-0 group-hover:opacity-100 text-center content-div rounded-md">
              <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-300  m-4">
               Sneakers - A Product landing page
              </span>
              <div className="flex gap-4 text-xl items-center justify-center mt-2">
                <SiHtml5  size={30} className='text-orange-500'/>
                <SiCss3 size={30} className='text-blue-700'/>
                <SiJavascript size={30} className='text-yellow-500'/>
              </div>
              </div>
              <div className="pt-2 text-center">
                <a href="https://ecommerce-productpage01.netlify.app/" target='_blank' rel='noreferrer'>
                  <button className="text-center border border-pink-600 text-pink-600 rounded-xl hover:bg-pink-600  hover:text-gray-300 px-4 py-2 m-2 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Haripriyachittari/Ecommerce-Product-Page"  target='_blank' rel='noreferrer'>
                  <button className="text-center border border-pink-600 text-pink-600 rounded-xl hover:bg-pink-600  hover:text-gray-300 px-4 py-2 m-2 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${quote})` }} data-aos='fade-up' 
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hovereffect */}
            <div className="opacity-0 group-hover:opacity-100 text-center content-div rounded-md">
              <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-300 m-4 ">
                Quote A Day - Quote generator Application
              </span>
              <div className="flex gap-4 text-xl items-center justify-center mt-2">
                <SiHtml5  size={30} className='text-orange-500'/>
                <SiCss3 size={30} className='text-blue-700'/>
                <SiJavascript size={30} className='text-yellow-500'/>
              </div>
              
              </div>
              <div className="pt-2 text-center">
                <a href="https://quote-a-day.netlify.app/" target='_blank' rel='noreferrer'>
                  <button className="text-center border border-pink-600 text-pink-600 rounded-xl  hover:text-gray-300 hover:bg-pink-600 px-4 py-2 m-2 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Haripriyachittari/Quote-Generator-App" target='_blank' rel='noreferrer'>
                  <button className="text-center border border-pink-600 text-pink-600 rounded-xl hover:text-gray-300 hover:bg-pink-600  px-4 py-2 m-2 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${sneakerwb})` }} data-aos='fade-up' data-aos-delay='200'
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hovereffect */}
            <div className="opacity-0 group-hover:opacity-100 text-center content-div rounded-md">
              <div className="flex flex-col">
              <span className = "text-xl font-bold text-white m-4 ">
                SneakIT - Ecommerce landing page
              </span>
              <div className="flex gap-4 text-xl items-center justify-center mt-2">
                <SiHtml5  size={30} className='text-orange-500'/>
                <SiCss3 size={30} className='text-blue-700'/>
                <SiJavascript size={30} className='text-yellow-500'/>
              </div>
              </div>
              <div className="pt-2 text-center">
                <a href="https://sneakit-sneakit.netlify.app/" target='_blank' rel='noreferrer'>
                  <button className="text-center border border-pink-600 text-pink-600 rounded-xl hover:bg-pink-600 hover:text-gray-300 px-4 py-2 m-2 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Haripriyachittari/SneakIT-Ecommerce-website-for-sneakers" target='_blank' rel='noreferrer'>
                  <button className="text-center border border-pink-600 text-pink-600 rounded-xl hover:bg-pink-600 hover:text-gray-300 px-4 py-2 m-2 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${weather})` }} data-aos='fade-up' data-aos-delay='300'
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hovereffect */}
            <div className="opacity-0 group-hover:opacity-100 text-center content-div rounded-md">
              <div className="flex flex-col">
              <span className="text-xl font-bold text-white m-4 ">
                Weather Genie - A Weather Application 
              </span>
              <div className="flex gap-4 text-xl items-center justify-center mt-2">
                <SiHtml5  size={30} className='text-orange-500'/>
                <SiCss3 size={30} className='text-blue-700'/>
                <SiJavascript size={30} className='text-yellow-500'/>
                <TbApi size={30} className='text-yellow-700'/>

              </div>
              </div>
              <div className="pt-2 text-center">
                <a href="https://weather-genie.netlify.app/" target='_blank' rel='noreferrer'>
                  <button className="text-center border border-pink-600 text-pink-600 rounded-xl  hover:bg-pink-600  hover:text-gray-300 px-4 py-2 m-2 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Haripriyachittari/Weather-App" target='_blank'rel='noreferrer'>
                  <button className="text-center border border-pink-600 text-pink-600   rounded-xl  hover:bg-pink-600  hover:text-gray-300  px-4 py-2 m-2 font-bold text-lg">
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
