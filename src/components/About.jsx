import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';


const About = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
   },[])
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 relative'>
        <div className='flex flex-col items-center justify-center h-full w-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
            <div className='sm:text-right pb-8 pl-4' data-aos='slide-right'>
             <p className='text-4xl font-bold  inline border-b-4 border-pink-600'>About</p>
            </div>
            <div></div>
        </div>
        <div  className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div data-aos='fade-up'>
                <p className='text-4xl font-bold sm:text-right'>
                    Hi, I'm <span className='text-pink-600'>Haripriya,</span> Nice to meet you. Please take a look around.
                </p>
            </div>
            <div data-aos='fade-up'>
                <p>I'm passionate about building excellent software that improves the lives around me. I build web applications using the best & latest front end frameworks which gives user dynamic web experience. I am always open to new oppurtunities that challenge me in every step of the way.</p>
            </div>

        </div>
        <div className='fixed md:bottom-2 md:right-4 right-4 bottom-3'>
         
        <Link  to ="home" smooth={true} duration={600} className=' cursor-pointer z-999  text-pink-600'>
            <BsFillArrowUpSquareFill size={32}   />
          </Link>
        </div>
        

        </div>
      
    </div>
  )
}

export default About
